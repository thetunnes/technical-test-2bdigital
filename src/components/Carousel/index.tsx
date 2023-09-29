import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import BannerPrincipal from '@/assets/banner principal.png'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

export function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
