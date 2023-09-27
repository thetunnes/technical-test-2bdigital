import Moletom from "@/assets/IMG-11.png";
import { Button } from "../Button";
import styles from "./styles.module.css";
import { IProduct } from "@/@types/product";
import { formatCurrency } from "@/libs/formatCurrency";

interface Props {
  product: IProduct;
}

export function Product({ product }: Props) {
  const indexTagSale = product?.tags.findIndex((tag) => tag.type === "sale");
  const tagSale = product?.tags[indexTagSale] ?? null;
  const discountPrice = tagSale
    ? product.price * (Number(tagSale.label.slice(0, -1)) / 100)
    : null;

  return (
    <div className={styles.product}>
      <div className={styles.labels}>
        {product?.tags.map((tag) => (
          <label className={styles.label} data-type={tag.type}>
            {tag.label}
          </label>
        ))}
      </div>

      <div className={styles.content}>
        <img src={Moletom} className={styles.picture} />
        <nav className={styles.sizes}>
          {product?.sizes.map((size) => (
            <button className={styles.size} data-active={true}>
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

              <p className={styles.finalPrice}>
                {formatCurrency(product.price)}
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
