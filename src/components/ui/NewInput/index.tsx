"use client";

import styled from "styled-components";

const Input = styled.input`
  padding: 0 1rem;
  display: flex;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.grey[600]};
  color: ${(props) => props.theme.palette.grey[600]};

  &:focus {
    border: 1px solid ${(props) => props.theme.palette.grey[600]};
    outline: none;
  }

  @media (max-height: 900px) {
    min-height: 40px;
  }
`;

export default Input;
