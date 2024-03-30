export type FolderType = {
  lang: string;
  id: string;
  folder_1: string;
  folder_2: string;
  folder_3: string;
};

export async function getFolders(requestInit?: RequestInit) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/folders`,
    {
      ...requestInit,
    }
  );
  const folders: FolderType[] = await res.json();

  return folders;
}
