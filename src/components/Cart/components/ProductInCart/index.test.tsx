import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ProductInCart } from '.'
import { ProductCart, useStoreCart } from '@/store/cart'
const product = {
  id: 'product-id',
  imageUrl: '',
  maxParcels: 3,
  name: 'Product Test',
  price: 110,
  selectedSize: { id: 'size-id', label: 'Size', stock: 3 },
  amount: 1,
} as ProductCart

describe('Product in Cart', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useStoreCart())

    act(() => (result.current.products = [product]))
  })
  it('should be render details of product', () => {
    render(
      <ProductInCart
        product={{
          name: 'Test',
          amount: 2,
          id: 'test-id',
          imageUrl: '',
          maxParcels: 3,
          price: 1000,
          selectedSize: { id: 'size-test', label: 'M', stock: 3 },
        }}
      />,
    )

    const nameProduct = screen.getByText('Test')

    expect(nameProduct.textContent).toBeTruthy()
  })

  it('should be able add product amount', () => {
    const { result } = renderHook(() => useStoreCart())
    const product = result.current.products[0]

    render(<ProductInCart product={product} />)
    const btnPlus = screen.getByTestId('addProduct')

    fireEvent.click(btnPlus)
    // act(() => result.current.addToCart(product))
    expect(product.amount).toEqual(2)
  })

  it('should be to decrease amount product', () => {
    const { result } = renderHook(() => useStoreCart())
    const newProduct = {
      id: 'product-id1',
      imageUrl: '',
      maxParcels: 3,
      name: 'Product Test',
      price: 110,
      selectedSize: { id: 'size-id', label: 'Size', stock: 3 },
    }
    act(() => result.current.addToCart(newProduct))
    act(() => result.current.addToCart(newProduct))
    act(() => result.current.addToCart(newProduct))

    const product = result.current.products[result.current.products.length - 1]

    render(<ProductInCart product={product} />)

    const btnMinus = screen.getByTestId('decreaseProduct')
    // Twice remove an product
    fireEvent.click(btnMinus)
    act(() =>
      result.current.removeUnitProduct(product.id, product.selectedSize.id),
    )

    expect(product.amount).toBe(1)
  })
})
