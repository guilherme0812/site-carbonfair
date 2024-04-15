"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";
import Header from "./Header";
import IWantToParticipateSection from "./IWantToParticipateSection";
import MainWaysToParticipateSection from "./MainWaysToParticipateSection";
import { LinksSection } from "../../patterns";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";

const NeutralizeEmissionPage = ({
  texts,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <>
      <Header texts={texts} />

      <main id="main">
        <MainWaysToParticipateSection texts={texts} />

        <Box component="section" sx={{ bgcolor: "#f5f5f5" }}>
          <div className="container">
            <Box sx={{ maxWidth: "900px", m: "auto" }}>
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                align="center"
                fontWeight="bold"
                sx={{ mb: "2rem" }}
              >
                {t("lbl-ca47306a")}
              </Typography>
              <p
                className="whitespace-pre-line text-center text-gray-600"
                dangerouslySetInnerHTML={{ __html: t("txt-888195b9") }}
              />
            </Box>
          </div>
        </Box>

        <IWantToParticipateSection texts={texts} />

        <Box component="section">
          <div className="container">
            <Box sx={{ maxWidth: "900px", m: "auto" }}>
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                align="center"
                fontWeight="bold"
                sx={{ mb: "2rem" }}
              >
                {t("lbl-95ba4394")}
              </Typography>

              <p
                className="whitespace-pre-line text-center text-gray-600"
                dangerouslySetInnerHTML={{ __html: t("txt-b17c8368") }}
              />
            </Box>
          </div>
        </Box>

        <LinksSection
          title1={t("lbl-ae7bd072")}
          title2={t("lbl-1754570a")}
          title3={t("lbl-d509cfc3")}
          title4={t("lbl-0989223d")}
          title5={t("lbl-0989223d")}
          button1={t("btn-2d9edd6d")}
          button2={t("btn-9838844b")}
          button3={t("btn-ac53c23e")}
          button4={t("btn-d9932de7")}
          button5={t("lbl-0989223d")}
        />
      </main>

      {/* <NewLetter /> */}
    </>
  );
};
export default NeutralizeEmissionPage;
