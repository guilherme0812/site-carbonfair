"use client";

import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Step, StepItem, Image } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;

  .title-container {
    height: 300px;
    width: 70%;
    display: flex;
    padding: 4rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.info.contrastText};
    align-items: center;
  }

  @media (min-width: 1500px) {
    .images-container {
      width: 35%;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    .title-container {
      width: 100%;
    }
  }
`;

const textStyleProps = {
  component: "p",
  variant: "body1",
  color: "GrayText",
};

const MainWaysToParticipateSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <Box className="title-container">
        <Box sx={{ maxWidth: "465px" }}>
          <Typography component="h2" variant="h4" sx={{ fontWeight: "bold" }}>
            {t("lbl-ca47306a")}
          </Typography>
        </Box>
      </Box>

      <Box className="container">
        <Grid container rowSpacing={2}>
          <Grid item xs={12} md={6}>
            <Step>
              <StepItem count={1} title={<>{t("lbl-fe5009bf")}</>}>
                <Typography {...(textStyleProps as any)} sx={{ pb: "5rem" }}>
                  {t("txt-dc572ff9")}
                </Typography>
              </StepItem>

              <StepItem count={2} title={<>{t("lbl-4ed84c8d")}</>}>
                <Typography {...(textStyleProps as any)} sx={{ pb: "5rem" }}>
                  {t("txt-3de56854")}
                </Typography>
              </StepItem>

              <StepItem count={3} title={<>{t("lbl-4a3ce77c")}</>}>
                <Typography {...(textStyleProps as any)} sx={{ pb: "5rem" }}>
                  {t("txt-11dde172")}
                </Typography>
              </StepItem>
            </Step>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="flex-end"
            sx={{ display: "flex" }}
          >
            <Box sx={{ width: { xs: "100%", md: "70%" } }}>
              <Box sx={{ mb: "1rem" }}>
                <Image src="/images/1.jpg" alt="imagem" />
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <Image src="/images/2.jpg" alt="imagem" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainWaysToParticipateSection;
