"use client";

import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { Header as NewHeader } from "../../patterns";
import { Image } from "@/components/ui";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";
import { IoLeafSharp } from "react-icons/io5";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { LangType } from "@/services/getPages";

const WhoWeArePage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);
  const imageStyle = {
    display: "block",
  };

  const CardStyle = {
    bgcolor: "#fff",
    borderRadius: 1,
    p: 1,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const dataTexts = [
    t("txt-c2f2681b"),
    t("txt-18e67074"),
    t("txt-f805e0df"),
    t("txt-f805e0df"),
    t("txt-ab413467"),
    t("txt-99e4aee1"),
    t("txt-6f293c3c"),
  ];

  return (
    <div>
      <NewHeader url="/background/quem-somos.jpg">
        <HeaderDefaultContent title={t("txt-761fdb74")} lang={lang} />
      </NewHeader>
      {/* <Header /> */}
      <main id="main">
        <div className="container">
          <Box component="header" sx={{}}>
            <Typography
              align="center"
              component="h2"
              variant="h5"
              marginBottom={4}
              fontWeight="bold"
            >
              {t("lbl-c36f5cd6")}
            </Typography>

            <p
              className="text-center  whitespace-pre-line leading-5"
              dangerouslySetInnerHTML={{ __html: t("txt-fda49bf7") }}
            />
          </Box>

          <Box
            component="section"
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 8,
              flexDirection: "column",
              gap: 8,
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Box
              sx={(theme) => ({
                width: "100%",
                [theme.breakpoints.up("md")]: {
                  width: 600,
                },
              })}
            >
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/Ct-yKzzgzKY?si=YHuYimI1YCfUB0Ga"
                title="YouTube video player"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
            <Divider sx={{ minWidth: "80%" }} />
          </Box>

          <Box component="section">
            <IoLeafSharp fontSize="1.5rem" style={{ marginBottom: "1rem" }} />
            <p
              className="whitespace-pre-line leading-5"
              dangerouslySetInnerHTML={{ __html: t("txt-0bda6e4c") }}
            />

            <Grid container spacing={2} sx={{ mt: 4, mb: 12 }}>
              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/american-carbon-register.jpg"
                    style={{ ...imageStyle, maxWidth: 100 }}
                    alt="logo"
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/climate-community-biodiversity-logo.gif"
                    style={{ ...imageStyle }}
                    alt="logo"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/gold-standart.png"
                    style={{ ...imageStyle }}
                    alt="logo"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/vcs.jpg"
                    style={{ ...imageStyle, maxWidth: 100 }}
                    alt="logo"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/social-carbon.png"
                    style={{ ...imageStyle }}
                    alt="logo"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box sx={CardStyle}>
                  <Image
                    src="/logos/carbon-fair-standard.png"
                    style={{ ...imageStyle }}
                    alt="logo"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography
              align="center"
              component="h2"
              variant="h5"
              marginBottom={4}
              fontWeight="bold"
            >
              {t("lbl-d2a0f671")}
            </Typography>

            <Grid container spacing={2}>
              {dataTexts.map((text, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={(theme) => ({
                      bgcolor: theme.palette.background.paper,
                      p: 2,
                      borderRadius: 2,
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      justifyContent: "space-between",
                      minHeight: 200,
                    })}
                  >
                    <Box>
                      <Box
                        sx={(theme) => ({
                          borderRadius: 10,
                          bgcolor: theme.palette.grey[400],
                          width: 40,
                          height: 40,
                          color: "#121212",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        })}
                      >
                        <Typography variant="h6" fontWeight={"bold"}>
                          {index + 1}
                        </Typography>
                      </Box>
                    </Box>

                    <p
                      className="whitespace-pre-line leading-5"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider sx={{ minWidth: "80%", mt: 8 }} />
        </div>

        {/* COLOCAR DEPOIS <OurPartners /> */}
      </main>
      {/* <NewLetter /> */}
    </div>
  );
};
export default WhoWeArePage;
