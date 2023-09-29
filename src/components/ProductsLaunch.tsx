import TShirt from '@/assets/IMG-1@2x.png'
import Ecobag from '@/assets/IMG-8@2x.png'
import Moletom from '@/assets/IMG-22@2x.png'
import Sneaker from '@/assets/IMG-21@2x.png'

import { CarouselProducts } from './CarouselProducts'

export function ProductsLaunch() {
  return (
    <CarouselProducts
      title="lançamentos"
      products={[
        {
          id: 'eacfa541-8e92-43a1-81d7-a42d3805d1ad',
          maxParcels: 5,
          imageUrl: TShirt,
          name: 'T-shirt Unissex 2b Yourself Preta Estampa Grafismo',
          price: 152,
          sizes: [
            { id: 'small', label: 'P', stock: 0 },
            { id: 'medium', label: 'M', stock: 4 },
            { id: 'large', label: 'G', stock: 2 },
            { id: 'big', label: 'GG', stock: 4 },
            { id: 'extra-large', label: 'XG', stock: 4 },
          ],
          tags: [
            { type: 'sale', label: '30%' },
            { type: 'new', label: 'Novo' },
            { type: 'free shipping', label: 'frete grátis' },
          ],
          description: {
            text: `T-shirt Unissex 2b Yourself Preta Estampa Grafismo Manga Curta. Desenvolvida em meia malha de algodão super cotton, a peça conta com a modelagem comfort, sendo um pouco mais ampla que a tradicional, além disso, na parte frontal exibe estampa localizada. As Camisetas 2b trazem o conforto extremo, ela é mais soltinha do corpo com corte reto e garante um caimento diferenciado ao vestir. Investir nessa camiseta é investir no essencial, no básico, e no atemporal.`,
            color: 'Preta',
            weight: '0.268',
            composition: '100% Algodao',
            manufacturer: 'Hering',
          },
        },
        {
          id: '0be88481-14e5-4943-ac75-a24a255ec95e',
          maxParcels: 3,
          imageUrl: Moletom,
          name: 'Blusa Moleton com Capuz Azul Escuro Bordado 2bdigital',
          price: 199,
          sizes: [
            { id: 'small', label: 'P', stock: 0 },
            { id: 'medium', label: 'M', stock: 4 },
            { id: 'large', label: 'G', stock: 2 },
            { id: 'big', label: 'GG', stock: 4 },
            { id: 'extra-large', label: 'XG', stock: 4 },
          ],
          tags: [{ type: 'free shipping', label: 'frete grátis' }],
        },
        {
          id: 'e5d5d584-0b97-4c5d-b99f-5f4501ae6327',
          maxParcels: 2,
          imageUrl: Ecobag,
          name: 'EcoBag E-commerce e Business Performance by TOTVS Ibirapuera',
          price: 69,
          sizes: [
            { id: 'small', label: 'P', stock: 0 },
            { id: 'medium', label: 'M', stock: 4 },
            { id: 'large', label: 'G', stock: 2 },
            { id: 'big', label: 'GG', stock: 4 },
            { id: 'extra-large', label: 'XG', stock: 4 },
          ],
        },
        {
          id: '4cee16d8-45a5-423d-9dca-3d841816f7a8',
          maxParcels: 1,
          imageUrl: Sneaker,
          name: 'Tênis Vans Edição Limitada 2bdigital Rosa/Rosa',
          price: 549,
          sizes: [
            { id: '34', label: '34', stock: 4 },
            { id: '36', label: '36', stock: 2 },
            { id: '38', label: '38', stock: 4 },
            { id: '40', label: '40', stock: 4 },
            { id: '42', label: '42', stock: 0 },
          ],
          tags: [
            { type: 'sale', label: '30%' },
            { type: 'new', label: 'Novo' },
            { type: 'free shipping', label: 'frete grátis' },
          ],
        },
      ]}
    />
  )
}
