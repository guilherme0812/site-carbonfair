import ClientEventFilter from "@/components/pages/cliente/ClientEventFilter";
import Header from "@/components/pages/cliente/evento/Header";
import { Navbar } from "@/components/patterns";
import Gallery, { GalleryImage } from "@/components/patterns/Gallery";
import { IMarker } from "@/components/ui/Map";
import { ICBClient, ICBClientEvent } from "@/hooks/useApiClients";
import { ICBProject } from "@/hooks/useApiProjects";
import { useI18n } from "@/hooks/useI18n";
import { getFolders } from "@/services/folders";
import { LangType, getPages } from "@/services/getPages";
import { getLanguages } from "@/services/language";
import { I18nTexts } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import PageContent from "./PageContent";

export const dynamicParams = false;

const NAVBAR = "header";

export async function generateStaticParams() {
  const req = await getFolders();
  const filterList = ["header", "footer", "links_extras"];
  const filteredPages = req.filter((item) => !filterList.includes(item.id));

  return filteredPages.map((page) => ({
    lang: page.lang,
    folder1: page.folder_1,
    folder2: page.folder_2,
    folder3: page.folder_3,
  }));
}

export async function generateMetadata({ params }: any) {
  return {
    title: params.folder_3,
    description: `Página de ${params.folder_2}`,
  };
}

export default async function Page({
  params,
}: {
  params: { lang: LangType; folder1: string; folder2: string; folder3: string };
}) {
  const { lang, folder2 } = params;

  //pages
  const pagesData = await getPages(folder2, ["evento"]);
  const data = pagesData.find((p) => p.lang == lang);
  const { t } = useI18n(data?.text as unknown as I18nTexts);

  //navbar requests
  const navbarPages = await getPages(NAVBAR);
  const navbarText = navbarPages.find((page) => page.lang == lang)
    ?.text as unknown as I18nTexts;
  const languages = await getLanguages();

  // links extras
  const extraLinksPages = await getPages("links_extras");
  const extraLinks = extraLinksPages.find((i) => i.lang == params.lang)?.text;

  // const { t: links } = useI18n(extraLinks as unknown as I18nTexts);

  if (!data) {
    return <div>Erro ao encontrar dado da página</div>;
  }

  return (
    <div>
      <Navbar
        lang={lang as any}
        pages={pagesData}
        languages={languages}
        texts={navbarText}
      />

      <PageContent
        folder3={params.folder3}
        extraLinks={extraLinks as unknown as I18nTexts}
        lang={params.lang}
        texts={data?.text}
      />
    </div>
  );
}
