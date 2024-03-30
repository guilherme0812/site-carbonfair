import * as React from "react";
import styled, { css } from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CardSolutionProps {
  primary?: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  urlImage: string;
}

interface ContainerProp {
  primary?: boolean;
}

const Container = styled.div<ContainerProp>`
  border-radius: 8px;
  padding: 40px;
  min-height: 340px;
  display: grid;
  align-content: space-between;

  .image-container {
    width: 50px;
    margin: auto;
  }
  .icon {
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.palette.primary.main};
    `}

  ${(props) =>
    !props.primary &&
    css`
      background-color: ${(props) => props.theme.palette.background.paper};
      color: ${(props) => props.theme.palette.text.primary};
    `}
`;

const CardSolution = ({
  primary,
  title,
  description,
  urlImage,
}: CardSolutionProps) => {
  return (
    <Container primary={primary}>
      <Box className="image-container">
        <Image
          alt="Imagem"
          layout="responsive"
          width={100}
          height={90}
          src={urlImage}
          className="icon"
        />
      </Box>
      <Box>
        <h3
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: title as string }}
        />
      </Box>
      <Box>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: description as string }}
        />
      </Box>
    </Container>
  );
};
export default CardSolution;
