"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Step, StepItem, Image } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 8rem;

  .title-container {
    height: 300px;
    width: 70%;
    display: flex;
    padding: 4rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.info.contrastText};
    align-items: center;
  }

  .step-section-container {
    width: 50%;
  }

  /* .images-container {
        width: 40%;
        position: absolute;
        top: 30%;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
            display: block;
        }
    }

    @media (max-width: 768px) {
        padding-bottom: 2rem;
        .title-container {
            width: 100%;
        }

        .step-section-container {
            width: 100%;
        }

        .images-container {
            padding: 4rem 2rem;
            position: static;
            width: 100%;
        }
    } */
  .images-container {
    width: 40%;
    position: absolute;
    top: 10%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      display: block;
    }
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

    .step-section-container {
      width: 100%;
    }

    .images-container {
      padding: 4rem 2rem;
      position: static;
      width: 100%;
    }
  }
`;

const SupportSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className="title-container">
          <Box sx={{ maxWidth: "465px" }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: "bold" }}
              // className="title-container"
            >
              {t("lbl-ac06b7b1")}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Image
            src="/logos/carbon-fair-standard.png"
            alt="Carbon fair standart"
          />
        </Box>
      </Box>

      <Box className="container">
        <Box className="step-section-container">
          <Step>
            <StepItem count={1} title={<></>}>
              <Typography
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ pb: "5rem" }}
              >
                {t("txt-7109f907")}
              </Typography>
            </StepItem>

            <StepItem count={2} title={<></>}>
              <Typography
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ pb: "5rem" }}
              >
                {t("txt-999fba84")}
              </Typography>
            </StepItem>

            <StepItem count={3} title={<></>}>
              <Typography
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ pb: "5rem" }}
              >
                {t("txt-b011e147")}
              </Typography>
            </StepItem>
          </Step>
        </Box>
      </Box>

      <Box className="images-container">
        <img src="/images/1.jpg" alt="imagem" />
        <img src="/images/2.jpg" alt="imagem" />
      </Box>
    </Container>
  );
};

export default SupportSection;
