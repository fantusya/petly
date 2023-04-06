import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { validationOne } from 'helpers/validationSchemas/validationPetSchema';
import { Box } from 'components/Box/Box';

import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';

import {
  ButtonBox,
  Button,
  ErrorValidation,
  PetBox,
  Label,
  Input,
  DateInput,
} from './Steps.styled.jsx';

const StepOne = props => {
  const { t } = useTranslation();
  const language = localStorage.getItem('i18nextLng');

  const handleSubmit = values => {
    props.next({ ...values });
  };

  return (
    <Formik
      validationSchema={validationOne}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Box mb="40px">
            <PetBox>
              <Label htmlFor="name">
                {t('Name_pet')}
                <Input name="name" placeholder={t('Type_name_pet')} />
                <ErrorValidation name="name" component="div" />
              </Label>
            </PetBox>

            <PetBox>
              <Label htmlFor="birthDate">
                {t('Date_of_birth')}
                {language === 'uk' && (
                  <DateInput
                    data-enable-time
                    value={values?.birthDate}
                    options={{
                      maxDate: 'today',
                      enableTime: false,
                      dateFormat: 'd.m.Y',
                      locale: Ukrainian,
                    }}
                    onChange={date => {
                      setFieldValue('birthDate', date[0].toLocaleDateString());
                    }}
                    placeholder={t('Select_the_date')}
                  />
                )}
                {language !== 'uk' && (
                  <DateInput
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
                    placeholder={t('Select_the_date')}
                  />
                )}

                <ErrorValidation name="birthDate" component="div" />
              </Label>
            </PetBox>

            <PetBox>
              <Label>
                {t('Breed')}
                <Input name="breed" placeholder={t('Type_breed')} />
                <ErrorValidation name="breed" component="div" />
              </Label>
            </PetBox>
          </Box>

          <ButtonBox>
            <Button mb={0} type="button" onClick={props.handleModalToggle}>
              {t('Cancel')}
            </Button>
            <Button next type="submit">
              {t('Next')}
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
