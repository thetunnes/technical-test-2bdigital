import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css/navigation'

import styles from './styles.module.css'
import { useRef } from 'react'

export function TopSlider() {
  const swiperRef = useRef<SwiperType>()
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        className={styles.swiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        loop
      >
        <span
          onClick={() => swiperRef.current?.slidePrev()}
          className={`${styles.prevEl} new-swiper-button-prev`}
        ></span>
        <span
          onClick={() => swiperRef.current?.slideNext()}
          className={`${styles.nextEl} new-swiper-button-next`}
        ></span>

        <SwiperSlide>
          <p className={styles.text}>
            <b className={styles.boldPink}>Frete Grátis</b> para compras a
            partir de R$199
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={styles.text}>
            <b className={styles.boldPink}>PROMOÇÃO</b> de lançamento
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
