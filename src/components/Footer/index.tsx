import styles from "./styles.module.css";
import Logo2bdigital from "@/assets/logotipo-2bigital.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos}>
        <strong>© 2022 AGÊNCIA 2B DIGITAL</strong>
        <div>
          <p>Avenida Ibirapuera, 2315 - Moema, São Paulo</p>
          <p>Loja fictícia desenvolvida para fins de estudos e testes</p>
        </div>
      </div>
      <img
        className={styles.logo}
        src={Logo2bdigital}
        alt="2b digital, 2b escrito em rosa e digital em azul escuro."
      />
    </footer>
  );
}
