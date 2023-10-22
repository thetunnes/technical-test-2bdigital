import { beforeEach, describe, expect, it } from 'vitest'
import { ProductCart, ProductToAdd, useStoreCart } from './cart'
import { act, renderHook } from '@testing-library/react'

const products = [
  {
    id: 'test-id2',
    name: 'Test Product',
    imageUrl: '',
    maxParcels: 4,
    price: 100,
    selectedSize: { id: 'test-size', label: 'Size', stock: 3 },
    amount: 2,
  },
  {
    id: 'test-id',
    name: 'Test Product',
    imageUrl: '',
    maxParcels: 4,
    price: 100,
    selectedSize: { id: 'test-size', label: 'Size', stock: 3 },
    amount: 1,
  },
] as ProductCart[]

const initialState = useStoreCart.getState()
describe('Cart store', () => {
  beforeEach(() => {
    useStoreCart.setState(initialState)
  })
  it('should be able add product in list Cart', () => {
    const product = {
      id: 'test-id',
      name: 'Test Product',
      selectedSize: { id: 'test-size', label: 'Size', stock: 3 },
    } as ProductToAdd

    const { result } = renderHook(() => useStoreCart())

    act(() => result.current.addToCart(product))

    expect(result.current.amount).toBe(1)
    expect(result.current.products.length).toBe(1)
  })

  it('add the same product in cart should be only change amount by product', () => {
    useStoreCart.setState({ amount: products.length, products })
    const product = {
      id: 'test-id2',
      name: 'Test Product',
      selectedSize: { id: 'test-size', label: 'Size', stock: 3 },
    } as ProductToAdd
    const { result } = renderHook(() => useStoreCart())

    act(() => result.current.addToCart(product))

    expect(result.current.products[0].amount).toBe(3)
  })

  it('should be to decrease amount a product when exist in Cart', () => {
    useStoreCart.setState({ amount: products.length, products })
    const { result } = renderHook(() => useStoreCart())

    act(() => result.current.removeUnitProduct('test-id2', 'test-size'))

    expect(result.current.products[0].amount).toEqual(2)
  })

  it('should be remove a product from Cart', () => {
    useStoreCart.setState({ amount: products.length, products })

    const { result } = renderHook(() => useStoreCart())
    act(() => result.current.removeFromCart('test-id2', 'test-size'))

    expect(result.current.products.length).toEqual(1)
  })

  it('should be able save a product selected to open in new page', () => {
    // useStoreCart.setState({ amount: products.length, products })
    const product = {
      id: 'test-id',
      imageUrl: '',
      name: 'Test Product',
      sizes: [],
      price: 100,
      maxParcels: 3,
    }
    const { result } = renderHook(() => useStoreCart())

    act(() => result.current.addProductInPage(product))

    expect(result.current.productInPage).toBeTruthy()
  })
})
