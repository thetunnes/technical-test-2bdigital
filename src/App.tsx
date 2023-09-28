import { Carousel } from "./components/Carousel";
import { CarouselTypeProducts } from "./components/CarouselTypeProducts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductsBestsSaller } from "./components/ProductsBestsSaller";
import { ProductsLaunch } from "./components/ProductsLaunch";
import { ProductsUnmissable } from "./components/ProductsUnmissable";


function App() {
  return (
    <>
      <Header />
      <Carousel />
      <ProductsLaunch />
      <ProductsBestsSaller />
      <CarouselTypeProducts />
      <ProductsUnmissable />
      <Footer />
    </>
  );
}

export default App;
