import { Minus, Plus, Trash2 } from 'lucide-react'
import styles from './styles.module.css'
import { useMemo, useRef } from 'react'
import { IProduct, Size } from '@/@types/product'
import { useStoreCart } from '@/store/cart'
import { formatCurrency } from '@/utils/formatCurrency'
import { productIsOnSale } from '@/utils/calcDiscount'

interface Product extends Omit<IProduct, 'sizes' | 'tag'> {
  selectedSize: Size
  amount: number
}

interface Props {
  product: Product
}

export function ProductInCart({ product }: Props) {
  const { addToCart, removeFromCart, removeUnitProduct } = useStoreCart(
    ({ addToCart, removeFromCart, removeUnitProduct }) => ({
      addToCart,
      removeFromCart,
      removeUnitProduct,
    }),
  )
  const amountRef = useRef<HTMLInputElement>(null)

  const discountPrice = useMemo(() => {
    return productIsOnSale(product)
  }, [product])

  return (
    <div className={styles.wrapper}>
      <img src={product.imageUrl} alt="" />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.titleProduct}>
            <h4>{product.name}</h4>
            <span className="caption-—-urbanist-—-12-pt-blue">
              Tamanho: {product.selectedSize.label}
            </span>
          </div>
          <button
            className={styles.removeItem}
            data-testid="removeProduct"
            onClick={() => removeFromCart(product.id, product.selectedSize.id)}
          >
            <Trash2 strokeWidth={1} />
          </button>
        </header>
        <footer className={styles.footer}>
          <div className={styles.amountItems}>
            <button
              onClick={() =>
                removeUnitProduct(product.id, product.selectedSize.id)
              }
              data-testid="decreaseProduct"
              disabled={product.amount < 2}
            >
              <Minus />
            </button>
            <input
              type="number"
              id={`${product.id}-${product.selectedSize.id}`}
              ref={amountRef}
              value={product.amount}
              disabled
            />
            <button
              onClick={() => addToCart(product)}
              disabled={product.amount === product.selectedSize.stock}
              data-testid="addProduct"
            >
              <Plus />
            </button>
          </div>

          <div>
            {discountPrice ? (
              <>
                <div className={styles.price} data-testid="discountPrice">
                  <span className={styles.fullPrice}>
                    {formatCurrency(product.price)}
                  </span>
                  <p className="body-02-—-urbanist—-14-pt-bold">
                    {formatCurrency(discountPrice)}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.price}>
                  <p className="body-02-—-urbanist—-14-pt-bold">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </>
            )}
          </div>
        </footer>
      </div>
    </div>
  )
}
