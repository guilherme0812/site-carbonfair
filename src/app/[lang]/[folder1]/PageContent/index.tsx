import SupportPage from "@/components/pages/apoiar";
import SubscriptionForPartnersPage from "@/components/pages/assinatura-para-parceiros";
import ProjectRegisterPage from "@/components/pages/cadastrar-projeto";
import ContactPage from "@/components/pages/contato";
import OffsetCarbonCreditPage from "@/components/pages/credito-carbono-compensado";
import ToolsPage from "@/components/pages/ferramentas";
import EmissionsManagementPage from "@/components/pages/gestao-de-emissoes";
import MarketplacePage from "@/components/pages/marktplace";
import NeutralizeEmissionPage from "@/components/pages/neutralizar-emissoes";
import WhyParticipatePage from "@/components/pages/por-que-participar";
import SupportProjectsPage from "@/components/pages/projetos-apoiados";
import WhoWeArePage from "@/components/pages/quem-somos";
import RegisterPage from "@/components/pages/registo";
import NaturalizarionSealPage from "@/components/pages/selos-de-neutralizacao";
import { LangType, PageId } from "@/services/getPages";
import { I18nTexts } from "@/types";

function PageContent({
  id,
  texts,
  lang,
  extraLinks,
  searchParams,
}: {
  id: PageId;
  texts: I18nTexts;
  extraLinks: I18nTexts;
  lang: LangType;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      {id == "apoiar" ? (
        <SupportPage texts={texts} lang={lang} />
      ) : id == "cadastrar-projeto" ? (
        <ProjectRegisterPage texts={texts} lang={lang} />
      ) : id == "assinatura-para-parceiros" ? (
        <SubscriptionForPartnersPage />
      ) : id == "contato" ? (
        <ContactPage texts={texts} lang={lang} />
      ) : id == "ferramentas" ? (
        <ToolsPage texts={texts} lang={lang} />
      ) : id == "gestao-de-emissao" ? (
        <EmissionsManagementPage texts={texts} lang={lang} />
      ) : id == "marketplace" ? (
        <MarketplacePage texts={texts} lang={lang} />
      ) : id == "neutralizar-emissoes" ? (
        <NeutralizeEmissionPage texts={texts} lang={lang} />
      ) : id == "por-que-participar" ? (
        <WhyParticipatePage texts={texts} lang={lang} />
      ) : id == "projetos-apoiados" ? (
        <SupportProjectsPage
          texts={texts}
          lang={lang}
          extraLinks={extraLinks}
        />
      ) : id == "quem-somos" ? (
        <WhoWeArePage texts={texts} lang={lang} />
      ) : id == "registro" ? (
        <RegisterPage texts={texts} lang={lang} extraLinks={extraLinks} />
      ) : id == "credito-carbono-compensado" ? (
        <OffsetCarbonCreditPage
          searchParams={searchParams}
          params={{}}
          texts={texts}
          lang={lang}
        />
      ) : id == "selos-de-neutralizacao" ? (
        <NaturalizarionSealPage texts={texts} lang={lang} />
      ) : (
        <div className="mt-20">Página {id} não encontrada</div>
      )}
    </>
  );
}

export default PageContent;
