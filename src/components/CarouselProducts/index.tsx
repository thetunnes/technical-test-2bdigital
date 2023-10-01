import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { IProduct } from '@/@types/product'
import { Product } from '../Product'

import 'swiper/css'
import 'swiper/css/navigation'
// import './styles.css'

import styles from './styles.module.css'

interface Props {
  products: Array<IProduct>
  title: string
}

export function CarouselProducts({ products, title }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <section>
        <Swiper
          navigation={{
            nextEl: '.new-swiper-button-next',
            prevEl: '.new-swiper-button-prev',
            disabledClass: styles['swiper-button-disabled'],
          }}
          modules={[Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className={styles.swiper}
        >
          <div
            className={`${styles.button} swiper-button new-swiper-button-next ${styles['new-swiper-button-next']}`}
          >
            <ArrowRight />
          </div>
          <div
            className={`${styles.button} swiper-button new-swiper-button-prev ${styles['new-swiper-button-prev']}`}
          >
            <ArrowLeft />
          </div>
          {products.map((product) => (
            <SwiperSlide key={product.id} className={styles.swiperProducts}>
              <Product product={product} />
              {/* <div className="swiper-lazy-preloader" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}
