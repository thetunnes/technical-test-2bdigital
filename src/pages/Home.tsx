import { Carousel } from '@/components/Carousel'
import { CarouselTypeProducts } from '@/components/CarouselTypeProducts'
import { ProductsBestsSaller } from '@/components/ProductsBestsSaller'
import { ProductsLaunch } from '@/components/ProductsLaunch'
import { ProductsUnmissable } from '@/components/ProductsUnmissable'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = '2bstore | Uma loja 2bdigital'
  }, [])

  return (
    <>
      <Carousel />
      <ProductsLaunch />
      <ProductsBestsSaller />
      <CarouselTypeProducts />
      <ProductsUnmissable />
    </>
  )
}
