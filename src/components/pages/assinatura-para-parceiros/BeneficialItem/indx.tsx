"use client";

import { Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 20px;
  min-height: 300px;
  border-left: 5px solid ${(props) => props.theme.palette.primary.main};
`;

interface BeneficialItemType {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const BeneficialItem = ({ title, description }: BeneficialItemType) => {
  return (
    <Container>
      <h3
        className="font-bold text-2xl mb-1"
        dangerouslySetInnerHTML={{ __html: title as string }}
      />

      <p
        className="text-base"
        dangerouslySetInnerHTML={{ __html: description as string }}
      />
    </Container>
  );
};

export default BeneficialItem;
