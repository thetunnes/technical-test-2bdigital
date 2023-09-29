import { dynamicMaskCEP } from '@/utils/formatInput'
import { ComponentProps } from 'react'

import styles from './styles.module.css'

interface Props extends ComponentProps<'input'> {
  error?: string
}

export function InputCEP({ error, ...props }: Props) {
  return (
    <div className={styles.wrapperInput}>
      <input
        {...props}
        type="text"
        onChange={(e) => {
          e.target.value = dynamicMaskCEP(e.target.value)

          return props.onChange ? props.onChange(e) : undefined
        }}
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
