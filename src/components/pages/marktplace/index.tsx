"use client";

import { GrayTitle } from "@/components/ui";
// import Header from "./Header";
import { Box } from "@mui/material";
import CompensateSection from "@/components/patterns/CompensateSection";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const MarketplacePage = ({
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
        url="/background/marketplace.png"
        backgroundStyle={{ backgroundPosition: "center 20%" }}
      >
        <HeaderDefaultContent lang={lang} title={t("lbl-3bb24cc8")} />
      </Header>
      {/* <Header /> */}

      <div className="container">
        <header className="max-w-sm">
          <GrayTitle>{t("lbl-3b1c1c7d")}</GrayTitle>
        </header>
        <Box
          sx={{
            borderBottom: "1px solid #bdbdbd",
            mb: "4rem",
          }}
        ></Box>
      </div>
      <Box sx={{ pt: 0 }}>
        <CompensateSection mode="grid" />
      </Box>
    </div>
  );
};

export default MarketplacePage;
