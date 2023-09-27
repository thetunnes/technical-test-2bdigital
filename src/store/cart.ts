import { create } from "zustand";

export const useCart = create(() => ({
  amount: 0,
  product: []
}))