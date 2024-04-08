"use client";

import * as React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import styled from "styled-components";
import { useApiCBProjects } from "../../../../hooks/useApiProjects";
import { Button, SimpleSearch } from "../../../ui";
import { OptionProps } from "../../../ui/SimpleSearch/index";
import Carousel from "./Carousel";
import MapSection from "./MapSection";
import { IoMapOutline } from "react-icons/io5";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";

const Container = styled.section`
  .carrousel-container {
    background-image: url("/background/projects.png");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;

    .gradient {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.3113620448179272) 100%
      );
    }
  }

  .mapToggleContainer {
    overflow: hidden;
    height: 0;
    transition: 300ms;
  }
  .mapToggleContainer.active {
    height: 60vh;
  }
`;

const SocialProjectsSection = ({
  texts,
  lang,
  extraLinks,
}: {
  texts: I18nTexts;
  extraLinks: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);
  const { projects, projectsIsLoading } = useApiCBProjects();

  const [options, setOption] = React.useState<OptionProps[]>([]);
  const [active, setActive] = React.useState(false);

  const projectsData = projects?.slice(0, 60);

  React.useEffect(() => {
    if (projects) {
      const projectOption = projects.map(
        (project) =>
          ({
            type: "Projeto",
            title: project.des_projeto,
            link: `/projeto/${project.des_url_prefix}`,
          } as OptionProps)
      );
      setOption([...projectOption]);
    }
  }, [projects]);

  return (
    <Container>
      <div className="carrousel-container">
        <div className="gradient">
          <Box className="container" sx={{}}>
            <Box component="header">
              <Typography
                component="h2"
                variant="h4"
                sx={{ fontWeight: "bold", mb: "1rem" }}
                align="center"
              >
                {t("lbl-ff1dd8ae")}
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{ fontWeight: "bold", mb: "1rem" }}
                align="center"
                color="GrayText"
              >
                {t("txt-62a72bcb")}
              </Typography>

              <SimpleSearch options={options} texts={texts} />
            </Box>

            {!projectsIsLoading ? (
              <>
                <Box>
                  <Carousel
                    options={projectsData}
                    lang={lang}
                    extraLinks={extraLinks}
                  />
                </Box>
              </>
            ) : (
              <>
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={500}
                  sx={{ mb: "2rem" }}
                />
                <Skeleton variant="rounded" width="100%" height={60} />
              </>
            )}
          </Box>
        </div>
      </div>

      <Box sx={{ py: "2rem" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          align="center"
          sx={{ mb: "2rem" }}
        >
          {active ? t("txt-120402d2") : t("txt-c56cec7a")}
        </Typography>
        <Box sx={{ width: "250px", m: "auto" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setActive(!active)}
          >
            <IoMapOutline size={"1.5rem"} />
          </Button>
        </Box>
      </Box>

      <Box className={`mapToggleContainer ${active && "active"}`}>
        <MapSection />
      </Box>
    </Container>
  );
};

export default SocialProjectsSection;
