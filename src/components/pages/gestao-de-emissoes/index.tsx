"use client";

import React from "react";
// import Header from "./Header";
import ImageContainer from "./ImageDescription";
import { Image, Button } from "../../ui";
import { Box, Grid, Typography } from "@mui/material";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const EmissionsManagementPage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <div>
      <Header
        url="/background/gestao-de-emissoes.png"
        backgroundStyle={{ backgroundPosition: "0 85%" }}
      >
        <HeaderDefaultContent lang={lang} title={t("lbl-bba0d13f")} />
      </Header>
      {/* <Header /> */}

      <main id="main">
        <section>
          <div className="container">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <p
                className="text-center text-gray-600 leading-5"
                dangerouslySetInnerHTML={{ __html: t("txt-cae8d2b1") }}
              />
            </Box>

            <ImageContainer />
          </div>
        </section>

        <Box
          component="section"
          sx={{ px: "2rem", py: "4rem", bgcolor: "primary.main" }}
        >
          <Box sx={{ maxWidth: "500px", m: "auto" }}>
            <Typography
              component="h2"
              variant="h4"
              color="white"
              align="center"
              fontWeight="bold"
              sx={{ mb: "2rem" }}
            >
              Registrar-se
            </Typography>

            <Box sx={{ maxWidth: "230px", m: "auto" }}>
              <a href="/contato">
                <Button sx={{ bgcolor: "#000", color: "#fff" }} fullWidth>
                  {t("lbl-68d6669f")}
                </Button>
              </a>
            </Box>
          </Box>
        </Box>

        <section>
          <div className="container">
            <Grid container columnSpacing={4} rowSpacing={{ xs: 8, md: 4 }}>
              <Grid item xs={12} md={5.5} order={{ xs: 2, md: 1 }}>
                <Image src="/images/1.jpg" alt="Imagem de planta" />
              </Grid>
              <Grid item xs={12} md={6.5} order={{ xs: 1, md: 2 }}>
                <h3
                  className="font-bold text-3xl mb-2"
                  dangerouslySetInnerHTML={{ __html: t("lbl-34a30108") }}
                />

                <Typography component="p" variant="body1" color="GrayText">
                  {t("txt-44e169de")}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6.5} order={{ xs: 3 }}>
                <h3
                  className="font-bold text-3xl mb-2"
                  dangerouslySetInnerHTML={{ __html: t("lbl-67373422") }}
                />

                <Typography component="p" variant="body1" color="GrayText">
                  {t("txt-9d2137e1")}
                </Typography>
              </Grid>
              <Grid item xs={12} md={5.5} order={{ xs: 4 }}>
                <Image src="/images/2.jpg" alt="Imagem de planta" />
              </Grid>

              <Grid item xs={12} md={5.5} order={{ xs: 6, md: 5 }}>
                <Image src="/images/3.jpg" alt="Imagem de planta" />
              </Grid>
              <Grid item xs={12} md={6.5} order={{ xs: 5, md: 6 }}>
                <h3
                  className="font-bold text-3xl mb-2"
                  dangerouslySetInnerHTML={{ __html: t("lbl-f4b91195") }}
                />

                <Typography component="p" variant="body1" color="GrayText">
                  {t("txt-893a80d4")}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* <NewLetter /> */}
      </main>
    </div>
  );
};

export default EmissionsManagementPage;
