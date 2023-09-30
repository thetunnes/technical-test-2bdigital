import { useEffect } from 'react'
import { useStoreCart } from '@/store/cart'
import { useParams } from 'react-router-dom'
import { NotFoundProduct } from './components/NotFoundProduct'
import { CarouselPictures } from './components/CarouselPictures'
import { DetailsProduct } from './components/DetailsProduct'

import styles from './styles.module.css'
import { ProductsBestsSaller } from '@/components/ProductsBestsSaller'

export default function ProductPage() {
  const { productId } = useParams()
  const productInPage = useStoreCart((state) => state.productInPage)

  const product =
    productInPage.current?.id === productId
      ? productInPage.current
      : productInPage?.prev?.id === productId && productInPage.prev

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (product) {
      document.title = `2bstore | ${product.name}`
    }
  }, [product])

  if (!product) {
    return <NotFoundProduct />
  }

  return (
    <>
      <div className={styles.wrapperProduct}>
        <CarouselPictures product={product} />
        <DetailsProduct product={product} />
      </div>

      {!!product?.description && (
        <section className={styles.descriptionProduct}>
          <div>
            <h5 className="h6-—-urbanist-—-20-pt">Descrição</h5>
            {typeof product.description === 'string' && (
              <p className="body-02-—-urbanist-—-14-pt">
                {product.description}
              </p>
            )}
            {typeof product.description === 'object' && (
              <>
                <p className="body-02-—-urbanist-—-14-pt">
                  {product.description.text}
                </p>
                <div>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Descrição cor: {product.description.color}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Peso: {product.description.weight}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Composição: {product.description.composition}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Fabricante: {product.description.manufacturer}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      <ProductsBestsSaller />
    </>
  )
}
