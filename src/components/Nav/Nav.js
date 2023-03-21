import { NAV_LIST } from '../../constants/navlist';
import { NavigationWrapper, StyledNavLink } from 'components/Nav/Nav.styled';

export const Nav = () => {
  return (
    <NavigationWrapper>
      {NAV_LIST.map(item => (
        <StyledNavLink to={`/${item.link}`} key={item.label}>
          {item.label}
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
