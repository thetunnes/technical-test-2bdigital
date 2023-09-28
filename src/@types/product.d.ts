
export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
  tags?: Array<{ type: 'new' | 'sale' | 'free shipping', label: string}>
  sizes: Array<{ id: string, label: string, stock: number}>
  maxParcels: number
}