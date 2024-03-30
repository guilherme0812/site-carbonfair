import { Footer } from "@/components/patterns";
import { LangType, getPages } from "@/services/getPages";
import { I18nTexts } from "@/types";
import { ReactNode } from "react";

async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const req = await getPages("footer");
  const footerText = req.find((p) => p.lang == params.lang)?.text;
  return (
    <>
      {children}
      <Footer
        texts={footerText as unknown as I18nTexts}
        lang={params.lang as unknown as LangType}
      />
    </>
  );
}

export default Layout;
