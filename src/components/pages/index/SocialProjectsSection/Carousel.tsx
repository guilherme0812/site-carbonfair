"use client";

import * as React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

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
import { ICBProject } from "../../../../hooks/useApiProjects";
import { ProjectCard } from "../../../patterns";

interface CarouselProps {
  options: ICBProject[];
}
const Container = styled.div`
  .carousel-container {
    position: relative;
  }
`;

const Carousel = ({ options }: CarouselProps) => {
  const [swiper, setSwiper] = React.useState<any>();

  // eslint-disable-next-line
  const prevRef = React.useRef<any>();
  // eslint-disable-next-line
  const nextRef = React.useRef<any>();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

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
              slidesPerView: 3,
            },
            // when window width is >= 768px
          }}
          grid={{
            fill: "row",
          }}
          pagination={true}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          modules={[Grid, Navigation, Mousewheel, Keyboard, A11y, Controller]}
          onSwiper={setSwiper}
          updateOnWindowResize
          observer
          observeParents
        >
          {options.map((item, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...item} shadow={false} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swipper-button left" ref={prevRef}>
          <IoArrowBackOutline color="#9e9e9e" />
        </button>
        <button className="swipper-button right" ref={nextRef}>
          <IoArrowForwardOutline color="#9e9e9e" />
        </button>
      </div>
    </Container>
  );
};
export default Carousel;
