"use client";

import { Box, Grid, Link, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "../../ui";
import StoreIcon from "@mui/icons-material/Store";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.div`
  .card {
    display: grid;
    min-height: 350px;
    align-content: space-between;
    gap: 20px;
  }
`;

export type LinksSectionType = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  button1: string;
  button2: string;
  button3: string;
  button4: string;
  button5: string;
};

const LinksSection = ({
  button1,
  button2,
  button3,
  button4,
  button5,
  title1,
  title2,
  title3,
  title4,
  title5,
}: LinksSectionType) => {
  const typographyProps = {
    component: "h3",
    variant: "h6",
    align: "center",
    fontWeight: "bold",
    color: "white",
    sx: { minHeight: "70px" },
  };

  return (
    <Container>
      <Box component="section" sx={{ bgcolor: "#303333" }}>
        <div className="container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.4}>
              <div className="card">
                <p
                  className="whitespace-pre-line text-center text-lg text-white font-semibold"
                  dangerouslySetInnerHTML={{ __html: title1 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
                <img
                  src="/logos/Icon_Calculadoras_e_Ferramentas_de_Integracao.png"
                  alt="Icone de calculadora de CO2"
                  style={{
                    display: "block",
                    maxWidth: 200,
                    margin: "auto",
                  }}
                />
                <Box>
                  <Box sx={{ maxWidth: "239px", m: "auto" }}>
                    <a
                      href="https://calculadora.carbonfair.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="contained" fullWidth>
                        {button1}
                      </Button>
                    </a>
                  </Box>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <div className="card">
                <Typography {...(typographyProps as any)}>{title2}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      border: "4px solid #94C91F",
                      width: "133px",
                      height: "133px",
                      borderRadius: "80px",
                      padding: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StoreIcon
                      sx={{
                        fontSize: "4rem",
                        color: "#94C91F",
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ maxWidth: "239px", m: "auto" }}>
                    <a href="/marketplace" target="_blank">
                      <Button variant="contained" fullWidth>
                        {button2}
                      </Button>
                    </a>
                  </Box>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <div className="card">
                <Typography {...(typographyProps as any)}>{title3}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
                <img
                  src="/logos/Icon_Cadastrar_Projeto_Ambiental.png"
                  alt="Icone de calculadora de CO2"
                  style={{
                    display: "block",
                    maxWidth: 200,
                    margin: "auto",
                  }}
                />
                <Box>
                  <Box sx={{ maxWidth: "239px", m: "auto" }}>
                    <Link
                      href="https://www.freteneutro.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="contained" fullWidth>
                        {button3}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <div className="card">
                <Typography {...(typographyProps as any)}>{title4}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
                <img
                  src="/logos/Icon_Neutralizar__Emissoes_de_CO2-.png"
                  alt="Icone de calculadora de CO2"
                  style={{
                    display: "block",
                    maxWidth: 200,
                    margin: "auto",
                  }}
                />
                <Box>
                  <Box sx={{ maxWidth: "239px", m: "auto" }}>
                    <a href="/passagem-neutra" target="_blank" rel="noreferrer">
                      <Button variant="contained" fullWidth>
                        {button4}
                      </Button>
                    </a>
                  </Box>
                </Box>
              </div>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <div className="card">
                <Typography {...(typographyProps as any)}>{title5}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Box>
                <img
                  src="/logos/Icon_GestAO_de-Emissoes_de_CO2_e_Creditos.png"
                  alt="Icone de calculadora de CO2"
                  style={{
                    display: "block",
                    maxWidth: 200,
                    margin: "auto",
                  }}
                />
                <Box>
                  <Box sx={{ maxWidth: "239px", m: "auto" }}>
                    <a
                      href="https://souresiduozero.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="contained" fullWidth>
                        {button5}
                      </Button>
                    </a>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default LinksSection;
