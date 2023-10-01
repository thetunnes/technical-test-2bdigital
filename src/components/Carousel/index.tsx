import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import BannerPrincipal from '@/assets/banner principal@2x.png'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.css'

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
        className={styles.swiper}
      >
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
            loading="lazy"
          />
          <div className={`swiper-lazy-preloader ${styles.loading}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
            loading="lazy"
          />
          <div className={`swiper-lazy-preloader ${styles.loading}`} />
        </SwiperSlide>
        <SwiperSlide className={styles['swiper-slide']}>
          <img
            src={BannerPrincipal}
            alt="Banner e-commerce & business performance 2bstore"
            loading="lazy"
          />
          <div className={`swiper-lazy-preloader ${styles.loading}`} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
