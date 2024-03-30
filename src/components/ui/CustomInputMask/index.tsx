"use client";

import styled from "styled-components";
import InputMask from "react-input-mask";

const CustomInputMask = styled(InputMask)`
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.palette.grey[300]};
  color: ${(props) => props.theme.palette.grey[700]};
  font-size: 1.5rem;
  height: 48px;
  width: 100%;
  text-align: center;
  padding: 0 1rem;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-height: 900px) {
    height: 40px;
  }
`;
export default CustomInputMask;
