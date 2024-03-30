"use client";

import { IEvent } from "@/hooks/useApiClients";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/background/aperto-de-mao-com-a-natureza.png");
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

const Header = (event: IEvent) => {
  return (
    <Container>
      <div className="white-linear-gradient-1">
        <Box className="container" sx={{ p: 0 }}>
          <div className="content">
            <img src={event.des_banner} alt={event.des_nome} />
            <Typography
              variant="h3"
              color="white"
              fontWeight="bold"
              sx={{
                mt: "2rem",
                textShadow: "0px 2px 2px #343434",
              }}
              align="center"
            >
              {event.des_nome}
            </Typography>
          </div>
        </Box>
      </div>
    </Container>
  );
};

export default Header;
