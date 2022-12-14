import { render, screen } from '@testing-library/react'
import Error from '../../../../components/ui/Error'

test('Integration | Components | UI | Error', () => {
  render(<Error message="Error" />)
  const errorElement = screen.getByTestId('error-component')
  expect(errorElement).toBeInTheDocument()
})
