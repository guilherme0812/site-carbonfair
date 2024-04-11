"use client";

import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
// import Header from "./Header";
import {
  GrayTitle,
  NewButton,
  ResponsiveImage,
  Step,
  StepItem,
} from "../../ui";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const ProjectRegisterPage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  const requiments = [
    t("txt-9e3e9356"),
    t("txt-0a85f168"),
    t("txt-69a3beac"),
    t("txt-02d85467"),
    t("txt-06ca0246"),
    t("txt-94983c0b"),
  ];

  const supportedProjects = [
    t("txt-a3e9f65a"),
    t("txt-cf1a67aa"),
    t("txt-45a3578d"),
    t("txt-225e285d"),
  ];

  const energy = [
    t("txt-4d32fa5b"),
    t("txt-6b0ccf6d"),
    t("txt-bf4254b2"),
    t("txt-b7c1dc58"),
    t("txt-aae207c3"),
    t("txt-a87cad66"),
    t("txt-1f276ae2"),
    t("txt-e02f7ce9"),
  ];

  const waste = [
    t("txt-5fc26e45"),
    t("txt-83d5aeb4"),
    t("txt-93206282"),
    t("txt-ff1b1529"),
    t("txt-305312b1"),
  ];

  const step1 = [
    t("txt-2dfb36fd"),
    t("txt-a607efa3"),
    t("txt-6431f865"),
    t("txt-5e57188e"),
    t("txt-c379992f"),
    t("txt-dd57e187"),
  ];

  const step2 = [
    t("txt-8d2ed88a"),
    t("txt-b98268e6"),
    t("txt-b98268e6"),
    t("txt-48372f5c"),
    t("txt-ddd75766"),
  ];

  const step3 = [t("txt-7597746a"), t("txt-5d2ab4e5"), t("txt-bbd2accd")];

  const step4 = [t("txt-271d0c67"), t("txt-cb8d5025")];

  const typographyProps = {
    component: "p",
    variant: "body1",
    // color: "GrayText",
  };

  const backgroundImageProps = {
    width: "512px",
    height: "341px",
    borderRadius: "8px",
    bgcolor: "#bdbdbd",
    backgroundSize: "cover",
  };

  return (
    <>
      {/* <Header /> */}
      <Header url="/background/cadastrar-projeto.jpg">
        <HeaderDefaultContent lang={lang} title={t("lbl-028666af")} />
        <p className="text-white text-lg mt-2">{t("txt-a5d8489e")}</p>
      </Header>

      <Box
        component="main"
        id="main"
        sx={(theme) => ({ bgcolor: theme.palette.grey[100] })}
      >
        <section>
          <div className="container">
            <Box component="header">
              <p
                className="text-base text-gray-600 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: t("txt-708f138a") }}
              />
            </Box>
          </div>
        </section>

        <Box component="section" sx={{ pt: 0 }} className="container">
          <Box
            component="header"
            sx={{ borderBottom: "1px solid #bdbdbd", mb: 2 }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              {t("lbl-1aed85c0")}
            </GrayTitle>
          </Box>

          <ul className="list-disc">
            {requiments.map((item, index) => (
              <li
                className="mb-1 whitespace-pre-line text-gray-600"
                dangerouslySetInnerHTML={{ __html: item }}
                key={index}
              />
            ))}
          </ul>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
              mb: 8,
            }}
          >
            <ResponsiveImage
              alt="image"
              src="/images/2.jpg"
              width={1024 / 1.5}
              height={682 / 1.5}
              style={{ borderRadius: "8px" }}
            />
          </Box>

          <Box
            component="header"
            sx={{
              borderBottom: "1px solid #bdbdbd",
              mt: 4,
              mb: 4,
            }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              {t("lbl-b3c1d4f0")}
            </GrayTitle>
          </Box>

          <Grid
            container
            columnSpacing={4}
            rowSpacing={{ xs: 8, md: 4 }}
            sx={{ mb: 8 }}
          >
            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                {t("lbl-7d6de1dc")}
              </Typography>

              <ul>
                {supportedProjects.map((item, index) => (
                  <li
                    className="mb-1 whitespace-pre-line text-gray-600"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Grid>

            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/floresta.jpg')",
                }}
              ></Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/floresta-santa-maria.jpg')",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                {t("lbl-95832c3b")}
              </Typography>

              <ul>
                {energy.map((item, index) => (
                  <li
                    className="mb-1 whitespace-pre-line text-gray-600"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Grid>

            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                {t("lbl-7ac4cde2")}
              </Typography>

              <ul>
                {waste.map((item, index) => (
                  <li
                    className="mb-1 whitespace-pre-line text-gray-600"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/residuos.jpg')",
                }}
              ></Box>
            </Grid>
          </Grid>

          <Box
            component="header"
            sx={{ borderBottom: "1px solid #bdbdbd", mb: 2 }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              {t("lbl-8f3d70f8")}
            </GrayTitle>
          </Box>

          <Grid container>
            <Grid item xs={12}>
              <Step>
                <StepItem
                  count={1}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      {t("lbl-cff14e91")}
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step1.map((item, index) => (
                          <li
                            className="mb-1 whitespace-pre-line text-gray-600"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Box>

                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/verificacao.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>
                <StepItem
                  count={2}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      {t("lbl-d6de1899")}
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step2.map((item, index) => (
                          <Typography
                            key={index}
                            {...(typographyProps as any)}
                            component="li"
                          >
                            {item}
                          </Typography>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/certificate.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>

                <StepItem
                  count={3}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      {t("lbl-1f93f3bf")}
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step3.map((item, index) => (
                          <li
                            className="mb-1 whitespace-pre-line text-gray-600"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/checked.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>

                <StepItem
                  count={4}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      {t("lbl-56c2b7fa")}
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step4.map((item, index) => (
                          <li
                            className="mb-1 whitespace-pre-line text-gray-600"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/online-shopping.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>
              </Step>
            </Grid>
          </Grid>
        </Box>

        <br />

        <Box component="section" sx={{ bgcolor: "#303333" }}>
          <Box
            sx={{
              py: 0,
              minHeight: 239,
              display: "flex",
              alignItems: "center",
            }}
            className="container"
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                component="h2"
                variant="h4"
                color="white"
                align="center"
                fontWeight="bold"
                sx={{ mb: "2rem" }}
              >
                {t("lbl-0393fc94")}
              </Typography>

              <Box sx={{ width: "239px", m: "auto" }}>
                <NewButton>{t("btn-a5459587")}</NewButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <NewLetter /> */}
    </>
  );
};
export default ProjectRegisterPage;
