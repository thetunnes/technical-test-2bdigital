import TShirt from "@/assets/IMG-1.png";
import Ecobag from "@/assets/IMG-8.png";
import Moletom from "@/assets/IMG-22.png";
import Sneaker from "@/assets/IMG-21.png";

import { CarouselProducts } from "./CarouselProducts";

export function ProductsLaunch() {

  return (
    <CarouselProducts
    title="lançamentos"
    products={[
      {
        id: "product-1",
        maxParcels: 5,
        imageUrl: TShirt,
        name: "T-shirt Unissex 2b Yourself Preta Estampa Grafismo",
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
          { type: "new", label: "Novo" },
          { type: "free shipping", label: "frete grátis" },
        ],
      },
      {
        id: "product-2",
        maxParcels: 3,
        imageUrl: Moletom,
        name: "Blusa Moleton com Capuz Azul Escuro Bordado 2bdigital",
        price: 199,
        sizes: [
          { id: "small", label: "P", stock: 0 },
          { id: "medium", label: "M", stock: 4 },
          { id: "large", label: "G", stock: 2 },
          { id: "big", label: "GG", stock: 4 },
          { id: "extra-large", label: "XG", stock: 4 },
        ],
        tags: [
          { type: "free shipping", label: "frete grátis" },
        ],
      },
      {
        id: "product-3",
        maxParcels: 2,
        imageUrl: Ecobag,
        name: "EcoBag E-commerce e Business Performance by TOTVS Ibirapuera",
        price: 69,
        sizes: [
          { id: "small", label: "P", stock: 0 },
          { id: "medium", label: "M", stock: 4 },
          { id: "large", label: "G", stock: 2 },
          { id: "big", label: "GG", stock: 4 },
          { id: "extra-large", label: "XG", stock: 4 },
        ],
      },
      {
        id: "product-4",
        maxParcels: 1,
        imageUrl: Sneaker,
        name: "Tênis Vans Edição Limitada 2bdigital Rosa/Rosa",
        price: 549,
        sizes: [
          { id: "medium", label: "34", stock: 4 },
          { id: "large", label: "36", stock: 2 },
          { id: "big", label: "38", stock: 4 },
          { id: "extra-large", label: "40", stock: 4 },
          { id: "small", label: "42", stock: 0 },
        ],
        tags: [
          { type: "sale", label: "30%" },
          { type: "new", label: "Novo" },
          { type: "free shipping", label: "frete grátis" },
        ],
      },
    ]}
  />
  )
}