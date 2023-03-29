import {
  RadioLabel,
  RadioInput,
  RadioButton,
} from 'components/AddNoticeModal/AddNoticeModal.styled';
import { useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <RadioLabel >
        
        <RadioInput {...field} {...props} />
        <RadioButton>{label}</RadioButton>
      </RadioLabel >
    </>
  );
};
