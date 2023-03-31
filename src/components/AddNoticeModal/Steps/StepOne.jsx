import { Formik } from 'formik';

import { stepOneSchema } from 'helpers/validationSchemas/addNotice';
import { TextField } from 'helpers/addNoticeCustomField/noticeInput';
import {
  ActionButton,
  ActionButtonsWrapper,
  DateInput,
  ErrorStyle,
  FormWrapper,
  InputCont,
  RadioGroup,
  TextInput,
  TextLabel,
  UserComment,
} from '../AddNoticeModal.styled';
import { Box } from 'components/Box/Box';
import { useTranslation } from 'react-i18next';

const StepOne = props => {
  const { t } = useTranslation();

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
        <FormWrapper>
          <UserComment>{t('Step_one_comment')}</UserComment>
          <RadioGroup>
            <TextField
              type="radio"
              name="category"
              value="sell"
              label={t('sell')}
              checked
            />
            <TextField
              type="radio"
              name="category"
              value="for-free"
              label={t('in_good_hands')}
            />
            <TextField
              type="radio"
              name="category"
              value="lost-found"
              label={t('lost_found')}
            />
          </RadioGroup>

          <Box>
            <InputCont>
              <TextLabel htmlFor="title">{t('Title_of_ad')}</TextLabel>
              <TextInput name="title" placeholder={t('Type_notice_title')} />
              <ErrorStyle name="title" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="name">{t('Name_pet')}</TextLabel>
              <TextInput name="name" placeholder={t('Type_name_pet')} />
              <ErrorStyle name="name" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="birthDate">{t('Date_of_birth')}</TextLabel>
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
              <ErrorStyle name="birthDate" component="div" />
            </InputCont>

            <InputCont>
              <TextLabel htmlFor="breed">{t('Breed')}</TextLabel>
              <TextInput name="breed" placeholder={t('Type_breed')} />
              <ErrorStyle name="breed" component="div" />
            </InputCont>
          </Box>

          <ActionButtonsWrapper>
            <ActionButton type="button" onClick={props.handleModalToggle}>
              {t('Cancel')}
            </ActionButton>
            <ActionButton type="submit">{t('Next')}</ActionButton>
          </ActionButtonsWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default StepOne;
