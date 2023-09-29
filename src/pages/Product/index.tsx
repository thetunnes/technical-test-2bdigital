import { useEffect } from 'react'
import { useStoreCart } from '@/store/cart'
import { useParams } from 'react-router-dom'
import { NotFoundProduct } from './components/NotFoundProduct'
import { CarouselPictures } from './components/CarouselPictures'
import { DetailsProduct } from './components/DetailsProduct'

import styles from './styles.module.css'

export default function ProductPage() {
  const { productId } = useParams()
  const productInPage = useStoreCart((state) => state.productInPage)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (productInPage?.id !== productId) {
    return <NotFoundProduct />
  }

  return (
    <>
      <div className={styles.wrapperProduct}>
        <CarouselPictures />
        <DetailsProduct product={productInPage!} />
      </div>
    </>
  )
}
