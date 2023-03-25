import { Field, ErrorMessage } from 'formik';
// import { AddPhotoIcon } from './PetForm.styled';

const OneStep = ({ next }) => {
  return (
    <>
      <label htmlFor="petName">
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

      {/* <label htmlFor="petBirth"> Date of birth
        <Field as="date" name="petBirth" placeholder="Type date of birth" />
        <ErrorMessage name="petBirth" component="div" />
      </label> */}

      <label htmlFor="breed">
        {' '}
        Breed
        <Field type="text" name="breed" placeholder="Type breed" />
        <ErrorMessage name="breed" component="div" />
      </label>

      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button">Cansel</button>
    </>
  );
};

const TwoStep = ({ back }) => {
  return (
    <>
      {/* <label htmlFor="petPhoto"> Add photo and some comments
        <AddPhotoIcon width={48} height={48} />
        <Field as="file" name="petPhoto" />
        <ErrorMessage name="petPhoto" component="div" />
      </label> */}

      <label htmlFor="petInfo">
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

      <button type="submit">Done</button>

      <button type="button" onClick={back}>
        Back
      </button>
    </>
  );
};

export { OneStep, TwoStep };
