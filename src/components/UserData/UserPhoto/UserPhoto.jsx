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
  BackdropImg,
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
    console.log('CLICK ON EDIT');

    if (!selectedFile) {
      console.log('FORBIDDEN');
      toast.error('Please choose an image to change your avatar!');
      return;
      // filePicker.current.click();
      // handleChange();
    }

    // console.log('selectedFile', selectedFile);
    const data = new FormData();
    data.append('avatarURL', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleChange = e => {
    const chosenImg = e.target.files[0];
    // console.log(chosenImg, 'chosen image');

    if (!e.target.files.length || !chosenImg) {
      toast.error(i18n.t('Chose_image'));
      setSelectedFile(null);
      return;
    }

    setSelectedFile(chosenImg);
    toast.success(i18n.t('Photo_selected'));
  };

  return (
    <AvatarWrapper>
      <AddAvatarBtn>
        {user.avatarURL ? (
          <AvatarImg
            src={user.avatarURL}
            alt={user.name}
            width="233px"
            onClick={() => filePicker.current.click()}
          />
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

      <EditPhotoBtn type="submit" onClick={handleSubmit}>
        <Kamera />
        <span>{t('Edit_photo')}</span>
      </EditPhotoBtn>
    </AvatarWrapper>
    // <AvatarWrapper onSubmit={handleSubmit}>
    //   <AddAvatarBtn>
    //     {user.avatarURL ? (
    //       <AvatarImg src={user.avatarURL} alt={user.name} width="233px" />
    //     ) : (
    //       <AvatarPlus />
    //     )}
    //     {/* {isFileSelected ? <Check /> : <AvatarPlus />} */}
    //   </AddAvatarBtn>

    //   <HiddenInput
    //     ref={filePicker}
    //     type="file"
    //     name="avatar"
    //     onChange={handleChange}
    //     accept="image/*,.png,.jpg,.gif,.web"
    //   />

    //   <EditPhotoBtn type="submit">
    //     <Kamera />
    //     <span>{t('Edit_photo')}</span>
    //   </EditPhotoBtn>
    // </AvatarWrapper>
  );
};

export default UserPhoto;
