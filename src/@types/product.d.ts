export interface Size {
  id: string
  label: string
  stock: number
}

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
  tags?: Array<{ type: 'new' | 'sale' | 'free shipping'; label: string }>
  sizes: Array<Size>
  maxParcels: number
  images?: Array<string>
  description?:
    | string
    | {
        text?: string
        color?: string
        weight?: string
        composition?: string
        manufacturer?: string
      }
}
