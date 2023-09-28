import { Minus, Plus, Trash2 } from 'lucide-react'
import styles from './styles.module.css'
import { useRef } from 'react'
import { IProduct, Size } from '@/@types/product'
import { useStoreCart } from '@/store/cart'
import { formatCurrency } from '@/libs/formatCurrency'

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

  return (
    <div className={styles.wrapper}>
      <img src={product.imageUrl} />
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
            onClick={() => removeFromCart(product.id, product.selectedSize.id)}
          >
            <Trash2 strokeWidth={1} />
          </button>
        </header>
        <footer className={styles.footer}>
          <div className={styles.amountItems}>
            <button
              onClick={() => removeUnitProduct(product.id)}
              disabled={product.amount < 2}
            >
              <Minus />
            </button>
            <input
              type="number"
              ref={amountRef}
              value={product.amount}
              disabled
            />
            <button
              onClick={() => addToCart(product)}
              disabled={product.amount === product.selectedSize.stock}
            >
              <Plus />
            </button>
          </div>

          <div>
            <p className="body-02-—-urbanist—-14-pt-bold">
              {formatCurrency(product.price * product.amount)}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
