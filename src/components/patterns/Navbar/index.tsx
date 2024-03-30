"use client";

import * as React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";
import { Button } from "../../../components/ui";
import Drawer from "./Drawer";
import Image from "next/image";
import LangDropdown from "./LangDropdown";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { useRouter } from "next/navigation";
import { LanguageType } from "@/services/language";
import { LangType, PageType } from "@/services/getPages";

const Navbar = ({
  lang,
  pages,
  languages,
  texts,
}: {
  pageId?: string;
  lang: LangType;
  pages: PageType[];
  languages: LanguageType[];
  texts: I18nTexts;
}) => {
  const router = useRouter();

  const [openMobileNavBar, setOpenMobileNavBar] = React.useState(false);

  const { t } = useI18n(texts);

  // const { mdDown } = useBreakpoints();

  const constructLink = (code: string) => {
    const hash = t(code);
    return hash ? `/${lang}/${hash}` : "";
  };

  const linkOptions = [
    {
      label: t("btn-8b8c3582"),
      link: constructLink("lnk-c48c3f2e"),
    },
    {
      label: t("btn-5cfd1027"),
      link: constructLink("lnk-0dca038d"),
    },
    {
      label: t("btn-5cfd1027"),
      link: constructLink("lnk-0dca038d"),
    },
    {
      label: t("btn-d8de1e29"),
      link: constructLink("lnk-b4b532b5"),
    },
    {
      label: t("btn-8e6b60bc"),
      link: constructLink("lnk-706a5d8a"),
    },
  ];

  const handleChangeLanguage = (lang: string) => {
    let url = `/${lang}/`;
    const page = pages.find((p) => p.lang == lang);

    if (page && page.folder_1) {
      url += page.folder_1;
    }
    router.push(url);
  };

  const desktopMenu = (
    <div className="hidden md:flex">
      <ul className="flex items-center list-none gap-4">
        {linkOptions.map((item, key) => (
          <li
            // sx={{ display: { xs: "none", md: "block" } }}
            key={key}
            className="text-sm"
          >
            <Link
              href={item.link}
              className=" py-2 px-4 border border-transparent hover:border-gray-400 transition-all duration-150 rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <Box component="li" sx={{ minWidth: 180 }}>
          <Link
            href={process.env.NEXT_PUBLIC_CALCULATOR_HOST || ""}
            target="_blank"
          >
            <Button variant="contained">{t("btn-0001f2f4")}</Button>
          </Link>
        </Box>

        <div className="min-w-20">
          <LangDropdown
            languageSelected={lang}
            languages={languages}
            handleChange={(lang) => handleChangeLanguage(lang)}
          />
        </div>
      </ul>
    </div>
  );

  return (
    <div className="bg-white	absolute top-0 left-0 z-50 w-full">
      {openMobileNavBar && (
        <Drawer
          open={openMobileNavBar}
          onClose={() => setOpenMobileNavBar(false)}
          linkOptions={linkOptions}
        />
      )}
      <div className="max-w-screen-xl flex items-center m-auto px-2 h-16 md:h-14">
        <Grid container columnSpacing={2} alignItems="center">
          <Grid item xs={8} md={6} lg={1.5}>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <IconButton
                  onClick={() => {
                    setOpenMobileNavBar(true);
                  }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
              <Box>
                <Link href="/">
                  <Image
                    src="/logos/carbon-fair.png"
                    alt="CarbonFair"
                    className="logo"
                    data-testid="logo"
                    // placeholder="blur"
                    style={{ objectFit: "contain" }}
                    // loading="lazy"
                    width={130}
                    height={70}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            md={6}
            lg={10.5}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {desktopMenu}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Navbar;
