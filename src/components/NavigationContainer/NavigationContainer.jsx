import { NavContainer } from 'components/NavigationContainer/NavigationContainer.styled';

const NavigationContainer = ({ children }) => {
  return (
    <>
      {/* <a href="https://petly-gd7x.onrender.com/api/users/google">
        GOOGLE
      </a> */}
      <NavContainer>{children}</NavContainer>
    </>
  );
};

export default NavigationContainer;
