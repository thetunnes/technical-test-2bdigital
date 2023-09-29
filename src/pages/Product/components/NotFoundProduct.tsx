import { Button } from '@/components/Button'
import { Frown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

export function NotFoundProduct() {
  const navigate = useNavigate()

  return (
    <section className={styles.wrapperNotFound}>
      <Frown />
      <p className="caption-—-urbanist-—-12-pt-blue-bold">
        Não conseguimos identificar o produto escolhido.
      </p>
      <Button onClick={() => navigate('/')}>Voltar</Button>
    </section>
  )
}
