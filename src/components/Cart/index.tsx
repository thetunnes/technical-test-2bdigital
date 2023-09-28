import { useState } from "react";
import { CartIcon } from "./Icon";
import styles from "./styles.module.css";
import { Drawer } from "../Drawer";
import { useStoreCart } from "@/store/cart";

export function Cart() {
  const amountProducts = useStoreCart((state) => state.amount)
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <button
        className={styles.buttonCart}
        onClick={() => setOpenDrawer(true)}
        aria-controls="slider"
      >
        <CartIcon className={styles.cartIcon} />
        <span className={styles.amountItems}>{amountProducts}</span>
      </button>
      <Drawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}
