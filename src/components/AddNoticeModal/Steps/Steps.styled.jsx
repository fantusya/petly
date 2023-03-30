import styled from 'styled-components';

export const RemoveImgBtn = styled.button`
  opacity: 0;

  position: absolute;
  top: 7px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  width: 25px;
  height: 25px;

  font-size: ${p => p.theme.fontSizes[7]};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-bottom-left-radius: 10px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.cardLabelBg};

  cursor: pointer;

  transition: opacity ${p => p.theme.transition.main},
    color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 30px;
    height: 30px;
  }
`;

export const PreviewContainer = styled.div`
  display: inline-block;
  position: relative;

  &:hover ${RemoveImgBtn}, &:focus ${RemoveImgBtn} {
    opacity: 1;
  }
`;

export const PreviewImg = styled.img`
  display: block;
  object-fit: cover;
  /* margin: 0 auto; */
  margin-top: 8px;
  margin-bottom: 28px;

  width: 116px;
  height: 116px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    /* margin-bottom: ${p => p.theme.space[0]}px; */
    width: 182px;
    height: 182px;
  }
`;
