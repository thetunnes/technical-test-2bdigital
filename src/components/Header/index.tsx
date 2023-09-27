import { Cart } from "../Cart"
import { TopSlider } from "./TopSlider"
import styles from './styles.module.css'
import Logo from '@/assets/logotipo.svg'

export function Header() {

  return (
    <>
    <TopSlider />
    <header className={styles.wrapper}>
      <img src={Logo} alt="2bStore na cor rosa" />

      <nav className={styles.navbar}>
        <a data-active={true} className={styles.link}>masculino</a>
        <a className={styles.link}>feminino</a>
        <a className={styles.link}>plus size</a>
        <a className={styles.link}>juvenil</a>
        <a className={styles.link}>infantil</a>
        <a className={styles.link}>acessórios</a>
        <a className={styles.link}>ofertas</a>
      </nav>

      <Cart />
    </header>
    </>
  )
}