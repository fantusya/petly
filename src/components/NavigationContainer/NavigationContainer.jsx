import { NavContainer } from 'components/NavigationContainer/NavigationContainer.styled';

const NavigationContainer = ({ children }) => {
  return (
    <>
      {/* <a href="https://uninterested-hose-newt.cyclic.app/api/users/google">
        GOOGLE
      </a> */}
      <NavContainer>{children}</NavContainer>
    </>
  );
};

export default NavigationContainer;
