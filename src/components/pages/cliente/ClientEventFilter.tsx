"use client";

import * as React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Grid,
  Navigation,
  Mousewheel,
  Keyboard,
  A11y,
  Controller,
  Pagination,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IEvent, useCBClientEvent } from "../../../hooks/useApiClients";
import ClientEventCard from "./ClientEventCard";
import { Skeleton } from "@mui/material";

const Container = styled.div`
  .carrousel-cards-container {
    background-image: url("/background/florest.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #fff;

    .container {
      min-height: 365px;
    }
    .swiper-pagination {
      bottom: 0;
    }
    .swiper-pagination-bullet {
      background-color: white;
      padding: 7px;
      opacity: 0.3;
    }
    .swiper-pagination-bullet-active {
      background-color: white;
      opacity: 1;
    }
  }
`;

interface ClientEventFilterProps {
  // eslint-disable-next-line react/no-danger
  url: string;
  clientId: number;
}

const ClientEventFilter = ({ clientId, url }: ClientEventFilterProps) => {
  const { clientEvent, clientEventIsLoading } = useCBClientEvent(clientId);

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
    <>
      {!clientEventIsLoading ? (
        <Container>
          <div
            className="carrousel-cards-container"
            // style={{ paddingBottom: 300 }}
          >
            <div className="container">
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
                    1024: {
                      slidesPerView: 6,
                    },
                  }}
                  grid={{
                    fill: "row",
                  }}
                  navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current,
                  }}
                  modules={[
                    Navigation,
                    Grid,
                    Mousewheel,
                    Keyboard,
                    A11y,
                    Controller,
                    Pagination,
                  ]}
                  onSwiper={setSwiper}
                  updateOnWindowResize
                  observer
                  observeParents
                  pagination={{
                    clickable: true,
                  }}
                  style={{ paddingBottom: 40 }}
                >
                  {clientEvent.eventos.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ClientEventCard data={item} url={url} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div className="swipper-button left" ref={prevRef}>
                  <IoArrowBackOutline color="#9e9e9e" />
                </div>
                <div className="swipper-button right" ref={nextRef}>
                  <IoArrowForwardOutline color="#9e9e9e" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Skeleton variant="rounded" height="300px" sx={{ width: "100%" }} />
      )}
    </>
  );
};
export default ClientEventFilter;
