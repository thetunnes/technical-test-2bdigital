import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Size } from '../Size'
import { IProduct, Size as ISize } from '@/@types/product'
import { formatCurrency } from '@/utils/formatCurrency'
import { calcDiscount } from '@/utils/calcDiscount'

import { useStoreCart } from '@/store/cart'
import { useOpenDrawer } from '@/context/useOpenDrawer'
import styles from './styles.module.css'

interface Props {
  product: IProduct
}

export function Product({ product }: Props) {
  const navigate = useNavigate()
  const { onIsOpen } = useOpenDrawer()
  const { addToCart, addProductInPage } = useStoreCart(
    ({ addProductInPage, addToCart }) => ({ addProductInPage, addToCart }),
  )
  const [selectedSize, setSelectedSize] = useState<ISize | undefined>()

  function handleOpenPageProduct(
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) {
    const target = event.target as HTMLElement

    if (
      target.tagName !== 'BUTTON' ||
      (!selectedSize && target.id === 'submit')
    ) {
      addProductInPage(product)
      navigate(`/${product.id}`)
    }

    if (selectedSize && target.id === 'submit') {
      addToCart({
        id: product.id,
        imageUrl: product.imageUrl,
        maxParcels: product.maxParcels,
        name: product.name,
        price: product.price,
        selectedSize,
        tags: product.tags,
      })
      onIsOpen(true)
    }
  }

  const indexTagSale = product?.tags?.findIndex(
    (tag) => tag.type === 'sale',
  ) as number
  const tagSale = product?.tags?.[indexTagSale] ?? null

  const discountPrice = tagSale
    ? calcDiscount(tagSale.label, product.price)
    : null

  return (
    <div className={styles.product} onClick={(e) => handleOpenPageProduct(e)}>
      <div className={styles.labels}>
        {product?.tags?.map((tag) => (
          <label className={styles.label} data-type={tag.type} key={tag.label}>
            {tag.label}
          </label>
        ))}
      </div>

      <div className={styles.content}>
        <img
          src={product.imageUrl}
          className={styles.picture}
          alt=""
          loading="lazy"
        />
        <nav className={styles.sizes}>
          {product?.sizes.map((size) => (
            <Size
              key={size.id}
              onSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              size={size}
            />
          ))}
        </nav>
      </div>

      <p className={styles.name}>{product.name}</p>
      <footer className={styles.footer}>
        {discountPrice ? (
          <>
            <div className={styles.price}>
              <span className={styles.fullPrice}>
                {formatCurrency(product.price)}
              </span>
              <p className={styles.finalPrice}>
                {formatCurrency(discountPrice)}
              </p>
            </div>

            <span className={styles.parcels}>
              Em até {product.maxParcels}x de{' '}
              <strong>
                {formatCurrency(discountPrice / product.maxParcels)}
              </strong>
            </span>
          </>
        ) : (
          <>
            <div className={styles.price}>
              <p className={styles.finalPrice}>
                {formatCurrency(product.price)}
              </p>
            </div>

            <span className={styles.parcels}>
              Em até {product.maxParcels}x de{' '}
              <strong>
                {formatCurrency(product.price / product.maxParcels)}
              </strong>
            </span>
          </>
        )}

        <Button id="submit">comprar</Button>
      </footer>
    </div>
  )
}
