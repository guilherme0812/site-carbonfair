import { getFolders } from "@/services/folders";

export const dynamicParams = false;

export async function generateStaticParams() {
  const req = await getFolders();
  const filterList = ["header", "footer"];
  const filteredPages = req.filter((item) => !filterList.includes(item.id));

  return filteredPages.map((page) => ({
    lang: page.lang,
    folder1: page.folder_1,
    folder2: page.folder_2,
  }));
}

export default function Page({
  params,
}: {
  params: { lang: string; folder1: string; folder2: string };
}) {
  const { lang, folder1, folder2 } = params;

  // const page = dataPaths.find((d) => d.folder1 == folder1);
  // const pageI18n = data.find(
  //   (item) => item.id == page?.id && item.lang == lang
  // );

  return (
    <div>
      {lang} {folder1} {folder2}
    </div>
  );
}
