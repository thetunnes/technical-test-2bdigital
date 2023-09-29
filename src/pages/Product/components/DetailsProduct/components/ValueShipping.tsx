import { formatCurrency } from '@/utils/formatCurrency'
import styles from './styles.module.css'

interface Props {
  name: string
  rangeDate: string
  price?: number
}

export function ValueShipping({ name, rangeDate, price }: Props) {
  return (
    <div className={styles.boxShipping}>
      <div>
        <p className="body-02-—-urbanist-—-14-pt">{name}</p>
        <span className="caption-—-urbanist-—-12-pt-blue">{rangeDate}</span>
      </div>

      {price ? (
        <p className="body-02-—-urbanist—-14-pt-bold">
          {formatCurrency(price)}
        </p>
      ) : (
        <p className="body-02-—-urbanist—-14-pt-bold">Grátis</p>
      )}
    </div>
  )
}
