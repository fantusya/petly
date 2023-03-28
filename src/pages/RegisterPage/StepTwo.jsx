import { Error, Button } from 'pages/authFormStyle.styled';
import CustomField from 'pages/authFormStyle.styled';
import { useEffect } from 'react';
import { useFetchingData } from 'hooks/useFetchingData';
// import { List, ListItem } from './RegisterPage.styled';
// import { useState } from 'react';

const StepTwo = props => {
  // const [filteredCities, setFilteredCities] = useState([]);
  // const [blurTimeout, setBlurTimeout] = useState(null);

  const query = 'Dnipro';
  const { status } = useFetchingData('api/cities', query);
  console.log(status);
  // const array = results.map(({ useCounty, stateEn, cityEn, countyEn }) => {
  //   return Number(useCounty)
  //     ? `${cityEn}, ${countyEn}, ${stateEn} region`
  //     : `${cityEn}, ${cityEn} region`;
  // });
  // console.log('array', array);

  useEffect(
    value => {
      const inputValue = props.value || '';
      if (inputValue) {
        //   const filtered = inputValue
        //     .filter(city =>
        //       city.city.toLowerCase().startsWith(value.toLowerCase())
        //     )
        //     .map(({ cityEn, countyEn }) => `${cityEn}, ${countyEn} region`);
        //   setFilteredCities(filtered);
        //   console.log(inputValue);
        // } else {
        //   setFilteredCities([]);
      }
    }
    // [props.value]
  );

  // const handleInputBlur = () => {
  //   setBlurTimeout(
  //     setTimeout(() => {
  //       setFilteredCities([]);
  //     }, 100)
  //   );
  // };

  // const handleInputFocus = () => {
  //   clearTimeout(blurTimeout);
  // };

  // const handleCityClick = city => {
  //   setFieldValue('city', city);
  //   setFilteredCities([]);
  // };

  return (
    <>
      <CustomField
        type="text"
        name="name"
        placeholder="Name"
        errors={props.errors}
        touched={props.touched}
        required
      />
      <Error name="name" component="div" />
      <CustomField
        type="text"
        name="city"
        placeholder="City, region"
        errors={props.errors}
        touched={props.touched}
        required
        // onClick={status}
        // onBlur={handleInputBlur}
        // onFocus={status}
      />
      {/* {filteredCities.length > 3 && (
        <List>
          {filteredCities.map((city, index) => (
            <ListItem onClick={() => handleCityClick(city)} key={index}>
              {city}
            </ListItem>
          ))}
        </List>
      )} */}
      <Error name="city" component="div" />
      <CustomField
        type="tel"
        name="phone"
        placeholder="Mobile phone"
        errors={props.errors}
        touched={props.touched}
        required
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
