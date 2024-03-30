"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { NewButton } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { LangType } from "@/services/getPages";

const Container = styled.section`
  background-image: url("/background/solicitar-selo-de-neutralizacao.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RequestNeutralizationStampSection = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="white-linear-gradient">
        <Box
          className="container"
          sx={{
            display: "grid",
            minHeight: "630px",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 300 }}>
            <Typography
              component="h2"
              variant="h4"
              fontWeight="bold"
              sx={{ mb: "2rem" }}
            >
              {t("lbl-f52d6429")}
            </Typography>

            <Box sx={{ maxWidth: "208px" }}>
              <a href="/contato">
                <NewButton>{t("btn-9d2b7618")}</NewButton>
              </a>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default RequestNeutralizationStampSection;
