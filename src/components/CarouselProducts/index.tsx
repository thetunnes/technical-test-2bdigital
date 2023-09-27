import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Product } from "../Product";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IProduct } from "@/@types/product";

interface Props {
  products: Array<IProduct>;
  title: string;
}

export function CarouselProducts({ products, title }: Props) {
  return (
    <div className="wrapper">
      <h2 className="title">{title}</h2>
      <section>

      
      <div className="swiper-button new-swiper-button-next">
        <ArrowRight />
      </div>
      <div className="swiper-button new-swiper-button-prev">
        <ArrowLeft />
      </div>
      <Swiper
        navigation={{
          nextEl: '.new-swiper-button-next',
          prevEl: '.new-swiper-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        modules={[Navigation]}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      </section>
    </div>
  );
}
