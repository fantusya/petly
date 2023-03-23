// import logo from 'images/petly.png';

import { LogoText, HomeLink, LogoSpan } from './Logo.styled';

const Logo = () => {
  return (
    <HomeLink to="/">
      <LogoText>
        pe<LogoSpan>t</LogoSpan>ly
      </LogoText>
    </HomeLink>
  );
};

export default Logo;
