import { Swiper, SwiperSlide } from "swiper/react";
import BannerTShirt from "@/assets/banner_01.png";
import BannerMugs from "@/assets/banner_02.png";
import BannerSqueeze from "@/assets/banner_03.png";
import BannerBottons from "@/assets/banner_04.png";

import "./styles.css";

export function CarouselTypeProducts() {
  return (
    <section className="wrapperCarousel">
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        <SwiperSlide>
          <img src={BannerTShirt} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerMugs} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerSqueeze} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerBottons} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerBottons} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerBottons} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
