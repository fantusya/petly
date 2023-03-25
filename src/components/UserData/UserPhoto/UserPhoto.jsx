import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import {
  AddAvatarBtn,
  HiddenInput,
  EditPhotoBtn,
  Kamera,
} from './UserPhoto.styled';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = e => {
    e.preventDefault();

    if (!selectedFile) {
      console.log('CHOOSE FILE PLS');
      return;
    }
    const data = new FormData();
    data.append('avatar', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleChange = e => {
    const chosenImg = e.target.files[0];

    if (!e.target.files.length || !chosenImg) {
      setSelectedFile(null);
      toast.warning('Choose an image to change your avatar!');
      return;
    }
    setSelectedFile(chosenImg);
  };

  return (
    <form onSubmit={handleUpload}>
      <AddAvatarBtn onClick={() => filePicker.current.click()}>
        <AvatarPlus />
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
        <span>Edit photo</span>
      </EditPhotoBtn>
    </form>
  );
};

export default UserPhoto;
