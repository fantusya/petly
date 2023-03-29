import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as EditPenIcon } from 'images/userPage/editPenIcon.svg';

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconPen = styled(EditPenIcon)``;

export const Label = styled.label`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: 12px;
  line-height: 1.39;
  color: ${prop => prop.theme.colors.mainBlack};
  min-width: 60px;
  ${up('tablet')} {
    width: 119px;
    font-size: 18px;
  }
  ${up('pc')} {
    width: 96px;
  }
`;

export const LabelDatePicker = styled.label`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: 12px;
  color: ${prop => prop.theme.colors.mainBlack};
  line-height: 1.39;
  width: 90px;
  min-width: 60px;
  ${up('tablet')} {
    width: 119px;
    font-size: 18px;
  }
  ${up('pc')} {
    width: 96px;
  }
`;

export const Input = styled(Field)`
  font-family: 'Manrope';
  width: 150px;
  font-size: 12px;
  color: ${prop => prop.theme.colors.mainBlack};
  padding: 4px 12px 3px;
  line-height: 1.39;
  margin-right: 15px;

  ${up('tablet')} {
    font-size: 18px;
    width: 216px;
  }
  ${up('pc')} {
    width: 205px;
    margin-right: 24px;
    ${({ isactive }) =>
      isactive &&
      `
  &:hover,
  &:focus {
    outline: 1px solid  #F5925680;
  }
  `}
  }
`;

export const InputDatePickerWrapp = styled.div`
  width: 205px;
  ${up('tablet')} {
    margin-right: 28px;
    max-width: 202px;
  }
  ${up('pc')} {
    margin-right: 15px;
    max-width: 205px;
  }
`;

export const InputDatePicker = styled(DatePicker)`
  font-family: 'Manrope';
  font-size: 12px;
  width: 150px;
  line-height: 1.39;
  padding: 4px 12px 3px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${prop => prop.theme.colors.mainBlack};
  margin-right: 14px;
  ${({ isactive }) =>
    isactive &&
    `
  &:hover,
  &:focus {
    outline: 1px solid  #F5925680;
  }
  `}
  ${({ active }) =>
    active &&
    `
border: 1px solid #F5925680;
border-radius: 40px;
background: #FDF7F2;
  &:hover,
  &:focus {
    outline: 1px solid  #F5925680;
  }
  `}

  ${up('tablet')} {
    width: 216px;
    font-size: 18px;
    margin-right: 3px;
  }
  ${up('pc')} {
    width: 205px;
    margin-right: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
  align-items: center;
  ${up('tablet')} {
    margin-top: 7px;
  }
  ${up('pc')} {
  }
`;

export const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: ${prop => prop.theme.colors.background};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  fill: ${prop => prop.theme.colors.mainAccent};

  &.btn-active:hover {
    scale: 1.1;
    fill: ${prop => prop.theme.colors.activeAccent};
  }

  ${up('tablet')} {
    width: 32px;
    height: 32px;
  }
  ${up('pc')} {
    margin-left: ${prop => (prop.isDateEdit ? '8px' : 0)};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  transform: translate(0px, 0px);
  font-size: 10px;
  color: red;
  ${up('tablet')} {
    transform: translate(132px, 0px);
  }
  ${up('pc')} {
    transform: translate(90px, 0px);
    margin-left: ${prop => (prop.isDateEdit ? '10px' : 0)};
  }
`;

export const NotAuthorized = styled.div`
  font-family: 'Manrope';
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
`;
