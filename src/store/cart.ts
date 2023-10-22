import { IProduct, Size } from '@/@types/product'
import { calcDiscount } from '@/utils/calcDiscount'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ProductToAdd extends Omit<IProduct, 'sizes' | 'tag'> {
  selectedSize: Size
}

export interface ProductCart extends ProductToAdd {
  amount: number
}

interface CartState {
  products: Array<ProductCart>
  amount: number

  totalPrice: () => number

  addToCart: (product: ProductToAdd) => void

  removeUnitProduct: (productId: string, sizeId: string) => void

  removeFromCart: (productId: string, sizeId: string) => void

  productInPage: {
    current: IProduct | null
    prev?: IProduct
  }

  addProductInPage: (product: IProduct) => void
  makePurchase: () => void
}

export const useStoreCart = create(
  persist<CartState>(
    (set, get) => ({
      amount: 0,
      products: [],

      totalPrice: () => {
        const { products } = get()

        return products.reduce((prevPay, product) => {
          const indexTagSale = product?.tags?.findIndex(
            (tag) => tag.type === 'sale',
          ) as number
          const tagSale = product?.tags?.[indexTagSale] ?? null
          const price = tagSale
            ? calcDiscount(tagSale.label, product.price)
            : product.price

          prevPay += price * product.amount
          return prevPay
        }, 0)
      },

      addToCart: (product) => {
        const { products, amount: prevAmount } = get()
        const prodIndex = products.findIndex(
          (prod) =>
            prod.id === product.id &&
            prod.selectedSize.id === product.selectedSize.id,
        )
        let amount = prevAmount
        if (prodIndex >= 0) {
          if (
            products[prodIndex].amount !==
            products[prodIndex].selectedSize.stock
          )
            products[prodIndex].amount++
        } else {
          products.push({ ...product, amount: 1 })
          amount += 1
        }

        set({
          products,
          amount,
        })
      },

      removeUnitProduct: (productId: string, sizeId: string) => {
        const { products } = get()
        const indexProduct = products.findIndex(
          (product) =>
            product.id === productId && product.selectedSize.id === sizeId,
        )

        if (indexProduct >= 0 && products[indexProduct].amount > 1) {
          products[indexProduct].amount -= 1
        }

        set({
          products,
        })
      },

      removeFromCart: (productId, sizeId) => {
        const { products, amount } = get()

        const productIndex = products.findIndex(
          (prod) => prod.id === productId && prod.selectedSize.id === sizeId,
        )

        if (productIndex >= 0) {
          products.splice(productIndex, 1)
        }
        set({
          products,
          amount: amount - 1,
        })
      },

      productInPage: {
        current: null,
      },

      addProductInPage: (product) => {
        const { productInPage } = get()
        set({
          productInPage: {
            current: product,
            prev: productInPage?.current ?? undefined,
          },
        })
      },

      makePurchase: () => {
        set({
          products: [],
          amount: 0,
        })
      },
    }),
    {
      name: 'cart-products',
    },
  ),
)
