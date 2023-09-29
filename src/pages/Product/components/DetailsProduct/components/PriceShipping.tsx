import { Button } from '@/components/Button'
import styles from './styles.module.css'
import { InputCEP } from '@/components/InputCEP'
import { FormEvent, useState } from 'react'

interface Props {
  onShowShipping: (b: boolean) => void
}

export function PriceShipping({ onShowShipping }: Props) {
  const [cep, setCep] = useState('')
  const [error, setError] = useState('')

  function handleCalcShipping(e: FormEvent) {
    e.preventDefault()
    if (cep.length < 11) {
      setError('CEP inválido')
      onShowShipping(false)
    } else {
      onShowShipping(true)
    }
  }

  return (
    <div className={styles.priceShipping}>
      <h6 className={styles.title}>Calcular frete e prazo</h6>

      <div className={styles.zipContainer}>
        <form className={styles.formZip} onSubmit={handleCalcShipping}>
          <InputCEP
            onChange={({ target }) => {
              setCep(target.value)
              setError('')
            }}
            error={error}
          />
          <Button variant="empty" type="submit">
            calcular
          </Button>
        </form>
        <p>Não sei o CEP</p>
      </div>
    </div>
  )
}
