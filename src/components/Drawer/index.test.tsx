import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Drawer } from '.'
import { useStoreCart } from '@/store/cart'

const product = {
  id: 'test-id',
  name: 'Test',
  amount: 3,
  imageUrl: '',
  maxParcels: 3,
  price: 1000,
  selectedSize: { id: 'size', label: 'M', stock: 4 },
}

describe('Drawer component', () => {
  it('should be open the Drawer when state is open', () => {
    const { getByRole } = render(<Drawer isOpen={true} onClose={() => {}} />)
    const drawer = getByRole('tab')
    expect(drawer.getAttribute('data-open')).toBeTruthy()
  })

  it('should be not open the Drawer when state is false', () => {
    const { getByRole } = render(<Drawer isOpen={false} onClose={() => {}} />)
    const drawer = getByRole('tab')
    expect(drawer.getAttribute('data-open')).toBe('false')
  })

  it('should be call fn close when wrapper Drawer is clicked', () => {
    const onCloseMock = vi.fn()
    render(<Drawer isOpen={true} onClose={onCloseMock} />)
    const WrapperDrawer = screen.getByRole('tab')
    fireEvent.click(WrapperDrawer)
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should be not call fn close when content Drawer is clicked', () => {
    const onCloseMock = vi.fn()
    render(<Drawer isOpen={true} onClose={onCloseMock} />)
    const contentDrawer = screen.getByRole('tabpanel')
    fireEvent.click(contentDrawer)
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  it('should be clicked to close the drawer when there is a product in the cart', () => {
    window.alert = vi.fn()
    useStoreCart.setState({
      products: [product],
    })
    const onCloseMock = vi.fn()
    render(<Drawer isOpen={true} onClose={onCloseMock} />)
    const submitButton = screen.getByText('finalizar compra')
    fireEvent.click(submitButton)
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should be close drawer on click button Close', () => {
    const onCloseMock = vi.fn(() => 0)
    render(<Drawer isOpen={true} onClose={onCloseMock} />)

    const btnClose = screen.getByLabelText('Close Drawer')
    fireEvent.click(btnClose)

    expect(onCloseMock).toHaveBeenCalled()
  })
})
