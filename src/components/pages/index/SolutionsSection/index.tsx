"use client";

import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import CardSolution from "./CardSolution";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";

const Container = styled.section`
  background-color: ${(props) => props.theme.palette.primary.dark};
  color: ${(props) => props.theme.palette.info.contrastText};
  text-align: center;
`;

const SolutionsSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="container">
        <Box sx={{ maxWidth: "800px", margin: "auto" }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold", mb: "1rem" }}
          >
            {t("lbl-0df58d2e")}
          </Typography>

          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: t("txt-1d302169") }}
          />
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-02.png"
              title={t("lbl-dcf05f3f")}
              description={t("txt-23b40387")}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-03.png"
              primary
              title={t("lbl-57f598f7")}
              description={t("txt-ae1f5b13")}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-04.png"
              title={t("lbl-1f6d0928")}
              description={t("txt-3e8f27a2")}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-05.png"
              primary
              title={t("lbl-c5153a5e")}
              description={t("txt-14ba0907")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-06.png"
              title={t("lbl-c180587a")}
              description={t("txt-7caf277f")}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CardSolution
              urlImage="/icons/PNG-07.png"
              primary
              title={t("lbl-0731a9c4")}
              description={t("txt-d25e3047")}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default SolutionsSection;
