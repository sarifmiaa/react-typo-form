import { render, screen } from '@testing-library/react'
import Button from '../../../../components/ui/Button'

test('Integration | Components | UI | Button', () => {
  render(<Button />)
  const buttonElement = screen.getByTestId('button')
  expect(buttonElement).toBeInTheDocument()
})
