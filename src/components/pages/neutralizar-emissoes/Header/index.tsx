"use client";

import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.header`
  background-image: url("/background/neutralizar-emissoes.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* color: ${(props) => props.theme.palette.info.contrastText}; */

  .content {
    min-height: 100vh;
    display: grid;
    align-content: space-between;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: ${(props) => props.theme.shadows[24]};
  }
  p {
    font-size: 1.3rem;
  }
`;

const Header = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <>
      <Container>
        <div className="white-linear-gradient">
          <div className="container p-0">
            <Grid container>
              <Grid item xs={12} md={6} sx={{ px: "2rem" }}>
                <Box className="content">
                  <Box></Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "2rem",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <h1
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: t("lbl-d973fe44") }}
                      />

                      <h2>{t("lbl-6bb63396")}</h2>
                    </Box>

                    <p
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: t("txt-8a68d2da") }}
                    />
                  </Box>

                  <Box>
                    <a href="/neutralizar-emissoes#main">
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
