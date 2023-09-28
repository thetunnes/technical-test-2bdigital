import { Button } from "../Button";
import { IProduct, Size } from "@/@types/product";
import { formatCurrency } from "@/libs/formatCurrency";

import styles from "./styles.module.css";
import { useState } from "react";
import { useStoreCart } from "@/store/cart";
import { useNavigate } from "react-router-dom";
import { useOpenDrawer } from "@/context/useOpenDrawer";

interface Props {
  product: IProduct;
}

export function Product({ product }: Props) {
  const navigate = useNavigate()
  const { onIsOpen } = useOpenDrawer()
  const { addToCart, addProductInPage } = useStoreCart(({ addProductInPage, addToCart }) => ({ addProductInPage, addToCart }))
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();

  function handleSelectProduct() {

    if (!selectedSize) {
      addProductInPage(product)
      navigate(`/${product.id}`)
      return
    }

    addToCart({
      id: product.id,
      imageUrl: product.imageUrl,
      maxParcels: product.maxParcels,
      name: product.name,
      price: product.price,
      selectedSize
    })
    onIsOpen(true)
  }

  const indexTagSale = product?.tags?.findIndex(
    (tag) => tag.type === "sale"
  ) as number;
  const tagSale = product?.tags?.[indexTagSale] ?? null;

  const discountPrice = tagSale
    ? product.price - product.price * (Number(tagSale.label.slice(0, -1)) / 100)
    : null;

  return (
    <div className={styles.product}>
      <div className={styles.labels}>
        {product?.tags?.map((tag) => (
          <label className={styles.label} data-type={tag.type} key={tag.label}>
            {tag.label}
          </label>
        ))}
      </div>

      <div className={styles.content}>
        <img src={product.imageUrl} className={styles.picture} />
        <nav className={styles.sizes}>
          {product?.sizes.map((size) => (
            <button
              className={styles.size}
              onClick={() => setSelectedSize(size)}
              data-active={selectedSize === size}
              disabled={!size.stock}
              key={size.id}
            >
              {size.label}
            </button>
          ))}
        </nav>
      </div>

      <p className={styles.name}>{product.name}</p>
      <footer className={styles.footer}>
        {discountPrice ? (
          <>
            <div className={styles.price}>
              <span className={styles.fullPrice}>
                {formatCurrency(product.price)}
              </span>
              <p className={styles.finalPrice}>
                {formatCurrency(discountPrice)}
              </p>
            </div>

            <span className={styles.parcels}>
              Em até {product.maxParcels}x de{" "}
              <strong>
                {formatCurrency(discountPrice / product.maxParcels)}
              </strong>
            </span>
          </>
        ) : (
          <>
            <div className={styles.price}>
              <p className={styles.finalPrice}>
                {formatCurrency(product.price)}
              </p>
            </div>

            <span className={styles.parcels}>
              Em até {product.maxParcels}x de{" "}
              <strong>
                {formatCurrency(product.price / product.maxParcels)}
              </strong>
            </span>
          </>
        )}

        <Button onClick={() => handleSelectProduct()}>comprar</Button>
      </footer>
    </div>
  );
}
