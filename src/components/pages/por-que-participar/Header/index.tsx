"use client";

import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = styled.header`
  background-image: url("/background/porque-participar.jpg");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    min-height: 100vh;
    display: grid;
    align-content: space-between;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: ${(props) => props.theme.shadows[24]};
  }
  p {
    font-size: 1.3rem;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <div className="white-linear-gradient">
          <div className="container p-0">
            <Grid container>
              <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                <Box className="content">
                  <Box></Box>

                  <Box>
                    <h1>
                      Por que <br />
                      participar
                    </h1>
                    <p>
                      Carbon Fair é a primeira plataforma
                      <em>full service</em> em gestão e negociação de créditos
                      de carbono, auxiliando empresas a atingirem suas metas e
                      compromissos ambientais
                    </p>
                  </Box>

                  <Box>
                    <a href="/porque-participar#main">
                      <IconButton
                        size="large"
                        sx={{
                          // transform: "translateY(-2em)",
                          marginTop: "-2rem",
                          fontSize: "3rem",
                        }}
                      >
                        <ExpandMoreIcon
                          sx={{
                            fontSize: "4rem",
                            // color: "#fff",
                          }}
                        />
                      </IconButton>
                    </a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Header;
