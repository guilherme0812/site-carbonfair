"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";

export interface CardProps {
  description: string;
  urlImage: string;
  alt: string;
}

const Container = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props: any) => props.theme.palette.grey[300]};
  margin: 40px 20px 80px 20px;
  padding: 40px;
  min-height: 200px;
  display: grid;
  align-content: space-between;

  .image-container {
    width: 200px;
    margin: auto;
  }
`;

const Card = ({ description, urlImage, alt }: CardProps) => {
  return (
    <Container>
      <Box>
        <Typography component="p" variant="body1" color="GrayText">
          {description}
        </Typography>
      </Box>
      <div className="image-container">
        <Image
          src={urlImage}
          alt={alt}
          width={200}
          height={80}
          layout="responsive"
        />
      </div>
    </Container>
  );
};

export default Card;
