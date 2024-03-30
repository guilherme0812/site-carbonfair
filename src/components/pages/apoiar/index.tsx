"use client";

import * as React from "react";
import { NextPage } from "next";
import { Header, NewLetter } from "../../patterns";
import { Button } from "../../ui";
// import Header from "./Header";
import { Box, Typography } from "@mui/material";
import SupportSection from "./SupportSection";
import Link from "next/link";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const SupportPage = ({ texts, lang }: { texts: I18nTexts; lang: LangType }) => {
  const { t } = useI18n(texts);

  return (
    <div>
      {/* <Header /> */}

      <Header
        url="/background/apoiar.jpg"
        backgroundStyle={{ backgroundPosition: "100% 100%" }}
      >
        <HeaderDefaultContent title={t("lbl-17890a03")} lang={lang} />
      </Header>

      <main id="main">
        <section>
          <div className="container">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                fontWeight="bold"
                align="center"
                sx={{ mb: "2rem" }}
              >
                {t("txt-47911015")}
              </Typography>
              <p
                className="whitespace-pre-line text-center text-base text-gary-600"
                dangerouslySetInnerHTML={{ __html: t("txt-0f569746") }}
              />
            </Box>
          </div>
        </section>

        <Box component="section" sx={{ bgcolor: "#303333" }}>
          <div className="container">
            <Typography
              component="h2"
              variant="h5"
              fontWeight="bold"
              align="center"
              color="white"
              sx={{ mb: "2rem" }}
            >
              {t("lbl-7518624e")}
            </Typography>

            <Box sx={{ maxWidth: "239px", m: "auto" }}>
              <Link href={`/${lang}`}>
                <Button variant="contained">{t("btn-ea916676")}</Button>
              </Link>
            </Box>
          </div>
        </Box>

        <SupportSection texts={texts} />

        <Box component="section" sx={{ bgcolor: "#f5f5f5" }}>
          <div className="container">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                fontWeight="bold"
                align="center"
                sx={{ mb: "2rem" }}
              >
                {t("lbl-2c621d27")}
              </Typography>

              <p
                className="text-base text-gray-600 whitespace-pre-line text-center"
                dangerouslySetInnerHTML={{ __html: t("txt-e58ab8d3") }}
              />
            </Box>
          </div>
        </Box>

        <Box component="section" sx={{ bgcolor: "#f5f5f5" }}>
          <div className="container -mt-8">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                fontWeight="bold"
                align="center"
                sx={{ mb: "2rem" }}
              >
                {t("txt-98e0b278")}
              </Typography>

              <p
                className="text-base text-gray-600 whitespace-pre-line text-center"
                dangerouslySetInnerHTML={{ __html: t("txt-d4c0acbc") }}
              />
            </Box>
          </div>
        </Box>
      </main>

      {/* <NewLetter /> */}
    </div>
  );
};

export default SupportPage;
