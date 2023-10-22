import { CartIcon } from './components/Icon'
import styles from './styles.module.css'
import { Drawer } from '../Drawer'
import { useStoreCart } from '@/store/cart'
import { useOpenDrawer } from '@/context/useOpenDrawer'

export function Cart() {
  const amountProducts = useStoreCart((state) => state.amount)
  const { isOpen, onIsOpen } = useOpenDrawer()

  return (
    <>
      <button
        className={styles.buttonCart}
        onClick={() => onIsOpen(true)}
        aria-controls="slider"
        data-testid="btnOpenCart"
      >
        <CartIcon className={styles.cartIcon} />
        <span className={styles.amountItems}>{amountProducts}</span>
      </button>
      <Drawer isOpen={isOpen} onClose={() => onIsOpen(false)} />
    </>
  )
}
