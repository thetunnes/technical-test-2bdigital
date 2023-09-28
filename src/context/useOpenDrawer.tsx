import { ReactNode, createContext, useContext, useState } from 'react'

interface OpenDrawerProps {
  isOpen: boolean
  onIsOpen: (b: boolean) => void
}

const OpenDrawer = createContext({} as OpenDrawerProps)

interface Props {
  children: ReactNode
}

export function OpenDrawerProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleOpen(b: boolean) {
    setIsOpen(b)
  }

  return (
    <OpenDrawer.Provider value={{ isOpen, onIsOpen: handleToggleOpen }}>
      {children}
    </OpenDrawer.Provider>
  )
}

export const useOpenDrawer = () => useContext(OpenDrawer)
