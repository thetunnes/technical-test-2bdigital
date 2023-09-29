export function calcDiscount(labelDiscount: string, productPrice: number) {
  const discount = Number(labelDiscount.slice(0, -1))
  return productPrice - productPrice * (discount / 100)
}
