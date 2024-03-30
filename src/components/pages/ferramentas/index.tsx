"use client";

// import Header from "./Header";
import {
  MainBenefitsSections,
  NewLetter,
  LinksSection,
  Header,
} from "../../patterns";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const ToolsPage = ({ texts, lang }: { texts: I18nTexts; lang: LangType }) => {
  const { t } = useI18n(texts);
  return (
    <div>
      {/* <Header /> */}
      <Header
        url="/background/projetos-apoiados.jpg"
        backgroundStyle={{
          backgroundPosition: "100% 60%",
        }}
      >
        <HeaderDefaultContent title={t("lbl-d05e53c5")} lang={lang} />
      </Header>

      <MainBenefitsSections texts={texts} />

      <LinksSection
        title1={t("lbl-ef8064f6")}
        title2={t("lbl-88cc5478")}
        title3={t("lbl-4b1724ba")}
        title4={t("lbl-e2acde8e")}
        title5={t("lbl-27636a22")}
        button1={t("btn-5afc9b4b")}
        button2={t("btn-706c6cb5")}
        button3={t("btn-8ba517bc")}
        button4={t("btn-d0854d01")}
        button5={t("btn-f55d67b8")}
      />

      {/* <NewLetter /> */}
    </div>
  );
};

export default ToolsPage;
