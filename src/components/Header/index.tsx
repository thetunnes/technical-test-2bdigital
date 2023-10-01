import { Link, useLocation } from 'react-router-dom'
import { Cart } from '../Cart'
import { TopSlider } from './components/TopSlider'
import styles from './styles.module.css'
import Logo from '@/assets/logotipo.svg'
import { MenuMobile } from './components/MenuMobile'

const menus = [
  'masculino',
  'feminino',
  'plus size',
  'juvenil',
  'acessórios',
  'ofertas',
]

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
          {menus.map((menu) => (
            <a
              className={styles.link}
              key={menu}
              data-active={
                (pathname === '/' && menu.includes('ofertas')) ||
                pathname.includes(menu)
              }
            >
              {menu}
            </a>
          ))}
        </nav>

        <MenuMobile menus={menus} />

        <Cart />
      </header>
    </>
  )
}
