import { Error, Button } from 'pages/authFormStyle.styled';
import CustomField from 'pages/authFormStyle.styled';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from './PhoneInput.css';

// import { useEffect } from 'react';
// import { useFetchingData } from 'hooks';

const StepTwo = props => {
  // const query = 'Dnipro';
  // const query = props.values.city;
  // const { status, results } = useFetchingData('api/cities', query);

  // const array = results.map(({ useCounty, stateEn, cityEn, countyEn }) => {
  //   return Number(useCounty)
  //     ? `${cityEn}, ${countyEn}, ${stateEn} region`
  //     : `${cityEn}, ${stateEn} region`;
  // });
  // console.log('array', array);

  // useEffect(() => {
  //   const inputValue = value || '';
  //   if (inputValue) {
  //     console.log(inputValue);
  //   }
  // });
  // console.log(props.values.city);
  return (
    <>
      <CustomField
        type="text"
        name="name"
        placeholder="Name"
        errors={props.errors}
        touched={props.touched}
        values={props.values.name}
        required
      />
      <Error name="name" component="div" />
      <CustomField
        type="text"
        name="city"
        placeholder="City, region"
        errors={props.errors}
        touched={props.touched}
        values={props.values.city}
        required
      />
      <Error name="city" component="div" />
      {/* <CustomField
        type="tel"
        name="phone"
        placeholder="Mobile phone"
        errors={props.errors}
        touched={props.touched}
        values={props.values.phone}
        required
      /> */}
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
        onChange={phone => {
          console.log('phone', `+${phone}`);

          props.setFieldValue('phone', `+${phone}`);
        }}
        onBlur={e => {
          if (e.currentTarget.value.length !== 19) {
            e.currentTarget.style.border = '1px solid #E2001A';
          } else {
            e.currentTarget.style.border = '1px solid #3CBC81';
          }
        }}
        // isValid={(value, country) => {
        //   if (value.match(/^\380\d{9}$/)) {
        //     return 'Invalid value: ' + value + ', ' + country.name;
        //   }
        // } else if (value.match(/1234/)) {
        //   return false;
        // } else {
        //   return true;
        // }
        // }}
      />
      <Error name="phone" component="div" />

      <Button type="submit">Register</Button>
      <Button type="button" onClick={props.back}>
        Back
      </Button>
    </>
  );
};
export default StepTwo;
