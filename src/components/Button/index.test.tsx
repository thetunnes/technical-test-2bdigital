import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '.'

describe('Button component', () => {
  it('should be render empty button with variant "empty" ', () => {
    render(<Button variant="empty" />)

    const btn = screen.getByRole('button')

    expect(btn.className).toContain('empty')
  })
  it('should be render filled button with variant "filled" ', () => {
    render(<Button variant="filled" />)

    const btn = screen.getByRole('button')

    expect(btn.className).toContain('filled')
  })
})
