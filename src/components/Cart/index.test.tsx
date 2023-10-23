import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import { Cart } from '.'
import { OpenDrawerProvider } from '@/context/useOpenDrawer'
import { ProductCart, useStoreCart } from '@/store/cart'

const products = [
  {
    id: 'test-id',
    name: 'TEST',
    amount: 1,
    imageUrl: '',
    maxParcels: 3,
    price: 100,
    selectedSize: { id: 'size-id', label: 'M', stock: 3 },
  },
] as ProductCart[]

describe('Component Cart', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useStoreCart())

    act(() => {
      result.current.amount = products.length
      result.current.products = products
    })

    render(
      <OpenDrawerProvider>
        <Cart />
      </OpenDrawerProvider>,
    )
  })
  it('should be open when clicked in icon Cart', () => {
    const btnToggleCart = screen.getByTestId('btnOpenCart')

    fireEvent.click(btnToggleCart)

    const drawer = screen.getByRole('tab')
    expect(drawer.getAttribute('data-open')).toBeTruthy()
  })

  it('should be show amount products in Cart', () => {
    const { result } = renderHook(() => useStoreCart())
    const btnToggleCart = screen.getByTestId('btnOpenCart')

    const { amount } = result.current
    expect(Number(btnToggleCart.textContent)).toEqual(amount)
  })

  it('should pass a function to the Drawer to close it', () => {
    const btnCloseCart = screen.getByLabelText('Close Drawer')

    fireEvent.click(btnCloseCart)

    const drawer = screen.getByRole('tab')
    expect(drawer.getAttribute('data-open')).toBe('false')
  })
})
