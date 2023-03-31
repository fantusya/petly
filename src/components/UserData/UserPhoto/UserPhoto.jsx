import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateAvatar } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import {
  AvatarWrapper,
  AvatarImg,
  AddAvatarBtn,
  HiddenInput,
  EditPhotoBtn,
  Kamera,
} from './UserPhoto.styled';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { t } = useTranslation();
  const { user } = useAuth();

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (!selectedFile) {
      filePicker.current.click();
      handleChange(e);
    }

    console.log('selectedFile', selectedFile);
    const data = new FormData();
    data.append('avatarURL', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleChange = e => {
    const chosenImg = e.currentTarget.files[0];
    console.log(chosenImg, 'chosen image');

    if (!e.target.files.length || !chosenImg) {
      toast.error(i18n.t('Chose_image'));
      return;
    }

    setSelectedFile(chosenImg);
    toast.success(i18n.t('Photo_selected'));
  };

  return (
    <AvatarWrapper onSubmit={handleSubmit}>
      <AddAvatarBtn>
        {user.avatarURL ? (
          <AvatarImg src={user.avatarURL} alt={user.name} width="233px" />
        ) : (
          <AvatarPlus />
        )}
        {/* {isFileSelected ? <Check /> : <AvatarPlus />} */}
      </AddAvatarBtn>

      <HiddenInput
        ref={filePicker}
        type="file"
        name="avatar"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.gif,.web"
      />

      <EditPhotoBtn type="submit">
        <Kamera />
        <span>{t('Edit_photo')}</span>
      </EditPhotoBtn>
    </AvatarWrapper>
  );
};

export default UserPhoto;
