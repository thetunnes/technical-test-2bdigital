import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { useStoreCart } from '@/store/cart'
import 'swiper/css/pagination'

import './styles.css'

export function CarouselPictures() {
  const product = useStoreCart((state) => state.productInPage)

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

  console.log(pages)
  return (
    <Swiper
      observer={true}
      observeParents={true}
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className} ${product.id}"><img id="${product.id}" src="${pages[index]}" /></span>`
        },
        bulletClass: `image-pagination-bullet`,
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
