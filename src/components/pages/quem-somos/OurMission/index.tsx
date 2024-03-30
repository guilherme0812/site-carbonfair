"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.section`
  background-image: url("/background/nossa-missao.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const OurMission = () => {
  return (
    <Container>
      <div className="white-linear-gradient">
        <div className="container">
          <Box
            sx={{
              minHeight: "639px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: "432px" }}>
              <Typography component="p" variant="body1" align="center">
                Nossa missão começou em 2008, com a primeira plataforma de
                registro de créditos de carbono brasileira, e hoje com a Carbon
                Fair, lançamos a primeira plataforma de negociação de créditos
                de carbono voluntários e socialmente justos utilizada para
                conectar de forma transparente, simples e efetiva projetos
                socioambientais, empresas e pessoas.
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default OurMission;
