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
      <Typography component="h3" variant="h6" fontWeight="bold">
        {title}
      </Typography>

      {typeof description == "string" ? (
        <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
      ) : (
        description
      )}
    </Container>
  );
};

export default BeneficialItem;
