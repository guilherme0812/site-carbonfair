"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { ICBClient } from "../../../../hooks/useApiClients";

export const Container = styled.div`
  background-image: url("/background/quem-somos.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    min-height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;

    img {
      display: block;
      max-width: 300px;
      margin: auto;
      border-radius: 8px;
    }
  }
`;

const Header = (client: ICBClient) => {
  return (
    <Container>
      <div className="white-linear-gradient-1">
        <Box className="container" sx={{ p: 0 }}>
          <div className="content">
            <img src={client.des_logo} alt={client.des_nome} />
            <Typography
              variant="h3"
              color="white"
              fontWeight="bold"
              sx={{ mt: "2rem" }}
              align="center"
            >
              {client.des_nome}
            </Typography>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Header;
