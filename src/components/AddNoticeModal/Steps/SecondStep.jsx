import React from 'react';
import { ReactComponent as MaleIcon } from '../../../images/svg/male.svg';
import { ReactComponent as FemaleIcon } from '../../../images/svg/female.svg';

import {
  BoxQuestion,
  InputRadio,
  SexFormBox,
  SexLabel,
  MaleIconBox,
  FemaleIconBox,
  InputCont,
  TextLabel,
  TextInput,
  ErrorStyle,
  TextAreaInput,
} from '../AddNoticeModal.styled';
import { Box } from 'components/Box/Box';
import UploadImageField from './UploadImage/UploadImageField';

const SecondStep = ({ value, errors, touched, setFieldValue, setFile, fileDataURL }) => {
    const handleChange = (e) => {
        setFile(e.currentTarget.files[0]);
        setFieldValue('petImage', e.currentTarget.files[0]);
    };
    
    return (
        <>
            <SexFormBox>
                <BoxQuestion>The sex:</BoxQuestion>

                <InputRadio
                    type="radio"
                    name="sex"
                    value="male"
                    checked={value.sex === 'male'}
                />
                <SexLabel isSelected={value.sex === 'male'}>
                    <MaleIconBox>
                        <MaleIcon />
                    </MaleIconBox>
                    Male
                </SexLabel>

                <InputRadio
                    type="radio"
                    name="sex"
                    value="female"
                    checked={value.sex === 'female'}
                />
                <SexLabel isSelected={value.sex === 'female'}>
                    <FemaleIconBox>
                        <FemaleIcon />
                    </FemaleIconBox>
                    Female
                </SexLabel>
            </SexFormBox>

            <InputCont>
                <TextLabel htmlFor="location">
                    Location:
                </TextLabel>
                <TextInput
                    name="location"
                    type="text"
                    placeholder="Type Location (City, Region)"
                />              
                <ErrorStyle name="location" component="div" />
            </InputCont>

            {value.category === 'sell' && (
                <Box position="relative">
                    <InputCont>
                        <TextLabel htmlFor="price">
                            Price:
                        </TextLabel>
                        <TextInput
                            name="price"
                            type="text"
                            placeholder="Type price"
                        />              
                        <ErrorStyle name="price" component="div" />
                    </InputCont>

                    {touched.price && value.price === '' && (
                      <ErrorStyle component="div">
                        Price is required
                      </ErrorStyle>
                    )}
                </Box>
            )}

                <Box position="relative">
                    <UploadImageField
                        name="petImage"
                        label="Load the pet’s image:"
                        fileDataURL={fileDataURL}
                        handleChange={handleChange}
                    />
                    {value.petImage === null && (
                        <ErrorStyle component="div">
                            Image is required
                        </ErrorStyle>
                    )}
                </Box>
            
                <Box position="relative">
                    <TextLabel htmlFor="comments">
                        Comments
                    </TextLabel>
                    <TextAreaInput
                        name="comments"
                        as="textarea"
                        type="text"
                        placeholder="Type comment"
                    />                
                    <ErrorStyle component="div">
                        Image is required
                    </ErrorStyle>                    
                </Box>
        </>
        );
};



export default SecondStep;
