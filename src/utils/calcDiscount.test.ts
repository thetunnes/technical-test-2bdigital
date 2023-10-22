import { describe, expect, it } from 'vitest'
import { calcDiscount, productIsOnSale } from './calcDiscount'

describe('Calculate discount product', () => {
  it('should be calculate the discount applied to the product', () => {
    const discount = '15%'
    const productPrice = 170
    const result = 144.5

    const priceWithDiscount = calcDiscount(discount, productPrice)

    expect(priceWithDiscount).toEqual(result)
  })

  it('should be able discount price when product is on sale', () => {
    const priceWithDiscount = productIsOnSale({
      amount: 3,
      id: 'test-id',
      imageUrl: '',
      maxParcels: 3,
      name: 'Test product',
      price: 100,
      selectedSize: { id: 'size-id', label: 'size', stock: 3 },
      tags: [{ label: '20%', type: 'sale' }],
    })

    const result = 80

    expect(priceWithDiscount).toEqual(result)
  })

  it('should not be apply discount when product not have tag sale', () => {
    const priceWithoutDiscount = productIsOnSale({
      amount: 3,
      id: 'test-id',
      imageUrl: '',
      maxParcels: 3,
      name: 'Test product',
      price: 100,
      selectedSize: { id: 'size-id', label: 'size', stock: 3 },
      tags: [{ label: 'frete grátis', type: 'free shipping' }],
    })

    expect(priceWithoutDiscount).toBeNull()
  })
})
