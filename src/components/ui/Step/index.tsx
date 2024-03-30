"use client";

import { Box } from "@mui/material";
import * as React from "react";
import styled, { css } from "styled-components";

type StepProps = {
  children: React.ReactNode;
  width?: number;
};

type StepItemProps = {
  count: string | number | React.ReactNode;
  title: string | React.ReactNode;
  children: React.ReactNode;
  last?: boolean;
};

type IItemStep = {
  last?: boolean;
};

const Step = styled.div<StepProps>`
  display: flex;
  /* gap: 1rem; */
  flex-direction: column;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}
`;

const StepItemContainer = styled.div<IItemStep>`
  position: relative;
  border-left: 1px solid #707070;
  margin-left: 20px;

  .step-header {
    display: flex;
    gap: 20px;
    align-items: center;
    padding-left: 40px;
  }

  .step-count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #83bc51;
    color: #fff;
    font-size: 1.2rem;
    text-shadow: 0px 0px 5px #696969;
    font-weight: 700;
    position: absolute;
    top: 0rem;
    left: -25px;
  }

  .step-body {
    padding-left: 60px;
    padding-bottom: 2rem;
    padding-top: 1rem;
    /* margin-bottom: 15px; */
    /* margin-top: 15px; */
    padding-left: 40px;

    ${(props) =>
      props.last &&
      css`
        border-left: 1px solid transparent;
      `}
  }

  @media (max-width: 768px) {
    .step-header h4 {
      font-size: 1.5rem;
    }
  }
`;

export const StepItem = ({ count, title, last, children }: StepItemProps) => {
  return (
    <>
      <StepItemContainer last={last}>
        <div className="step-item">
          <div className="step-header">
            <div className="step-title">
              <div className="step-count">{count}</div>
              <Box sx={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</Box>
            </div>
          </div>
          <div className="step-body">{children}</div>
        </div>
      </StepItemContainer>
    </>
  );
};

export default Step;
