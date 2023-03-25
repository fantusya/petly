import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { validationPetSchema } from 'helpers/validationSchemas/validationPetSchema';
// import { AddPhotoIcon } from './PetForm.styled';

// import { Box } from 'components/Box/Box';

// FastField - ???????????????????????????????????????

const initialValues = {
  petName: '',
  petBirth: '',
  breed: '',
  petPhoto: '',
  petInfo: '',
};

export const PetForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationPetSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          {' '}
          Name pet
          <Field
            type="text"
            name="petName"
            placeholder="Type name pet"
            autoFocus
          />
          <ErrorMessage name="petName" component="div" />
        </label>

        {/* <label> Date of birth
          <Field as="date" name="petBirth" placeholder="Type date of birth" />
          <ErrorMessage name="petBirth" component="div" />
        </label> */}

        <label>
          {' '}
          Breed
          <Field type="text" name="breed" placeholder="Type breed" />
          <ErrorMessage name="breed" component="div" />
        </label>

        {/* <label> Add photo and some comments
          <AddPhotoIcon width={48} height={48} />
          <Field as="file" name="petPhoto" />
          <ErrorMessage name="petPhoto" component="div" />
        </label> */}

        <label>
          {' '}
          Comments
          <Field
            as="textarea"
            name="petInfo"
            rows={5}
            placeholder="Type comments"
          />
          <ErrorMessage name="petInfo" component="div" />
        </label>

        <button type="button">Next</button>
        <button type="button">Cansel</button>
        <button type="submit">Done</button>
        <button type="button">Back</button>
      </Form>
    </Formik>
  );
};

export default PetForm;
