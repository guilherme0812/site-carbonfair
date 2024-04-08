"use client";

import * as React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import {
  Grid,
  Navigation,
  Mousewheel,
  Keyboard,
  A11y,
  Controller,
} from "swiper";
import Card from "./Card";
import { ICBClient, useApiCBClients } from "../../../../hooks/useApiClients";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import SimpleSearch, {
  OptionProps,
} from "../../../../components/ui/SimpleSearch";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { LangType } from "@/services/getPages";

const Container = styled.section`
  background-color: ${(props) => props.theme.palette.grey[100]};

  .carousel-container {
    position: relative;

    .swipper-button {
      position: absolute;
      top: 45%;
      display: flex;
      height: 40px;
      width: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      border: 1px solid ${(props) => props.theme.palette.grey[500]};
      cursor: pointer;
      z-index: 1000;
    }

    .swipper-button:hover {
      background-color: ${(props) => props.theme.palette.grey[200]};
    }

    .swipper-button.left {
      left: -40px;

      @media (max-width: 900px) {
        left: 0;
      }
    }

    .swipper-button.right {
      right: -40px;

      @media (max-width: 900px) {
        right: 0;
      }
    }
  }
`;
const ClientsSection = ({
  texts,
  lang,
  extraLinks,
}: {
  extraLinks: I18nTexts;
  texts: I18nTexts;
  lang: LangType;
}) => {
  const [allClients, setAllClients] = React.useState<ICBClient[]>([]);
  const [options, setOption] = React.useState<OptionProps[]>([]);
  const { t } = useI18n(texts);

  // eslint-disable-next-line
  const [swiper, setSwiper] = React.useState<any>();
  const [swiperIndex, setSwiperIndex] = React.useState(1); // +1

  // eslint-disable-next-line
  const prevRef = React.useRef<any>();
  // eslint-disable-next-line
  const nextRef = React.useRef<any>();

  const { clients } = useApiCBClients();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  React.useEffect(() => {
    if (clients) {
      const clientsData = clients
        .filter((item) => item.bol_ativo != false)
        .sort((a, b) =>
          a.des_nome.toLocaleUpperCase() > b.des_nome.toLocaleUpperCase()
            ? 1
            : -1
        );

      const clientsOptions = clientsData.map(
        (client) =>
          ({
            type: "Cliente",
            title: client.des_nome,
            link: `/cliente/${client.des_identificador}`,
          } as OptionProps)
      );

      setOption([...clientsOptions]);
      setAllClients(clientsData.slice(0, 60));
    }
  }, [clients]);

  return (
    <Container>
      <div className="container">
        <Box component="header">
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold" }}
            align="center"
          >
            {t("lbl-09accd0b")}
          </Typography>

          <SimpleSearch texts={texts} options={options} />
        </Box>

        <div className="carousel-container">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
            }}
            grid={{
              fill: "row",
            }}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            modules={[Grid, Navigation, Mousewheel, Keyboard, A11y, Controller]}
            onSwiper={setSwiper}
            updateOnWindowResize
            observer
            observeParents
            onRealIndexChange={(swiper) => setSwiperIndex(swiper.realIndex + 1)}
          >
            {allClients.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card
                    active={swiperIndex === index}
                    {...item}
                    lang={lang}
                    extraLinks={extraLinks}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button className="swipper-button left" ref={prevRef}>
            <IoArrowBackOutline color="#9e9e9e" />
          </button>
          <button className="swipper-button right" ref={nextRef}>
            <IoArrowForwardOutline color="#9e9e9e" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ClientsSection;
