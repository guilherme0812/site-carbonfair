import "../../styles/global.css";
import {
  Navbar,
  Footer,
  GoogleAnalytics,
  FloatingIcons,
} from "@/components/patterns";
import Providers from "@/components/providers";
import { getToken } from "@/services/token";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbonfair",
  description: "Carbon fair",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenData = await getToken();

  return (
    <html lang="pt-br">
      <head>
        {process.env.NEXT_PUBLIC_GA_TRACKING ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING} />
        ) : null}
      </head>
      <body className={OpenSans.className}>
        <Providers tokenData={tokenData}>
          {/* <Navbar /> */}
          <FloatingIcons />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
