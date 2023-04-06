import { useState, useEffect } from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast from 'react-hot-toast';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';

import { commonRoutes } from 'api/baseSettings';
import { getRegionsOfCities } from 'helpers/getRegionsOfCities';

import { Error, Button } from 'pages/authFormStyle.styled';
import CustomField from 'pages/authFormStyle.styled';
import css from './PhoneInput.css';

const StepTwo = props => {
  const { t } = useTranslation();

  const [cityValue, setCityValue] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnInputChange = value => {
    if (value.length >= 3) {
      setCityValue(value);
    }
  };

  useEffect(() => {
    async function getCities() {
      if (cityValue < 3) {
        return;
      }

      try {
        setIsLoading(true);

        const { data } = await commonRoutes.get(
          `api/cities?query=${cityValue}`
        );
        setResults(getRegionsOfCities(data));

        setIsLoading(false);
      } catch (error) {
        toast.error(i18n.t('Try_again'));
      }
    }

    getCities();
  }, [cityValue]);

  return (
    <>
      <CustomField
        type="text"
        name="name"
        placeholder={t('Name')}
        errors={props.errors}
        touched={props.touched}
        values={props.values.name}
        required
      />
      <Error name="name" component="div" />

      <Select
        onInputChange={handleOnInputChange}
        options={results}
        onChange={selection => props.forCity(selection.value)}
        placeholder={t('City_region')}
        isSearchable="true"
        isLoading={isLoading}
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? t('City_letters') : t('City_notfound')
        }
        styles={{
          control: (baseStyles, state) => ({
            // ...baseStyles,
            display: 'flex',
            padding: '4px',
            border: '1px solid #F59256',
            borderRadius: '20px',
            backgroundColor: '#FDF7F2',
            borderColor: state.isSelected ? '#3CBC81' : '#F59256',
          }),
        }}
      />
      <Error name="city" component="div" />

      <PhoneInput
        name="phone"
        type="tel"
        className={css}
        onlyCountries={['ua']}
        country={'ua'}
        countryCodeEditable={false}
        // defaultCountry={'ua'}
        errors={props.errors}
        value={props.values.phone}
        touched={props.touched}
        onChange={(phone, _, e) => {
          props.setFieldValue('phone', `+${phone}`);

          if (phone.length < 12) {
            e.target.style.border = '1px solid #E2001A';
          } else {
            e.target.style.border = '1px solid #3CBC81';
          }
        }}
      />

      {/* <CustomField
        type="text"
        name="city"
        placeholder={t('City_region')}
        errors={props.errors}
        touched={props.touched}
        values={props.values.city}
        required
      />
      <Error name="city" component="div" /> */}

      {/* <CustomField
        type="tel"
        name="phone"
        placeholder="Mobile phone"
        errors={props.errors}
        touched={props.touched}
        values={props.values.phone}
        required
      /> */}
      {/* <Error name="phone" component="div" /> */}

      <Button type="submit">{t('Register')}</Button>
      <Button type="button" onClick={props.back}>
        {t('Back')}
      </Button>
    </>
  );
};
export default StepTwo;
