import * as React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import {
  Grid,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  A11y,
  Controller,
} from "swiper";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MarketplaceCard } from "@/components/ui";
import { CartProduct } from "@/hooks/useCartStore";
const Container = styled.section`
  .carousel-container {
    position: relative;

    // Custom swipper
    .swiper {
      padding-bottom: 50px;
    }
    .swiper-pagination-bullet {
      /* margin-top: 300px; */
      padding: 7px;
      /* background-color: red; */
    }

    .swipper-button {
      position: absolute;
      top: 45%;
      display: flex;
      height: 40px;
      width: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      border: 1px solid ${(props) => props.theme.palette.grey[900]};
      background-color: ${(props) => props.theme.palette.grey[900]};
      cursor: pointer;
      z-index: 1000;
      transition: 300ms;
    }

    .swipper-button:hover {
      background-color: transparent;
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

    .swiper-pagination {
      /* transform: translateY(100px); */
    }
  }
`;
const Carousel = ({ productsList }: { productsList: CartProduct[] }) => {
  // eslint-disable-next-line
  const [swiper, setSwiper] = React.useState<any>();

  // eslint-disable-next-line
  const prevRef = React.useRef<any>();
  // eslint-disable-next-line
  const nextRef = React.useRef<any>();

  React.useEffect(() => {
    if (swiper?.navigation) {
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
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
          }}
          grid={{
            fill: "row",
            rows: 2,
          }}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          pagination={{ clickable: true }}
          modules={[
            Navigation,
            Pagination,
            Grid,
            Mousewheel,
            Keyboard,
            A11y,
            Controller,
          ]}
          onSwiper={setSwiper}
          updateOnWindowResize
          observer
          observeParents
          //   onRealIndexChange={(swiper) => setSwiperIndex(swiper.realIndex + 1)}
        >
          {productsList?.map((item, index) => (
            <SwiperSlide key={index}>
              <MarketplaceCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swipper-button left" ref={prevRef}>
          <IoArrowBackOutline color="#ffffff" />
        </div>
        <div className="swipper-button right" ref={nextRef}>
          <IoArrowForwardOutline color="#ffffff" />
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
