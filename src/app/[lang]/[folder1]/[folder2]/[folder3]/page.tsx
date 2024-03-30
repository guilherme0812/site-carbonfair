export const dynamicParams = false;

const data = [
  {
    lang: "pt-br",
    folder1: "clientes",
    folder2: "99",
    folder3: "evento-99",
    id: "evento",
  },
];

export function generateStaticParams() {
  // api/traducao
  return data.map((i) => ({
    folder1: i.folder1,
    folder2: i.folder2,
    folder3: i.folder3,
    lang: i.lang,
  }));
}

export default function Page({
  params,
}: {
  params: { lang: string; page: string; id: string };
}) {
  return <>Página Evento</>;
}
