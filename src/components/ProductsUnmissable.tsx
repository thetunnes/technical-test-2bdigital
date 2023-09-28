import TShirt from "@/assets/IMG-1.png";
import { CarouselProducts } from "./CarouselProducts";

export function ProductsUnmissable() {
  return (
    <CarouselProducts
      title="os mais vendidos"
      products={[
        {
          id: "c35d55c1-d7a2-446e-b6a1-fcb586707869",
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
          id: "7395b383-1a1a-491c-84af-1a024fb1fc25",
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
          id: "536d308f-d813-4c38-97d6-87896f6693f6",
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
          id: "6aba1e8e-b205-4164-a8b1-c4117b52293d",
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
