"use client";

import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styled, { useTheme } from "styled-components";

export interface HeaderProps extends ContainerProps {
  children: ReactNode;
}

export interface ContainerProps {
  url?: string;
  backgroundStyle?: CSSProperties;
}

const Container = styled.header<ContainerProps>`
  margin-top: 59px;
  .background {
    background-image: url(${({ url }) => url ?? "/background/florest.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .content {
    padding-top: 2rem;
    height: 35vh;

    background: rgb(0, 0, 0, 0.3);
    /*background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 6%,
      rgba(255, 255, 255, 0.8) 9%,
      rgba(255, 255, 255, 0.7) 12%,
      rgba(255, 255, 255, 0.6) 15%,
      rgba(255, 255, 255, 0.5) 18%,
      rgba(255, 255, 255, 0.4) 21%,
      rgba(255, 255, 255, 0.3) 24%,
      rgba(255, 255, 255, 0.2) 27%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 70%,
      rgba(255, 255, 255, 0.2) 73%,
      rgba(255, 255, 255, 0.3) 76%,
      rgba(255, 255, 255, 0.4) 79%,
      rgba(255, 255, 255, 0.5) 82%,
      rgba(255, 255, 255, 0.6) 85%,
      rgba(255, 255, 255, 0.7) 88%,
      rgba(255, 255, 255, 0.8) 91%,
      rgba(255, 255, 255, 0.9) 94%,
      rgba(255, 255, 255, 1) 100%
    ); */
  }
`;

const Header = ({ children, url, backgroundStyle }: HeaderProps) => {
  return (
    <Container url={url} style={backgroundStyle}>
      <div className="background" style={backgroundStyle}>
        <div className="content">
          <Box className="container" sx={{ pt: 1 }}>
            {children}
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Header;
