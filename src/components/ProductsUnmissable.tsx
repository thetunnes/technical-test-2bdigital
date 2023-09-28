import TShirt from "@/assets/IMG-1.png";
import { CarouselProducts } from "./CarouselProducts";

export function ProductsUnmissable() {
  return (
    <CarouselProducts
      title="os mais vendidos"
      products={[
        {
          id: "product-1",
          maxParcels: 2,
          imageUrl: TShirt,
          name: "T-shirt Unissex 2b Yourself Preta Estampa Grafismo",
          price: 60,
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
          imageUrl: TShirt,
          name: "T-shirt Unissex 2b Yourself Preta Estampa Grafismo",
          price: 152,
          sizes: [
            { id: "small", label: "P", stock: 2 },
            { id: "medium", label: "M", stock: 0 },
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
          id: "product-3",
          maxParcels: 2,
          imageUrl: TShirt,
          name: "T-shirt Unissex 2b Yourself Preta Estampa Grafismo",
          price: 60,
          sizes: [
            { id: "small", label: "P", stock: 0 },
            { id: "medium", label: "M", stock: 1 },
            { id: "large", label: "G", stock: 0 },
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
          id: "product-4",
          maxParcels: 3,
          imageUrl: TShirt,
          name: "T-shirt Unissex 2b Yourself Preta Estampa Grafismo",
          price: 549,
          sizes: [
            { id: "small", label: "P", stock: 0 },
            { id: "medium", label: "M", stock: 4 },
            { id: "large", label: "G", stock: 2 },
            { id: "big", label: "GG", stock: 0 },
            { id: "extra-large", label: "XG", stock: 4 },
          ],
          tags: [
            { type: "sale", label: "30%" },
            { type: "new", label: "Novo" },
            { type: "free shipping", label: "frete grátis" },
          ],
        },
      ]}
    />
  );
}
