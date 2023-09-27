import { Button } from '../Button'
import styles from './styles.module.css'
import { X } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: Props) {

  return (
    <div data-open={isOpen} role="slider"  className={styles.overlay}>
      <div className={styles.wrapper}>
        <header>
          <h3 className="sub-01-—-urbanist-—-18-pt">Meu carrinho</h3>
          <button aria-label="Close Drawer">
          <X  strokeWidth={2.5} onClick={() => onClose()} aria-controls="slider" />
          </button>
        </header>

        <section className={styles.content}>

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