import { useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
    </>
  );
};
