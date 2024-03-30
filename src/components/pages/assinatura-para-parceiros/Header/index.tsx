"use client";

import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = styled.header`
  background-image: url("/background/imagem_assinatura.png");
  background-position: center top;
  background-size: cover;
  background-color: ${(props) => props.theme.palette.primary.dark};
  background-repeat: no-repeat;
  color: ${(props) => props.theme.palette.info.contrastText};

  .content {
    min-height: 50vh;
    display: grid;
    align-content: space-between;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: ${(props) => props.theme.shadows[24]};
    margin-bottom: 2rem;
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <div className="white-linear-gradient-2">
          <div className="container p-0">
            <Grid container>
              <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                <Box className="content">
                  <Box></Box>

                  <Box>
                    <h1>Assinatura para parceiros</h1>
                  </Box>

                  <Box>
                    <a href="/assinatura-para-parceiros#main">
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
                            color: "#fff",
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
