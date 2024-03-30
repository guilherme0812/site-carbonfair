"use client";

import * as React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io";
import { TbBuilding } from "react-icons/tb";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { NewLetter } from "..";
import { LangType } from "@/services/getPages";

const Container = styled.footer`
  background-color: #3e4242;
  color: ${(props) => props.theme.palette.background.paper};

  .logo {
    display: block;
    max-width: 150px;
  }

  .social-container {
    margin: auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 50px;

    .social-item {
      display: flex;
      height: 30px;
      width: 30px;
      background-color: ${(props) => props.theme.palette.background.paper};
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .logo {
      width: 100%;
    }
  }
`;

const Footer = ({ texts, lang }: { texts: I18nTexts; lang: LangType }) => {
  const { t } = useI18n(texts);

  const constructLink = (code: string) => {
    const hash = t(code);
    return hash ? `/${lang}/${hash}` : "";
  };

  const pages = [
    {
      label: t("txt-b54c66d5"),
      link: constructLink("lnk-f0707ac6"),
    },
    {
      label: t("txt-b6b88fab"),
      link: constructLink("lnk-3b8097a2"),
    },
    {
      label: t("txt-6300a1ce"),
      link: constructLink("lnk-a86d396c"),
    },
    {
      label: t("txt-665f9bde"),
      link: constructLink("lnk-e69f2f25"),
    },
    {
      label: t("txt-92f21ad4"),
      link: constructLink("lnk-f65f1919"),
    },
    {
      label: t("txt-420b1a41"),
      link: constructLink("lnk-0fd020c0"),
    },
    {
      label: t("txt-f7224ea0"),
      link: constructLink("lnk-d04fa62c"),
    },
    {
      label: t("txt-f3e2cb54"),
      link: constructLink("lnk-b28e5fdd"),
    },
    {
      label: t("txt-0a1c8ba1"),
      link: constructLink("lnk-55374735"),
    },
    {
      label: t("txt-e2e1e69c"),
      link: constructLink("lnk-67c49660"),
    },
    {
      label: t("txt-c254d583"),
      link: constructLink("lnk-4b2a8bbf"),
    },
    {
      label: t("txt-3145167e"),
      link: constructLink("lnk-017053eb"),
    },
  ];

  return (
    <div>
      <NewLetter texts={texts} />

      <Container>
        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.grey[800],
          })}
        >
          <div className="container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ mb: "2rem" }}>
                  <img
                    src="/logos/Logo_Carbon_Fair_White.png"
                    alt="CarbonFair"
                    className="logo"
                  />
                </Box>

                <Box className="social-container">
                  <a
                    href="https://www.facebook.com/eccaplan"
                    target="_blank"
                    rel="noreferrer"
                    // className="social-item"
                  >
                    <IoLogoFacebook
                      style={{
                        fontSize: "1.3rem",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/eccaplan_sustentabilidade/"
                    target="_blank"
                    rel="noreferrer"
                    // className="social-item"
                  >
                    <IoLogoInstagram
                      style={{
                        fontSize: "1.3rem",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.youtube.com/user/Eccaplan"
                    target="_blank"
                    rel="noreferrer"
                    // className="social-item"
                  >
                    <IoLogoYoutube
                      style={{
                        fontSize: "1.3rem",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/eccaplan-consultoria-em-sustentabilidade/"
                    target="_blank"
                    rel="noreferrer"
                    // className="social-item"
                  >
                    <IoLogoLinkedin
                      style={{
                        fontSize: "1.3rem",
                      }}
                    />
                  </a>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography
                  component="h3"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  color="primary"
                >
                  {t("lbl-ee7e8779")}
                </Typography>

                <br />

                {pages.slice(0, 4).map((item, index) => (
                  <Typography
                    component="li"
                    sx={{
                      listStyle: "none",
                      mb: "0.5rem",
                    }}
                    variant="body1"
                    key={index}
                  >
                    <a href={item.link}>{item.label}</a>
                  </Typography>
                ))}
              </Grid>

              <Grid item xs={12} md={3}>
                <br />
                <br />

                {pages.slice(4, 8).map((item, index) => (
                  <Typography
                    component="li"
                    sx={{
                      listStyle: "none",
                      mb: "0.5rem",
                    }}
                    variant="body1"
                    key={index}
                  >
                    <a href={item.link}>{item.label}</a>
                  </Typography>
                ))}
              </Grid>

              <Grid item xs={12} md={3}>
                <br />
                <br />

                {pages.slice(8, pages.length).map((item, index) => (
                  <Typography
                    component="li"
                    sx={{
                      listStyle: "none",
                      mb: "0.5rem",
                    }}
                    variant="body1"
                    key={index}
                  >
                    <a href={item.link}>{item.label}</a>
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </div>
        </Box>

        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.grey[900],
          })}
        >
          <Box className="container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography color="primary">
                  &copy; Copyright {new Date().getFullYear()}{" "}
                  {t("txt-b05addfe")}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    mb: "1rem",
                  }}
                >
                  <TbBuilding />
                  <Typography>{t("txt-9b9be3d1")}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <TbBuilding />
                  <Typography>{t("txt-2802b1ee")}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
