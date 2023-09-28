import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BannerPrincipal from "@/assets/banner principal.png";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
      slidesPerView={1}
      spaceBetween={50}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src={BannerPrincipal} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerPrincipal} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerPrincipal} />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
