
export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
  tags?: Array<{ type: 'new' | 'sale' | 'free shipping', label: string}>
  sizes: Array<Size>
  maxParcels: number
}

export interface Size {
  id: string;
  label: string;
  stock: number;
}