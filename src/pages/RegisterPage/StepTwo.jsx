import { Error, Input, Button } from 'pages/authFormStyle.styled';
// import { useEffect } from 'react';

const StepTwo = ({ back }) => {
  // const query = 'Dnipro';
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

  return (
    <>
      <Input type="text" name="name" placeholder="Name" />
      <Error name="name" component="div" />

      <Input type="text" name="city" placeholder="City, region" />
      <Error name="city" component="div" />

      <Input type="tel" name="phone" placeholder="Mobile phone" />
      <Error name="phone" component="div" />

      <Button type="submit">Register</Button>
      <Button type="button" onClick={back}>
        Back
      </Button>
    </>
  );
};
export default StepTwo;
