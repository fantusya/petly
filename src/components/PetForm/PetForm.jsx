import { useState } from 'react';
import { addPet } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

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
  // const [previewImg, setPreviewImg] = useState(null);

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleChange = e => {
    const chosenImg = e.target.files[0];
    console.log('chosenImg', chosenImg);

    if (!e.target.files.length || !chosenImg) {
      setSelectedFile(null);
      toast.warning('Choose an image to change your avatar!');
      return;
    }
    setSelectedFile(chosenImg);

    // const reader = new FileReader();
    // reader.onload = e => {
    //   setPreviewImg(e.target.result);
    // };
    // reader.readAsDataURL(chosenImg);
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
    console.log('values', values);
    console.log('data', data);

    // dispatch(addPet(values));

    resetForm();
    closeModal();
  };

  const steps = [
    <OneStep next={handleNextStep} closeModal={closeModal} />,
    <TwoStep back={handlePrevStep} handleChange={handleChange} />,
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
