import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { stepTwoSchema } from 'helpers/validationSchemas/addNotice';

import { PreviewContainer, RemoveImgBtn, PreviewImg } from './Steps.styled';

const StepTwo = props => {
  const filePicker = useRef(null);

  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <p>The sex</p>
          <span>male</span>
          <Field type="radio" name="sex" value="male" checked />
          <span>female</span>
          <Field type="radio" name="sex" value="female" />

          <p>Location</p>
          <Field name="location" />
          <ErrorMessage name="location" placeholder="Type pet location" />

          {props.data.category === 'sell' && (
            <>
              <p>Price</p>
              <Field name="price" />
              <ErrorMessage name="price" placeholder="Type pet price" />
            </>
          )}

          <p>Load the pet's image</p>
          <input
            hidden
            ref={filePicker}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={e => {
              const chosenImg = e.target.files[0];
              setFieldValue('photoURL', chosenImg);

              const reader = new FileReader();
              reader.onload = e => {
                setFieldValue('preview', e.target.result);
              };
              reader.readAsDataURL(chosenImg);
            }}
          />

          {values?.preview ? (
            <PreviewContainer>
              <RemoveImgBtn
                type="button"
                onClick={() => {
                  setFieldValue('photoURL', null);
                  setFieldValue('preview', null);
                }}
              >
                &times;
              </RemoveImgBtn>
              <PreviewImg src={values?.preview} alt="Preview" />
            </PreviewContainer>
          ) : (
            <button type="button" onClick={() => filePicker.current.click()}>
              Здесь будет плюсик / превью картинки
            </button>
          )}

          <p>Comments</p>
          <Field name="comments" />
          <ErrorMessage
            name="comments"
            placeholder="Tell us anything about your pet:)"
          />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Done</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
