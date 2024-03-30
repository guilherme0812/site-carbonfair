"use client";

import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.header`
  background-image: url("/background/selos-de-neutralizacao.jpg");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.palette.info.contrastText};

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

const Header = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <>
      <Container>
        <div className="white-linear-gradient-2">
          <div className="container p-0">
            <Grid container>
              <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                <Box className="content">
                  <Box></Box>
                  <Box></Box>

                  <Box>
                    <h1>{t("lbl-b902f383")}</h1>
                    <p>{t("txt-30a4fe49")}</p>
                  </Box>

                  <Box>
                    <a href="/selos-de-neutralizacao#main">
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
