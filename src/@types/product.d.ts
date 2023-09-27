
export interface IProduct {
  id: string
  name: string
  price: number
  tags: Array<{ type: 'new' | 'sale' | 'free shipping', label: string}>
  sizes: Array<{ id: string, label: string}>
  maxParcels: number
}