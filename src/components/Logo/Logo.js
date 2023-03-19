import logo from 'images/petly.png';

import { LogoImg, HomeLink } from './Logo.styled';

const Logo = () => {
  return (
    <HomeLink to="/">
      <LogoImg src={logo} alt="Petly" />
    </HomeLink>
  );
};

export default Logo;
