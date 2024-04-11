import { Navbar } from "@/components/patterns";
import { getFolders } from "@/services/folders";
import { LangType, getPages } from "@/services/getPages";
import { getLanguages } from "@/services/language";
import { I18nTexts } from "@/types";
import PageContent from "./PageContent";

export const dynamicParams = false;

const NAVBAR = "header";

export async function generateStaticParams() {
  const req = await getFolders();
  const filterList = ["header", "footer"];
  const filteredPages = req.filter((item) => !filterList.includes(item.id));

  return filteredPages.map((page) => ({
    lang: page.lang,
    folder1: page.folder_1,
  }));
}

export async function generateMetadata({ params }: any) {
  return {
    title: params.folder1,
    description: `Página de ${params.folder1}`,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: LangType; folder1: string };
  searchParams: any;
}) {
  const { lang, folder1 } = params;

  //pages
  const pagesData = await getPages(folder1);
  const data = pagesData.find((p) => p.lang == lang);

  //navbar requests
  const navbarPages = await getPages(NAVBAR);
  const navbarText = navbarPages.find((page) => page.lang == lang)
    ?.text as unknown as I18nTexts;

  // links extras
  const extraLinksPages = await getPages("links_extras");
  const extraLinks = extraLinksPages.find((i) => i.lang == params.lang)?.text;

  const languages = await getLanguages();

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
        id={data.id}
        texts={data.text}
        lang={lang}
        extraLinks={extraLinks as unknown as I18nTexts}
        searchParams={searchParams as unknown as any}
      />
    </div>
  );
}
