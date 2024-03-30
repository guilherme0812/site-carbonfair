import ClientsSection from "@/components/pages/index/ClientsSection";
import SocialProjectsSection from "@/components/pages/index/SocialProjectsSection";
import SolutionsSection from "@/components/pages/index/SolutionsSection";
import VideoSection from "@/components/pages/index/VideoSection";
import {
  Navbar,
  FloatingIcons,
  OurPartners,
  CommomQuestionsSection,
} from "@/components/patterns";
import Header from "@/components/pages/index/Header";
import { I18nTexts } from "@/types";
import { LangType, getPages } from "@/services/getPages";
import { LanguageType } from "@/services/language";

export const dynamicParams = false;

const HOME = "home";
const NAVBAR = "header";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/idiomas`,
    { headers: { Authorization: "abc" }, next: { revalidate: 60 } }
  );
  const langs: LanguageType[] = await res.json();

  return langs.map((l) => ({
    lang: l.sigla,
  }));
}

async function Page({ params }: { params: { lang: string } }) {
  const data = await getPages(HOME);
  const pageData = data.find((page) => page.lang == params.lang);

  const navbarPages = await getPages(NAVBAR, "");
  const navbarText = navbarPages.find((page) => page.lang == params.lang)?.text;
  const languagesReq = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/idiomas`,
    { next: { revalidate: 60 } }
  );
  const languages = (await languagesReq.json()) as LanguageType[];

  const texts = pageData?.text;

  return (
    <>
      <Navbar
        pages={data}
        texts={navbarText as unknown as I18nTexts}
        lang={params.lang as LangType}
        languages={languages}
      />

      <FloatingIcons />

      <Header texts={texts} />

      <main id="main">
        <VideoSection texts={texts as unknown as I18nTexts} />

        <SolutionsSection texts={texts as unknown as I18nTexts} />

        <SocialProjectsSection texts={texts as unknown as I18nTexts} />

        <ClientsSection texts={texts as unknown as I18nTexts} />

        <OurPartners texts={texts as unknown as I18nTexts} />

        <CommomQuestionsSection texts={texts as unknown as I18nTexts} />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Page;
