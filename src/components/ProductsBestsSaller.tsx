import Bottons from '@/assets/Bottons@2x.png'
import Mug from '@/assets/Mug@2x.png'
import TShirt from '@/assets/TShirt@2x.png'
import TShirtPink from '@/assets/TShirt-Pink@2x.png'
import WaterBottle from '@/assets/Water-Bottle@2x.png'
import { CarouselProducts } from './CarouselProducts'

export function ProductsBestsSaller() {
  return (
    <CarouselProducts
      title="os mais vendidos"
      products={[
        {
          id: '00c6e0db-cfa2-48d8-bf57-fd4b7bb53b0b',
          maxParcels: 2,
          imageUrl: WaterBottle,
          name: 'Garrafa 500ml Lets Drink Some Water',
          price: 60,
          sizes: [{ id: 'unique', label: 'U', stock: 0 }],
        },
        {
          id: 'e488ddd9-4f95-4cb1-911f-e2273a17ae39',
          maxParcels: 3,
          imageUrl: TShirtPink,
          name: 'T-shirt Unissex 2b Yourself Rosa',
          price: 152,
          sizes: [
            { id: 'small', label: 'P', stock: 0 },
            { id: 'medium', label: 'M', stock: 4 },
            { id: 'large', label: 'G', stock: 2 },
            { id: 'big', label: 'GG', stock: 4 },
            { id: 'extra-large', label: 'XG', stock: 4 },
          ],
          tags: [{ type: 'sale', label: '30%' }],
          description: {
            text: `T-shirt Unissex 2b Yourself Rosa Estampa Grafismo Manga Curta. Desenvolvida em meia malha de algodão super cotton, a peça conta com a modelagem comfort, sendo um pouco mais ampla que a tradicional, além disso, na parte frontal exibe estampa localizada. As Camisetas 2b trazem o conforto extremo, ela é mais soltinha do corpo com corte reto e garante um caimento diferenciado ao vestir. Investir nessa camiseta é investir no essencial, no básico, e no atemporal.`,
            color: 'Rosa',
            weight: '0.268',
            composition: '100% Algodao',
            manufacturer: 'Hering',
          },
        },
        {
          id: 'c328f874-efa1-4066-9f4f-6ccd5fbfeae8',
          maxParcels: 2,
          imageUrl: Mug,
          name: 'Caneca 2bdigital',
          price: 60,
          sizes: [{ id: 'unique', label: 'U', stock: 0 }],
        },
        {
          id: 'f827be66-8814-4256-aaa8-6907b3c4b652',
          maxParcels: 1,
          imageUrl: Bottons,
          name: 'Kit 4 Bottons 2b Waves',
          price: 15,
          sizes: [{ id: 'unique', label: 'U', stock: 0 }],
        },
        {
          id: '347d0b37-dfec-4ac9-a768-d43eabcab2a3',
          maxParcels: 1,
          imageUrl: TShirt,
          name: 'T-shirt Unissex 2b Yourself',
          price: 152,
          sizes: [
            { id: 'small', label: 'P', stock: 2 },
            { id: 'medium', label: 'M', stock: 1 },
            { id: 'large', label: 'G', stock: 2 },
            { id: 'big', label: 'GG', stock: 4 },
            { id: 'extra-large', label: 'XG', stock: 4 },
          ],
          tags: [{ type: 'sale', label: '30%' }],
        },
      ]}
    />
  )
}
