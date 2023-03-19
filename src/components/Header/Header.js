import Logo from 'components/Logo';
import { HeaderElement } from 'components/Header/Header.styled';
import { Navigation } from 'components/Navigation/Navigation';
import NavigationContainer from 'components/NavigationContainer';

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
