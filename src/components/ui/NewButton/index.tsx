"use client";

import styled, { css } from "styled-components";

interface ButtonProps {
  color?: "main" | "dark" | "grey";
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  border: none;
  color: ${(props) => props.theme.palette.info.contrastText};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: 300ms;

  &:hover {
    opacity: 0.8;
  }

  @media (max-height: 900px) {
    height: 40px;
  }

  ${(props) =>
    !props.color &&
    css`
      background-color: ${(props) => props.theme.palette.primary.main};
    `}

  ${(props) =>
    props.color === "dark" &&
    css`
      background-color: ${(props) => props.theme.palette.primary.dark};
    `}
    
    ${(props) =>
    props.color === "grey" &&
    css`
      background-color: ${(props) => props.theme.palette.grey[600]};
    `}
`;

export default Button;
