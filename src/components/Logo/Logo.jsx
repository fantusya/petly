// import logo from 'images/petly.png';

import { LogoText, HomeLink, LogoSpan } from './Logo.styled';

const Logo = ({ setOpen }) => {
  return (
    <HomeLink
      to="/"
      onClick={() => {
        setOpen(false);
      }}
    >
      <LogoText>
        pe<LogoSpan>t</LogoSpan>ly
      </LogoText>
    </HomeLink>
  );
};

export default Logo;
