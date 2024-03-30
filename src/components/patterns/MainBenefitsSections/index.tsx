"use client";

import { Box, Grid, Step, Typography } from "@mui/material";
import styled from "styled-components";
import { StepItem, Image, GrayTitle } from "../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section``;

const MainBenefitsSections = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);
  return (
    <Container>
      <Box>
        <Box className="container">
          <Typography
            component="h2"
            variant="h5"
            sx={{ fontWeight: "bold", mb: "4rem" }}
          >
            {t("lbl-5734e519")}
          </Typography>
          <Grid container rowSpacing={2}>
            <Grid item xs={12} md={6}>
              <Step>
                <StepItem count={1} title={<></>}>
                  <p
                    className="leading-5 pb-28 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: t("txt-3c12db94") }}
                  />
                </StepItem>

                <StepItem count={2} title={<></>}>
                  <p
                    className="leading-5 pb-28 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: t("txt-d2562bca") }}
                  />
                </StepItem>

                <StepItem count={3} title={<></>}>
                  <p
                    className="leading-5 pb-28 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: t("txt-f7f2f8e8") }}
                  />
                </StepItem>

                <StepItem count={4} title={<></>}>
                  <p
                    className="leading-5 pb-28 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: t("txt-0b5e379d") }}
                  />
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
                <Box>
                  <Image src="/images/3.jpg" alt="imagem" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="container"></Box>
    </Container>
  );
};

export default MainBenefitsSections;
