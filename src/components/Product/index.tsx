import { Button } from "../Button";
import { IProduct } from "@/@types/product";
import { formatCurrency } from "@/libs/formatCurrency";

import styles from "./styles.module.css";
import { useState } from "react";

interface Props {
  product: IProduct;
}

export function Product({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<{
    id: string;
    label: string;
    stock: number;
} | undefined>();

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
          <label className={styles.label} data-type={tag.type}>
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

        <Button>comprar</Button>
      </footer>
    </div>
  );
}
