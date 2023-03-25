import { useState } from 'react';
import { Formik, Form } from 'formik';
import { OneStep, TwoStep } from './Steps';
import { validationPetSchema } from 'helpers/validationSchemas/validationPetSchema';

// import { Box } from 'components/Box/Box';

const initialValues = {
  petName: '',
  petBirth: '',
  breed: '',
  petPhoto: '',
  petInfo: '',
};

export const PetForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Відправити форму!!!!!!!!!!');
    console.log('values', values);
    // console.log('actions', actions);

    resetForm();
  };

  const steps = [
    <OneStep next={handleNextStep} />,
    <TwoStep back={handlePrevStep} />,
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationPetSchema}
      onSubmit={handleSubmit}
    >
      <Form>{steps[currentStep]}</Form>
    </Formik>
  );
};

export default PetForm;
