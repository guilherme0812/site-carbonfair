"use client";

import * as React from "react";
import styled, { css } from "styled-components";
interface ContanerProps {
  selected: boolean;
}

interface CheckBoxProps extends ContanerProps {
  children: React.ReactNode;
  value: string | number;
  onClick?(value: number | string): void;
}

const Container = styled.div<ContanerProps>`
  transition: 300ms;
  /* border-radius: 5px; */
  cursor: pointer;

  ${(props) =>
    !props.selected &&
    css`
      opacity: 0.5;
    `}
`;

const CheckBox = ({ children, selected, onClick, value }: CheckBoxProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <Container selected={selected} onClick={() => handleClick()}>
      {children}
    </Container>
  );
};

export default CheckBox;
