import { useState } from 'react'
import { IProduct, Size as ISize } from '@/@types/product'

import { Button } from '@/components/Button'
import { Size } from '@/components/Size'
import { useOpenDrawer } from '@/context/useOpenDrawer'
import { calcDiscount } from '@/utils/calcDiscount'
import { formatCurrency } from '@/utils/formatCurrency'
import { useStoreCart } from '@/store/cart'

import styles from './styles.module.css'
import { PriceShipping } from './components/PriceShipping'
import { ValueShipping } from './components/ValueShipping'

interface Props {
  product: IProduct
}

export function DetailsProduct({ product }: Props) {
  const { onIsOpen } = useOpenDrawer()
  const addToCart = useStoreCart((state) => state.addToCart)
  const [selectedSize, setSelectedSize] = useState<ISize | undefined>()

  const indexTagSale = product?.tags?.findIndex(
    (tag) => tag.type === 'sale',
  ) as number
  const tagSale = product?.tags?.[indexTagSale] ?? null

  const discountPrice = tagSale
    ? calcDiscount(tagSale.label, product.price)
    : null

  return (
    <section className={styles.detailsProduct}>
      <h5 className="h6-—-urbanist-—-20-pt">{product?.name}</h5>
      <span className="caption-—-urbanist-—-12-pt-blue">Ref.: 2B2022TIB</span>

      {discountPrice ? (
        <div className={styles.priceProduct}>
          <p className={styles.totalPrice}>{formatCurrency(product.price)}</p>
          <p className="h6-—-urbanist-—-20-pt">
            {formatCurrency(discountPrice)}
          </p>
          <div className={styles.parcels}>
            <span>Em até {product.maxParcels}x de</span>{' '}
            <strong>
              {formatCurrency(discountPrice / product.maxParcels)}
            </strong>
          </div>
        </div>
      ) : (
        <div className={styles.priceProduct}>
          <p className="h6-—-urbanist-—-20-pt">
            {formatCurrency(product.price)}
          </p>
          <div className={styles.parcels}>
            <span>Em até {product.maxParcels}x de</span>{' '}
            <strong>
              {formatCurrency(product.price / product.maxParcels)}
            </strong>
          </div>
        </div>
      )}

      <div className={styles.selectSize}>
        <header>
          <h6 className="caption-—-urbanist-—-12-pt-blue-bold">Tamanho</h6>
          <p className="caption-—-urbanist-—-12-pt-blue">Selecione</p>
        </header>

        <div className={styles.wrapperSize}>
          {product.sizes.map((size) => (
            <Size
              key={size.id}
              onSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              size={size}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={() => {
          addToCart({
            id: product.id,
            imageUrl: product.imageUrl,
            maxParcels: product.maxParcels,
            name: product.name,
            price: product.price,
            selectedSize: selectedSize!,
            tags: product.tags,
          })
          onIsOpen(true)
        }}
        disabled={!selectedSize}
      >
        adicionar ao carrinho
      </Button>

      <PriceShipping />

      <ValueShipping
        name="Frete Expresso"
        rangeDate="2 à 6 dias"
        price={19.9}
      />
      <ValueShipping
        name="Frete Expresso"
        rangeDate="2 à 6 dias"
        price={19.9}
      />
    </section>
  )
}
