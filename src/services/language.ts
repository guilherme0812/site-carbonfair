export type LanguageType = {
  sigla: string;
  descricao: string;
  img_bandeira: string;
};

export async function getLanguages(requestInit?: RequestInit) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/idiomas`,
    {
      ...requestInit,
    }
  );
  const folders: LanguageType[] = await res.json();

  return folders;
}
