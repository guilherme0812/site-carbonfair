"use client";

import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.section`
  .title-container {
    display: flex;
    padding: 4rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.info.contrastText};
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const HowCanIKnow = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="title-container">
        <Box sx={{ maxWidth: "780px", m: "auto" }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold" }}
            className="title-container"
          >
            {t("lbl-df0d0911")}
          </Typography>
        </Box>
      </div>
      <div className="container">
        <Box sx={{ maxWidth: "780px", m: "auto" }}>
          <img
            src="/logos/carbon-fair.png"
            alt="Carbon Fair Icon"
            style={{
              display: "block",
              maxWidth: 300,
              margin: "auto",
              marginBottom: "2rem",
            }}
          />
          <Typography
            component="p"
            variant="body1"
            color="GrayText"
            align="center"
          >
            {t("txt-efb01f53")}
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default HowCanIKnow;
