import { NAV_LIST } from 'constants/navlist';
import { NavigationWrapper, StyledNavLink } from 'components/Nav/Nav.styled';
// import Media from 'react-media';

export const Nav = ({ setOpen }) => {
  return (
    <NavigationWrapper>
      {NAV_LIST.map(item => (
        <StyledNavLink
          to={`/${item.link}`}
          key={item.label}
          onClick={() => {
            setOpen(false);
            // <Media queries={{ small: { maxWidth: 767.9 } }}>
            //   {matches => matches.small && setOpen(false)}
            // </Media>;

            // <Media queries={{ medium: { maxWidth: 1279.9 } }}>
            //   {matches => matches.medium && setOpen(false)}
            // </Media>;
          }}
        >
          {item.label}
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
