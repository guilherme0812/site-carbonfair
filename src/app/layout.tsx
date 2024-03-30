import "../styles/global.css";
import "../styles/globals.css";
import { Navbar, Footer, GoogleAnalytics } from "@/components/patterns";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const mainFontFamily = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Carbonfair",
  description: "Carbon fair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        {process.env.NEXT_PUBLIC_GA_TRACKING ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING} />
        ) : null}
      </head>
      <body className={mainFontFamily.className}>
        <Providers>
          {/* <FloatingIcons /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
