import { Routes, Route } from 'react-router-dom'
import { BaseLayout } from './BaseLayout'
import Home from './pages/Home'
import ProductPage from './pages/Product'

export function RoutesRoot() {

  return (
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}