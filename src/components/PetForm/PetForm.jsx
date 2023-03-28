import { useState } from 'react';
import { addPet } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { Formik } from 'formik';
import { OneStep, TwoStep } from './Steps';
import { validationPetSchema } from 'helpers/validationSchemas/validationPetSchema';
import { Forma } from './PetForm.styled';

const initialValues = {
  name: '',
  birthDate: '',
  breed: '',
  photoURL: '',
  comments: '',
};

export const PetForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Відправити форму!!!!!!!!!!');
    const { name, birthDate, breed, comments } = values;

    if (!selectedFile) {
      console.log('CHOOSE FILE PLS');
      return;
    }

    const data = new FormData();
    data.append('name', name);
    data.append('birthDate', birthDate);
    data.append('breed', breed);
    data.append('photoURL', selectedFile);
    data.append('comments', comments);
    dispatch(addPet(data));

    console.log('selectedFile', selectedFile);

    resetForm();
    closeModal();

    toast.success(`You successfully deleted your pet ${name}`);
  };

  const steps = [
    <OneStep next={handleNextStep} closeModal={closeModal} />,
    <TwoStep back={handlePrevStep} onSelectedImg={setSelectedFile} />,
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
