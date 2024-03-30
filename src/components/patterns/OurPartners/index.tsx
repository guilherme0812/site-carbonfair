"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  position: relative;
`;

const OurPartners = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);
  return (
    <Container>
      <div className="container">
        <Box component="header" sx={{ maxWidth: "900px", m: "auto" }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold", mb: "1rem" }}
            align="center"
          >
            {t("lbl-ec3e436a")}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            align="center"
            color="GrayText"
          >
            {t("txt-dcec4172")}
          </Typography>
        </Box>

        <Box>
          <Carousel texts={texts} />
        </Box>
      </div>
    </Container>
  );
};

export default OurPartners;
