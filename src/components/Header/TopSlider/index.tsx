import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './styles.module.css'

export function TopSlider() {
  return (
    <div className={styles.wrapper}>
      <ChevronLeft className={styles.arrow} />
      <p className={styles.text}>
        <b className={styles.boldPink}>Frete Grátis</b> para compras a partir de
        R$199
      </p>
      <ChevronRight className={styles.arrow} />
    </div>
  )
}
