import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { NewLetter } from "../../patterns";
import Header from "./Header";
import RequestNeutralizationStampSection from "./RequestNeutralizationStampSection";
import MainCarbonNeutralizationStamps from "./MainCarbonNeutralizationStamps";
import { LinksSection } from "../../patterns";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { LangType } from "@/services/getPages";

const NaturalizarionSealPage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <>
      <Header texts={texts} />

      <main id="main">
        <MainCarbonNeutralizationStamps texts={texts} />

        <section>
          <div className="container">
            <Box component="header" sx={{ mb: "4rem" }}>
              <Typography
                component="h2"
                variant="h4"
                align="center"
                fontWeight="bold"
                color="primary.main"
              >
                {t("lbl-31ec346e")}
              </Typography>
            </Box>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item xs={8} md={11}>
                <p
                  className="whitespace-pre-line text-center text-lg"
                  dangerouslySetInnerHTML={{ __html: t("txt-9fa2b139") }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  2
                </Typography>
              </Grid>
              <Grid item xs={8} md={11}>
                <p className="whitespace-pre-line text-center text-lg">
                  {t("txt-2e3ba103")}
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item xs={8} md={11} sx={{ px: { xs: 0, md: "4rem" } }}>
                <p
                  className="whitespace-pre-line text-center text-lg"
                  dangerouslySetInnerHTML={{ __html: t("txt-82fc7264") }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  4
                </Typography>
              </Grid>
              <Grid item xs={8} md={11} sx={{ px: { xs: 0, md: "4rem" } }}>
                <p
                  className="whitespace-pre-line text-center text-lg"
                  dangerouslySetInnerHTML={{ __html: t("txt-5c5e7cde") }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  5
                </Typography>
              </Grid>
              <Grid item xs={8} md={11} sx={{ px: { xs: 0, md: "4rem" } }}>
                <p className="whitespace-pre-line text-center text-lg">
                  {t("txt-a567fbd2")}
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                bgcolor: "primary.dark",
                color: "info.contrastText",
                alignItems: "center",
                p: "20px",
                mb: "2rem",
                minHeight: "200px",
              }}
            >
              <Grid item xs={4} md={1}>
                <Typography
                  component="h3"
                  variant="h2"
                  align="center"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{ fontStyle: "italic" }}
                >
                  6
                </Typography>
              </Grid>
              <Grid item xs={8} md={11} sx={{ px: { xs: 0, md: "4rem" } }}>
                <p
                  className="whitespace-pre-line text-center text-lg"
                  dangerouslySetInnerHTML={{ __html: t("txt-5113d1b8") }}
                />
              </Grid>
            </Grid>

            <Box sx={{ maxWidth: "500px", m: "auto" }}>
              <p
                className="whitespace-pre-line text-center"
                dangerouslySetInnerHTML={{ __html: t("txt-dc3f6766") }}
              />
            </Box>
          </div>
        </section>

        <RequestNeutralizationStampSection texts={texts} lang={lang} />

        <LinksSection
          button1={t("btn-49679470")}
          button2={t("btn-60e0a792")}
          button3={t("btn-63277bd4")}
          button4={t("btn-a9a5b353")}
          button5={t("btn-c247505a")}
          title1={t("lbl-181056cf")}
          title2={t("lbl-9f0907f4")}
          title3={t("lbl-23442b7c")}
          title4={t("lbl-0151178e")}
          title5={t("lbl-0151178e")}
        />
      </main>

      {/* <NewLetter /> */}
    </>
  );
};

export default NaturalizarionSealPage;
