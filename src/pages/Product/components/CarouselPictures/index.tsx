import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { useStoreCart } from '@/store/cart'
import './styles.css'

export function CarouselPictures() {
  const product = useStoreCart((state) => state.productInPage)

  if (!product) {
    return null
  }

  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return !product.images || !product.images.length
            ? `<span class="${className}"><img src="${product.imageUrl}" /></span>`
            : `<span class="${className}"><img src="${product.images[index]}" /></span>`
        },
        bulletClass: 'image-pagination-bullet',
        bulletActiveClass: 'image-pagination-bullet-active',
      }}
      className="swiperPictureProduct"
      modules={[Pagination]}
    >
      {product.images?.length ? (
        product.images.map((picture) => (
          <SwiperSlide key={picture}>
            <img src={picture} alt="" />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <img src={product.imageUrl} alt="" />
        </SwiperSlide>
      )}
    </Swiper>
  )
}
