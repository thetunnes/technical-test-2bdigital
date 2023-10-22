import { expect, it } from 'vitest'
import { calcDiscount } from './calcDiscount'

it('should be calculate the discount applied to the product', () => {
  const discount = '15%'
  const productPrice = 170
  const result = 144.5

  const priceWithDiscount = calcDiscount(discount, productPrice)

  expect(priceWithDiscount).toEqual(result)
})
