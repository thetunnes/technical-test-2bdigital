import { Carousel } from "@/components/Carousel";
import { CarouselTypeProducts } from "@/components/CarouselTypeProducts";
import { ProductsBestsSaller } from "@/components/ProductsBestsSaller";
import { ProductsLaunch } from "@/components/ProductsLaunch";


export default function Home() {
  return (
    <>
      <Carousel />
      <ProductsLaunch />
      <ProductsBestsSaller />
      <CarouselTypeProducts />
    </>
  );
}
