import Bottons from "@/assets/IMG-12.png";
import Mug from "@/assets/IMG-13.png";
import TShirtPink from "@/assets/IMG-14.png";
import WaterBottle from "@/assets/IMG-15.png";
import { CarouselProducts } from "./CarouselProducts";



export function ProductsBestsSaller() {

  return (
    <CarouselProducts
    title="os mais vendidos"
    products={[
      {
        id: "product-1",
        maxParcels: 2,
        imageUrl: WaterBottle,
        name: "Garrafa 500ml Lets Drink Some Water",
        price: 60,
        sizes: [
          { id: "unique", label: "U", stock: 0 },

        ],
      },
      {
        id: "product-2",
        maxParcels: 3,
        imageUrl: TShirtPink,
        name: "T-shirt Unissex 2b Yourself Rosa",
        price: 152,
        sizes: [
          { id: "small", label: "P", stock: 0 },
          { id: "medium", label: "M", stock: 4 },
          { id: "large", label: "G", stock: 2 },
          { id: "big", label: "GG", stock: 4 },
          { id: "extra-large", label: "XG", stock: 4 },
        ],
        tags: [
          { type: "sale", label: "30%" },
        ],
      },
      {
        id: "product-3",
        maxParcels: 2,
        imageUrl: Mug,
        name: "Caneca 2bdigital",
        price: 60,
        sizes: [
          { id: "unique", label: "U", stock: 0 },
        ],
      },
      {
        id: "product-4",
        maxParcels: 1,
        imageUrl: Bottons,
        name: "Kit 4 Bottons 2b Waves",
        price: 549,
        sizes: [
          { id: "unique", label: "U", stock: 0 },

        ],
      },
    ]}
  />
  )
}