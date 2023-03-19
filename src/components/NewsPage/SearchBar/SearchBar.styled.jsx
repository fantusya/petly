import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;

  &:focus {
    border-color: #333;
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 72px;
  transform: translateY(-50%);
`;

export const ResetIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 72px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ResetIcon = styled(FaTimes)`
  font-size: 16px;
  color: #999;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: red;
  }
`;
