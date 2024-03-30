"use client";

import styled from "styled-components";

const Input = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.grey[300]};
  padding: 0 20px;
  color-scheme: light;

  &:focus {
    border: 1px solid ${(props) => props.theme.palette.grey[600]};
    outline: none;
  }
`;

export default Input;
