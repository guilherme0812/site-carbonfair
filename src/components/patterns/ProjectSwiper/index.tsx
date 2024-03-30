"use client";

import * as React from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";

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
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

type AuxType = {
  children: React.ReactNode;
};

const Container = styled.section`
  /* background-color: ${(props) => props.theme.palette.grey[100]}; */

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

const ClientsAndPartnersSection = ({ children }: AuxType) => {
  // eslint-disable-next-line
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
      <div className="">
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
            modules={[Navigation, Grid, Mousewheel, Keyboard, A11y, Controller]}
            onSwiper={setSwiper}
            updateOnWindowResize
            observer
            observeParents
          >
            {children}
          </Swiper>

          <div className="swipper-button left" ref={prevRef}>
            <IoArrowBackOutline color="#9e9e9e" />
          </div>
          <div className="swipper-button right" ref={nextRef}>
            <IoArrowForwardOutline color="#9e9e9e" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientsAndPartnersSection;
