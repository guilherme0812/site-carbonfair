import { I18nTexts } from "@/types";

export type PageType = {
  lang: LangType;
  id: PageId;
  folder_1: string;
  folder_2: string;
  folder_3: string;
  text: I18nTexts;
};
export type LangType = "pt-br" | "es" | "en";

export type PageId =
  | "apoiar"
  | "quem-somos"
  | "selos-de-neutralizacao"
  | "contato"
  | "projetos-apoiados"
  | "marketplace"
  | "assinatura-para-parceiros"
  | "ferramentas"
  | "gestao-de-emissao"
  | "neutralizar-emissoes"
  | "por-que-participar"
  | "projetos-apoiados"
  | "registro"
  | "contato"
  | "home"
  | "footer"
  | "header"
  | "projeto"
  | "cliente"
  | "evento"
  | "credito-carbono-compensado";

export const getPages = async (
  folder: string,
  id?: PageId[],
  revalidate?: number
) => {
  let url = `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/paginas?folder=${folder}`;

  if (id !== undefined) {
    url += `&id=${id}`;
  }

  const res = await fetch(url, {
    headers: { Authorization: "abc" },
    // cache: "no-cache",
    ...(revalidate != undefined && { next: { revalidate: revalidate } }),
  });

  return res.json() as unknown as PageType[];
};
