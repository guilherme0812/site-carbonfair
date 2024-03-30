"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  background-image: url("/background/i-want-to-to-participae.jpg");
  background-position: center 20%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const IWantToParticipateSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="container">
        <Box
          sx={{
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="h2"
              variant="h4"
              sx={{ mb: "2rem" }}
              fontWeight="bold"
              color="white"
            >
              {t("lbl-e43b1bf2")}
            </Typography>

            <Box sx={{ width: "239px" }}>
              <Button variant="contained">{t("btn-41e6e84a")}</Button>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default IWantToParticipateSection;
