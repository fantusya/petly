import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateAvatar } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import {
  AvatarWrapper,
  Avatar,
  AddAvatarBtn,
  HiddenInput,
  EditPhotoBtn,
  Kamera,
  Check,
} from './UserPhoto.styled';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const { t } = useTranslation();

  const { user, name } = useAuth();
  const { avatarURL } = user;

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = e => {
    e.preventDefault();

    if (!selectedFile) {
      console.log('CHOOSE FILE PLS');
      toast.error('Choose an image to change your avatar!');
      return;
    }
    console.log('selectedFile', selectedFile);
    const data = new FormData();
    data.append('avatarURL', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleChange = e => {
    const chosenImg = e.target.files[0];
    console.log(chosenImg);

    if (!e.target.files.length || !chosenImg) {
      setSelectedFile(null);
      toast.error(i18n.t('Chose_image'));
      return;
    }
    setSelectedFile(chosenImg);
    setIsFileSelected(true);
    toast.success(i18n.t('Photo_selected'));
  };

  return (
    <AvatarWrapper>
      {avatarURL ? (
        <Avatar>
          <img srcSet={avatarURL} alt={name} width="233px" />
        </Avatar>
      ) : (
        <>
          <AddAvatarBtn onClick={() => filePicker.current.click()}>
            {isFileSelected ? <Check /> : <AvatarPlus />}
          </AddAvatarBtn>

          <HiddenInput
            ref={filePicker}
            type="file"
            name="avatar"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.gif,.web"
          />
        </>
      )}
      <EditPhotoBtn type="submit" onClick={handleUpload}>
        <Kamera />
        <span>{t('Edit_photo')}</span>
      </EditPhotoBtn>
    </AvatarWrapper>
  );
};

export default UserPhoto;
