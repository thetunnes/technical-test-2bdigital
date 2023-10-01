import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'

import styles from './styles.module.css'
import { useLocation } from 'react-router-dom'

export function MenuMobile({ menus }: { menus: string[] }) {
  const { pathname } = useLocation()
  const [isOpenTab, setIsOpenTab] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleCloseClick(event: MouseEvent) {
    console.log(event.target)
    if (
      wrapperRef?.current &&
      !wrapperRef?.current.contains(event.target as Node)
    ) {
      setIsOpenTab(false)
    }
  }

  useEffect(() => {
    setIsOpenTab(false)
  }, [pathname])

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseClick)
    return () => {
      document.removeEventListener('mousedown', handleCloseClick)
    }
  }, [])

  return (
    <div className={styles.menuMobile} ref={wrapperRef}>
      <Menu
        className={styles.menuMobile}
        onClick={() => setIsOpenTab((prev) => !prev)}
      />

      <nav className={styles.wrapperItems} data-open={isOpenTab}>
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
    </div>
  )
}
