import { IProduct, Size } from '@/@types/product'

interface Product extends Omit<IProduct, 'sizes' | 'tag'> {
  selectedSize: Size
  amount: number
}

export function productIsOnSale(product: Product) {
  if (!Array.isArray(product.tags)) return null

  const indexTagSale = product.tags.findIndex(
    (tag) => tag.type === 'sale',
  ) as number

  if (indexTagSale < 0) {
    return null
  }

  const tagSale = product.tags[indexTagSale]

  return calcDiscount(tagSale.label, product.price)
}

export function calcDiscount(labelDiscount: string, productPrice: number) {
  const discount = Number(labelDiscount.slice(0, -1))
  return productPrice - productPrice * (discount / 100)
}
