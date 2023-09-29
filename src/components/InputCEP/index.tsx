import { dynamicMaskCEP } from '@/utils/formatInput'
import { useState } from 'react'

import styles from './styles.module.css'

interface Props {
  error?: string
}

export function InputCEP({ error }: Props) {
  const [cep, setCep] = useState('')

  return (
    <div className={styles.wrapperInput}>
      <input
        type="text"
        onChange={({ target }) => setCep(dynamicMaskCEP(target.value))}
        value={cep}
        className={`${styles.field} body-02-—-urbanist-—-14-pt`}
        placeholder="00000 - 000"
        data-error={!!error}
        size={11}
      />
      <p className={`${styles.error} caption-—-urbanist-—-12-pt-pink`}>
        {error}
      </p>
    </div>
  )
}
