import { Carousel } from "./components/Carousel"
import { CarouselProducts } from "./components/CarouselProducts"
import { Header } from "./components/Header"


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <CarouselProducts title="lançamentos" products={[]} />
    </>
  )
}

export default App
