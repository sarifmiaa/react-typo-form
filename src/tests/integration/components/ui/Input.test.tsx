import { render, screen } from '@testing-library/react'
import Input from '../../../../components/ui/Input'

test('Integration | Components | UI | Input', () => {
  render(<Input label="test" />)
  const buttonElement = screen.getByTestId('input-wrapper')
  expect(buttonElement).toBeInTheDocument()
})
