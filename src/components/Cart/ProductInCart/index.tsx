import { Minus, Plus, Trash2 } from "lucide-react";
import styles from "./styles.module.css";
import { useRef } from "react";
import TShirt from "@/assets/IMG-1.png";

export function ProductInCart() {
  const amountRef = useRef<HTMLInputElement>(null);

  function addUp() {
    if (amountRef?.current) {
      const actually = amountRef.current.value;
      const numberActually = Number(actually);
      const novo = numberActually - -1; //Evitando Concatenacoes
      amountRef.current.value = novo.toString();
    }
  }

  function subtract() {
    if (amountRef?.current) {
      const actually = amountRef.current.value;
      const numberActually = Number(actually);
      if (numberActually > 1) {
        //evita números negativos
        const novo = numberActually - 1;
        amountRef.current.value = novo.toString();
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={TShirt} />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.titleProduct}>
            <h4>T-shirt Unissex 2b Yourself Preta Estampa Grafismo</h4>
            <span className="caption-—-urbanist-—-12-pt-blue">Tamanho: 44</span>
          </div>
          <button className={styles.removeItem}>
            <Trash2 strokeWidth={1} />
          </button>
        </header>
        <footer className={styles.footer}>
          <div className={styles.amountItems}>
            <button onClick={subtract}>
              <Minus />
            </button>
            <input type="number" ref={amountRef} disabled />
            <button onClick={addUp}>
              <Plus />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
