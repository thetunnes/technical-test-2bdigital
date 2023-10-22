import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductInCart } from '.'

describe('Product in Cart', () => {
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
})
