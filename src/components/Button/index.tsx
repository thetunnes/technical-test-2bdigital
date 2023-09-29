import { ComponentProps } from 'react'
import styles from './styles.module.css'

interface Props extends ComponentProps<'button'> {
  variant?: 'empty' | 'filled'
}

export function Button({ variant = 'filled', children, ...props }: Props) {
  return (
    <button
      type="button"
      className={variant === 'empty' ? styles.empty : styles.filled}
      {...props}
    >
      {children}
    </button>
  )
}
