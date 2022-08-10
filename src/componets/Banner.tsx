import React from "react";
import styled from "styled-components";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import BannerImg from "../../img/Banner.png";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Swiperr
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={2}
      slidesPerView={1}
      // grid={{ rows: 2, fill: "column" }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className="swiper-wrapper">
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>

        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerImg} />
        </SwiperSlide>
      </div>
    </Swiperr>
  );
};
const Img = styled.img`
  max-width: 100%;
`;

const Swiperr = styled(Swiper)`
  height: 100%;
  .product-list-swiper .swiper-button-prev {
    padding-right: 10px;
    border-radius: 0 100px 100px 0;
    left: 0;
  }

  .swiper-container:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 0.8;
    }
  }

  .swiper {
    width: 1048px;
    height: 382px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 0 4px 0 rgba (0, 0, 0, 0.2);
    font-size: 1.8rem;
    top: 50%;
    transition: 0.3s;
    outline: none;
    opacity: 0.9;
  }
  .swiper-button-prev {
    padding-right: 10px;
    border-radius: 0 100px 100px 0;
    left: 0;
  }
  .swiper {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .swiper-button-next {
    padding-left: 10px;
    border-radius: 100px 0 0 100px;
    right: 0;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 16px;
    font-weight: bolder;
  }
  /* .swiper-slide {
    height: calc((100% - 30px) / 2) !important;
  } */
`;
export default Banner;
