import { Swiper, SwiperSlide } from 'swiper/react'
import BannerTShirt from '@/assets/banner_01.png'
import BannerMugs from '@/assets/banner_02.png'
import BannerSqueeze from '@/assets/banner_03.png'
import BannerBottons from '@/assets/banner_04.png'

import './styles.css'

export function CarouselTypeProducts() {
  return (
    <section className="wrapperCarousel">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
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
          <img src={BannerTShirt} alt="Banner rosa com uma camiseta rosa" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={BannerMugs}
            alt="Banner retangular rosa claro, com duas canecas"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={BannerSqueeze}
            alt="Banner retangular rosa claso, com uma garrafa de água"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerBottons} alt="Banner retangular azul com 4 Bottons" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
