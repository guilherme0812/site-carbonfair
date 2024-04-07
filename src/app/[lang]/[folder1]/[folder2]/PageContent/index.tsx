import ClientPage from "@/components/pages/cliente";
import ProjectPage from "@/components/pages/project";
import { LangType, PageId } from "@/services/getPages";
import { I18nTexts } from "@/types";

function PageContent({
  id,
  texts,
  lang,
  folder2,
}: {
  id: PageId;
  texts: I18nTexts;
  lang: LangType;
  folder2: string;
}) {
  return (
    <>
      {id == "projeto" ? (
        <ProjectPage folder2={folder2} texts={texts} lang={lang} />
      ) : id == "cliente" ? (
        <ClientPage folder2={folder2} texts={texts} lang={lang} />
      ) : (
        <div className="mt-20">Página {id} não encontrada</div>
      )}
    </>
  );
}

export default PageContent;
