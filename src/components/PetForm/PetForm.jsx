import { useState } from 'react';
import { addPet } from 'redux/auth/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Formik } from 'formik';
import { OneStep, TwoStep } from './Steps';
import { validationPetSchema } from 'helpers/validationSchemas/validationPetSchema';
import { Forma } from './PetForm.styled';

const initialValues = {
  petName: '',
  petBirth: '',
  breed: '',
  petPhoto: '',
  petInfo: '',
};

export const PetForm = ({ closeModal }) => {
  const pets = useSelector(selectUser).myPets;
  const dispatch = useDispatch();

  console.log('pets', pets);

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

    dispatch(addPet(values));

    resetForm();
    closeModal();
  };

  const steps = [
    <OneStep next={handleNextStep} closeModal={closeModal} />,
    <TwoStep back={handlePrevStep} />,
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationPetSchema}
    >
      <Forma autoComplete="off">{steps[currentStep]}</Forma>
    </Formik>
  );
};

export default PetForm;
