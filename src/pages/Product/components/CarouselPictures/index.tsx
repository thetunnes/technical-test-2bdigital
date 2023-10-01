import { useMemo, useState } from 'react'
import { Swiper as SwiperProps } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import { IProduct } from '@/@types/product'
import styles from './styles.module.css'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

interface Props {
  product: IProduct
}

export function CarouselPictures({ product }: Props) {
  // const swiperRef = useRef<SwiperRef>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperProps | null>(null)
  const pages = useMemo(() => {
    if (product) {
      if (product?.images?.length) {
        return product.images
      }
      return [product.imageUrl]
    }

    return null
  }, [product])

  if (!product || !pages) {
    return null
  }

  return (
    <section className={styles.wrapper}>
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={styles.swiperPictureProduct}
        modules={[Thumbs, FreeMode]}
      >
        {product.images?.length ? (
          product.images.map((picture) => (
            <SwiperSlide className={styles.slide} key={picture}>
              <img src={picture} alt="" loading="lazy" />
              <div className="swiper-lazy-preloader" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className={styles.slide}>
            <img src={product.imageUrl} alt="" loading="lazy" />
            <div className="swiper-lazy-preloader" />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        direction="vertical"
        slidesPerView={5}
        spaceBetween={20}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={`${styles.swiperPictureProduct} ${styles.swiperThumbs}`}
      >
        {product.images?.length ? (
          product.images.map((picture) => (
            <SwiperSlide className={styles.slideThumb} key={picture}>
              <img src={picture} alt="" loading="lazy" />
              <div className="swiper-lazy-preloader" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className={styles.slideThumb}>
            <img src={product.imageUrl} alt="" loading="lazy" />
            <div className="swiper-lazy-preloader" />
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}
