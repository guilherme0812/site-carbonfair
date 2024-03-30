"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Step, StepItem } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  position: relative;
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

const WhatTypesOfProjectSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <Box>
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontWeight: "bold" }}
          className="title-container"
        >
          {t("lbl-3041d177")}
        </Typography>
      </Box>

      <Box className="container">
        <Box className="step-section-container">
          <Step>
            <StepItem
              count={1}
              title={
                <div className="titleItem">
                  <strong>{t("lbl-a35cb6f8")}</strong>
                </div>
              }
            >
              <Typography component="p" variant="body1" color="GrayText">
                {t("txt-4cf25321")}
              </Typography>
            </StepItem>

            <StepItem
              count={2}
              title={
                <div className="titleItem">
                  <strong>{t("lbl-43cbcddf")}</strong>
                </div>
              }
            >
              <Typography component="p" variant="body1" color="GrayText">
                {t("txt-d340cfdc")}
              </Typography>
            </StepItem>

            <StepItem
              count={3}
              title={
                <div>
                  <strong>{t("lbl-a2cfb445")}</strong>
                </div>
              }
            >
              <Typography component="p" variant="body1" color="GrayText">
                {t("txt-0261587f")}
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

export default WhatTypesOfProjectSection;
