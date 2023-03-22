import Logo from 'components/Logo';
import { Navigation } from 'components/Navigation/Navigation';
// import { Container } from 'globalStyles/globalStyle';
// import { ReactComponent as BurgerIcon } from 'images/svg/burger.svg';
import NavigationContainer from 'components/NavigationContainer/NavigationContainer';
import {
  HeaderElement,
  //   HeaderNav,
  //   BurgerBtn,
} from 'components/Header/Header.styled';

export const Header = () => {
  return (
    <HeaderElement>
      <NavigationContainer>
        <Logo />
        <Navigation />
      </NavigationContainer>
    </HeaderElement>
  );
};
