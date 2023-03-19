import Logo from 'components/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'globalStyles/globalStyle';
import { ReactComponent as BurgerIcon } from 'images/svg/burger.svg';
import {
  HeaderElement,
  HeaderNav,
  BurgerBtn,
} from 'components/Header/Header.styled';

export const Header = () => {
  return (
    <HeaderElement>
      <Container header>
        <HeaderNav>
          <Logo />
          <Navigation />
          <BurgerBtn>
            <BurgerIcon />
          </BurgerBtn>
        </HeaderNav>
      </Container>
    </HeaderElement>
  );
};
