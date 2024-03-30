"use client";

import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "../../../ui";
import { useApiTotalizers } from "@/hooks/useApiTotalizers";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.header`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  #myVideo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    min-width: 100%;
    min-height: 100vh;
    object-fit: cover;
    z-index: 1;
  }

  .content {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  /* h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  } */

  @media (max-width: 768px) {
    #myVideo {
      left: -50%;
    }
  }
`;

const Header = ({ texts }: any) => {
  const { t } = useI18n(texts);
  const { totalizers } = useApiTotalizers();

  return (
    <>
      <Container>
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://carbonfair-publico.s3.amazonaws.com/assets/videos/video2.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        <Box
          className="content"
          //  white-linear-gradient-2 transparent-white-background
          sx={{
            bgcolor: "rgba(0,0,0, 0.3)",
          }}
        >
          <div className="container p-0">
            <Grid container>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: "100vh",
                  padding: "4rem 2rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    gap: "3rem",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      component="h2"
                      variant="h4"
                      fontWeight="bold"
                      color="#fff"
                    >
                      {t("lbl-f2b7ba94")}
                    </Typography>

                    <Typography
                      component="h2"
                      variant="h4"
                      fontWeight="bold"
                      color="#fff"
                    >
                      {t("lbl-76faca28")}
                    </Typography>
                  </Box>

                  <Box>
                    <Box
                      sx={(theme) => ({
                        maxWidth: "730px",
                        m: "auto",
                        borderLeft: `3px solid ${theme.palette.primary.main}`,
                        pl: 2,
                        ml: -2,
                      })}
                    >
                      <Typography color="white" variant="subtitle1">
                        {t("txt-393bb704")}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <a href="#main">
                      <Box sx={{ maxWidth: 200 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ bgcolor: "black" }}
                        >
                          {t("btn-27ed1de1")}
                        </Button>
                      </Box>
                    </a>

                    <a
                      href="https://calculadora.carbonfair.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Box sx={{ maxWidth: 200 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ bgcolor: "black" }}
                        >
                          {t("btn-bb0eff0e")}
                        </Button>
                      </Box>
                    </a>
                    <a href="/marketplace">
                      <Box sx={{ maxWidth: 200 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{ bgcolor: "black" }}
                        >
                          {t("btn-e597c80a")}
                        </Button>
                      </Box>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <a href="/#main">
                <IconButton
                  size="large"
                  sx={{
                    transform: "translateY(-2em)",
                    marginTop: "-2rem",
                    fontSize: "3rem",
                  }}
                >
                  <ExpandMoreIcon sx={{ fontSize: "4rem" }} />
                </IconButton>
              </a>
            </Box>
          </div>

          <Box
            className="container"
            sx={(theme) => ({
              mt: 0,
              bgcolor: theme.palette.background.default,
              position: "absolute",
              zIndex: 1000,
              borderRadius: "0.6rem 0.6rem 0 0",
              left: "50%",
              transform: "translate(-50%, 0%)",
              right: "center",
              bottom: 0,
              width: "100%",
              py: 4,
            })}
          >
            <Grid container rowSpacing={2}>
              <Grid item xs={12} md={4}>
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: t("txt-882cb980") }}
                />

                <Typography
                  component="h3"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  {new Intl.NumberFormat("pt-BR").format(
                    parseInt(totalizers?.total_co2_compensado ?? 0)
                  )}
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography component="h4" variant="subtitle2">
                  {t("txt-bacce3b4")}
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  {new Intl.NumberFormat("pt-BR").format(
                    totalizers?.empresas_eventos_neutralizados ?? 0
                  )}
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography component="h4" variant="subtitle2">
                  {t("txt-bacce3b4")}
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  {new Intl.NumberFormat("pt-BR").format(
                    totalizers?.total_projetos_apoiados ?? 0
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Header;
