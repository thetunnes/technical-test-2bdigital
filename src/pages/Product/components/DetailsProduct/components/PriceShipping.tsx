import styles from './styles.module.css'

export function PriceShipping() {
  return (
    <div className={styles.priceShipping}>
      <h6 className={styles.title}>Calcular frete e prazo</h6>

      <form className={styles.formZip}>
        <input type="text" />
      </form>
    </div>
  )
}
