import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
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

  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      avatarURL: user?.avatarURL,
    },
    onSubmit: ({ avatarURL }) => {
      if (!selectedFile) {
        filePicker.current.click();
        return;
      }

      const data = new FormData();
      data.append('avatarURL', selectedFile);
      dispatch(updateAvatar(data));
    },
  });

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
        name="avatarURL"
        onChange={e => {
          setSelectedFile(e.currentTarget.files[0]);
          setFieldValue('avatarURL', e.currentTarget.files[0]);
          toast.success(i18n.t('Photo_selected'));
        }}
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
