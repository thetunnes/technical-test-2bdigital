import { Button } from '@/components/Button'
import styles from './styles.module.css'
import { InputCEP } from '@/components/InputCEP'

export function PriceShipping() {
  return (
    <div className={styles.priceShipping}>
      <h6 className={styles.title}>Calcular frete e prazo</h6>

      <div className={styles.zipContainer}>
        <form className={styles.formZip}>
          <InputCEP />
          <Button variant="empty">calcular</Button>
        </form>
        <p>Não sei o CEP</p>
      </div>
    </div>
  )
}
