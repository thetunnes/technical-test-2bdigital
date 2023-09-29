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
    if (productInPage) {
      document.title = `2bstore | ${productInPage.name}`
    }
  }, [productInPage])

  if (productInPage?.id !== productId) {
    return <NotFoundProduct />
  }

  return (
    <>
      <div className={styles.wrapperProduct}>
        <CarouselPictures />
        <DetailsProduct product={productInPage!} />
      </div>

      {!!productInPage?.description && (
        <section className={styles.descriptionProduct}>
          <div>
            <h5 className="h6-—-urbanist-—-20-pt">Descrição</h5>
            {typeof productInPage.description === 'string' && (
              <p className="body-02-—-urbanist-—-14-pt">
                {productInPage.description}
              </p>
            )}
            {typeof productInPage.description === 'object' && (
              <>
                <p className="body-02-—-urbanist-—-14-pt">
                  {productInPage.description.text}
                </p>
                <div>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Descrição cor: {productInPage.description.color}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Peso: {productInPage.description.weight}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Composição: {productInPage.description.composition}
                  </p>
                  <p className="body-02-—-urbanist-—-14-pt">
                    Fabricante: {productInPage.description.manufacturer}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  )
}
