import { useState } from "react";
import { CartIcon } from "./Icon";
import styles from "./styles.module.css";
import { Drawer } from "../Drawer";

export function Cart() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <button
        className={styles.buttonCart}
        onClick={() => setOpenDrawer(true)}
        aria-controls="slider"
      >
        <CartIcon className={styles.cartIcon} />
        <span className={styles.amountItems}>0</span>
      </button>
      <Drawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}
