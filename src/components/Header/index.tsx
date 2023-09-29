import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Cart } from '../Cart'
import { TopSlider } from './TopSlider'
import styles from './styles.module.css'
import Logo from '@/assets/logotipo.svg'

export function Header() {
  const { pathname } = useLocation()
  return (
    <>
      <TopSlider />
      <header className={styles.wrapper}>
        <Link to="/">
          <img src={Logo} alt="2bStore na cor rosa" />
        </Link>
        <nav className={styles.navbar}>
          <a className={styles.link}>masculino</a>
          <a className={styles.link}>feminino</a>
          <a className={styles.link}>plus size</a>
          <a className={styles.link}>juvenil</a>
          <a className={styles.link}>infantil</a>
          <a className={styles.link}>acessórios</a>
          <a data-active={pathname === '/'} className={styles.link}>
            ofertas
          </a>
        </nav>
        <Menu className={styles.menuMobile} />

        <Cart />
      </header>
    </>
  )
}
