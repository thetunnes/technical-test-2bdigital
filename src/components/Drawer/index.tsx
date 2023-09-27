import { MouseEvent, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from '../Button'
import styles from './styles.module.css'
import { ProductInCart } from '../Cart/ProductInCart'

interface Props {
  isOpen: boolean
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: Props) {

  const overlayRef = useRef(null);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === overlayRef.current) {
      onClose();
    }
  }

  function handleDrawerClick(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  return (
    <div data-open={isOpen} role="slider" ref={overlayRef} onClick={handleOverlayClick} className={styles.overlay}>
      <div className={styles.wrapper} onClick={handleDrawerClick}>
        <header className={styles.title}>
          <h3 className="sub-01-—-urbanist-—-18-pt">Meu carrinho</h3>
          <button aria-label="Close Drawer">
          <X  strokeWidth={2.5} onClick={() => onClose()} aria-controls="slider" />
          </button>
        </header>

        <section className={styles.content}>
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </section>

        <footer className={styles.footer}>
          <div className={`${styles.subtotalWrapper} body-02-—-urbanist-—-14-pt`}>
            <p className={styles.subtotal}>Subtotal</p>
            <p className={styles.totalPrice}>R$ 168,70</p>
          </div>

          <Button>finalizar compra</Button>
        </footer>
      </div>
    </div>
  )
}