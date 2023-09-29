import { Size as ISize } from '@/@types/product'
import styles from './styles.module.css'

interface Props {
  onSelectedSize: (size: ISize) => void
  size: ISize
  selectedSize: ISize | undefined
}

export function Size({ onSelectedSize, size, selectedSize }: Props) {
  return (
    <button
      className={styles.size}
      onClick={() => onSelectedSize(size)}
      data-active={selectedSize === size}
      disabled={!size.stock}
      key={size.id}
    >
      {size.label}
    </button>
  )
}
