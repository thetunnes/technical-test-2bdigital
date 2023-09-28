import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { productId } = useParams()

  return (
    <>
    
    <p>Página do produto aqui {productId}</p>
    </>
  )
}