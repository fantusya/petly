import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { DateInput } from '../AddNoticeModal.styled';

const DatePickerInput = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={date => setValue(date)}
      placeholderText="Select the date"
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      customInput={<DateInput />}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickerInput;