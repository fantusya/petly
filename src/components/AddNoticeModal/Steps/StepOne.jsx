import { Formik, Form, Field, ErrorMessage } from 'formik';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_orange.css';

import { stepOneSchema } from 'helpers/validationSchemas/addNotice';
import { TextField } from 'helpers/addNoticeCustomField/noticeInput';

const StepOne = props => {
  const handleSubmit = values => {
    props.next({ ...values });
  };

  return (
    <Formik
      validationSchema={stepOneSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <p>Choose category of notice</p>
          <div>
            <TextField
              type="radio"
              name="category"
              value="sell"
              label="sell"
              checked
            />
            <TextField
              type="radio"
              name="category"
              value="for-free"
              label="for-free"
            />
            <TextField
              type="radio"
              name="category"
              value="lost-found"
              label="lost-found"
            />
          </div>

          <p>Tittle of ad</p>
          <Field name="title" placeholder="Type notice title" />
          <ErrorMessage name="title" />

          <p>Name pet</p>
          <Field name="name" placeholder="Type name pet" />
          <ErrorMessage name="name" />

          <p>Date of birth</p>
          <Flatpickr
            data-enable-time
            value={values?.birthDate}
            options={{
              maxDate: 'today',
              enableTime: false,
              dateFormat: 'd.m.Y',
            }}
            onChange={date => {
              setFieldValue('birthDate', date[0].toLocaleDateString());
            }}
          />
          <ErrorMessage name="birthDate" />

          <p>Breed</p>
          <Field name="breed" placeholder="Type breed" />
          <ErrorMessage name="breed" />

          <button type="submit">Next</button>
          <button type="button" onClick={props.handleModalToggle}>
            Cancel
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
