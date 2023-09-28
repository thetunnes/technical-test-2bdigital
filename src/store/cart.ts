import { IProduct } from "@/@types/product";
import { create } from "zustand";

interface ProductCart extends IProduct {
  amount: number
}

interface CartState {
  products: Array<ProductCart>;
  amount: number;

  addToCart: (product: IProduct) => void;

  removeFromCart: (product: IProduct) => void;
}

export const useStoreCart = create<CartState>((set, get) => ({
  amount: 0,
  products: [],

  addToCart: (product) => {
    const { products, amount: prevAmount } = get()
    const prodIndex = products.findIndex(prod => prod.id === product.id)
    let amount = prevAmount
    if (prodIndex >= 0) {
      products[prodIndex].amount++;
    } else {
      products.push({ ...product, amount: 1 })
      amount += 1
    }

    console.log(products)
    set({
      products,
      amount
    });
  },

  removeFromCart: (product) => {
    set((state) => ({
      products: state.products.filter((prod) => prod !== product),
      amount: state.products.length - 1,
    }));
  },
}));
