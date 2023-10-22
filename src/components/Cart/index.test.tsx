import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import { Cart } from '.'
import { OpenDrawerProvider } from '@/context/useOpenDrawer'
import { useStoreCart } from '@/store/cart'

const products = [
  {
    id: 'test-id',
    name: 'TEST',
  },
]

describe('Component Cart', () => {
  beforeEach(() => {
    useStoreCart.setState({ amount: products.length })
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
    // useStoreCart.setState({ amount: products.length })

    const btnToggleCart = screen.getByTestId('btnOpenCart')

    const { amount } = useStoreCart.getState()

    expect(Number(btnToggleCart.textContent)).toEqual(amount)
  })
})
