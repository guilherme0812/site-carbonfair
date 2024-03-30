"use client";

import * as React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
import Card, { CardProps } from "./Card";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.div`
  .carousel-container {
    position: relative;
  }
`;

const Carousel = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);
  const list: CardProps[] = [
    {
      description: t("txt-c228b3c0"),
      urlImage: "/logos/cropped-logo-icorp1.png",
      alt: "ICORPS",
    },
    {
      description: t("txt-76322293"),
      urlImage: "/logos/dna-usp.png",
      alt: "DNA USP",
    },
    {
      description: t("txt-8df33da2"),
      urlImage: "/logos/logo-quanticum2.jpg",
      alt: "Quanticum",
    },
    {
      description: t("txt-8df33da2"),
      urlImage: "/logos/geplant-logo.jpg",
      alt: "Geplant",
    },
    {
      description: t("txt-e16675ba"),
      urlImage: "/logos/eccaplan-logo.png",
      alt: "Eccaplan",
    },
    {
      description: t("txt-f6ff72ef"),
      urlImage: "/logos/logo-cietec.png",
      alt: "Cietec",
    },
  ];
  return (
    <Container>
      <div className="carousel-container">
        <Swiper
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
          }}
          grid={{
            fill: "row",
          }}
          pagination={{ clickable: true }}
          modules={[Grid, Pagination]}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
export default Carousel;
