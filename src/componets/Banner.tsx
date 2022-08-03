import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000 }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Img src="../../../img/Banner.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="../../../img/Banner.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="../../../img/Banner.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="../../../img/Banner.png" />
      </SwiperSlide>
    </Swiper>
  );
};
const Img = styled.img`
  max-width: 100%;
`;
export default Banner;
