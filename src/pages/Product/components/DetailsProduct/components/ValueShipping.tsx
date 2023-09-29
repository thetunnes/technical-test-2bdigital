import { formatCurrency } from '@/libs/formatCurrency'
import styles from './styles.module.css'

interface Props {
  name: string
  rangeDate: string
  price: number
}

export function ValueShipping({ name, rangeDate, price }: Props) {
  return (
    <div className={styles.boxShipping}>
      <div>
        <p className="body-02-—-urbanist-—-14-pt">{name}</p>
        <span className="caption-—-urbanist-—-12-pt-blue">{rangeDate}</span>
      </div>

      <p className="body-02-—-urbanist—-14-pt-bold">{formatCurrency(price)}</p>
    </div>
  )
}
