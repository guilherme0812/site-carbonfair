"use client";

import * as React from "react";
import styled from "styled-components";

import OldHeader from "./header";
import { Box, Typography } from "@mui/material";
import WhatTypesOfProjectSection from "./WhatTypesOfProjectSection";
import HowCanIKnow from "./HowCanIKnow";
import SearchProjectSection from "./SearchProjectSection";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";
import { Header } from "../../patterns";

const Container = styled.div`
  .titleItem {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .filter-container {
    margin: 2rem 0;
    padding: 2rem 0;
    display: flex;
    align-items: center;

    .filter-section {
      overflow: hidden;
    }

    .filter-button {
      background-color: #83bc51;
      border-radius: 200px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
      cursor: pointer;
      box-shadow: 0px 10px 10px -5px #292929;
    }
  }
`;

const SupportProjectsPage = ({
  texts,
  lang,
  extraLinks,
}: {
  extraLinks: I18nTexts;
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <Header
        url="/background/projetos-apoiados.jpg"
        backgroundStyle={{
          backgroundPosition: "100% 60%",
        }}
      >
        <HeaderDefaultContent title={t("lbl-f39abefd")} lang={lang} />
        <div className="mt-2 max-w-[500px]">
          <p
            className="text-white text-lg whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: t("txt-f5fc459c") }}
          />
        </div>
      </Header>

      {/* <OldHeader /> */}

      <main id="main">
        <section>
          <div className="container">
            <Box component="header">
              <Typography
                component="h2"
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  mb: "2rem",
                }}
              >
                {t("lbl-e71f0cd9")}
              </Typography>

              <Typography align="center" component="p" variant="body1">
                {t("txt-e882b18d")}
              </Typography>
            </Box>
          </div>
        </section>

        <WhatTypesOfProjectSection texts={texts} />

        <HowCanIKnow texts={texts} />

        <SearchProjectSection
          texts={texts}
          extraLinks={extraLinks}
          lang={lang}
        />
      </main>

      {/* <NewLetter /> */}
    </Container>
  );
};

export default SupportProjectsPage;
