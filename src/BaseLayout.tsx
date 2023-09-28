import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { ProductsUnmissable } from './components/ProductsUnmissable'
import { Footer } from './components/Footer'

export function BaseLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <ProductsUnmissable />
      <Footer />
    </>
  )
}
