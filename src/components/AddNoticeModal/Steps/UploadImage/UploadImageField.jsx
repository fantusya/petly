import { useField } from 'formik';
import { ReactComponent as Plus } from 'images/svg/addAvatar.svg'
import { Box } from 'components/Box/Box';
import {
  ErrorStyle,
  LoadImgLabel,
  LoadImageCont,
  ImagePreview,
  LoadImgPlus,
  LoadImgInput,
} from './UploadImageField.styled';

const UploadImageField = ({ handleChange, fileDataURL, name, label }) => {
  const [meta] = useField(name);
  const { value } = meta;

  return (
    <LoadImgLabel>
      <Box width="100%" textAlign="left">
        {label}
      </Box>
      {fileDataURL ? (
        <LoadImageCont>
          <ImagePreview
            src={fileDataURL}
            alt="Preview"
            width="47px"
            height="47px"
          />
        </LoadImageCont>
      ) : (
        <>
          <LoadImageCont>
            <LoadImgPlus src={Plus} alt="upload" />
            <ErrorStyle name={name} component="div" />
          </LoadImageCont>
          <LoadImgInput
            selected={value}
            name={name}
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </>
      )}
    </LoadImgLabel>
  );
};

export default UploadImageField;
