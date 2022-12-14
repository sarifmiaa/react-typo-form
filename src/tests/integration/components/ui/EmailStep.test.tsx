import { fireEvent, render, screen } from '@testing-library/react'
import { mockStepCallback } from '../../../../common/buyflow'
import EmailStep from '../../../../components/ui/EmailStep'

test('Integration | Components | UI | EmailStep', () => {
  render(<EmailStep cb={mockStepCallback('name')} />)
  const emailStepInputElement = screen.getByTestId('email-step-input')
  expect(emailStepInputElement).toBeInTheDocument()

  const emailStepNextBtn = screen.getByTestId('email-step-next-btn')
  expect(emailStepNextBtn).toBeInTheDocument()
  expect(emailStepNextBtn.innerHTML).toEqual('Next')

  fireEvent.click(emailStepNextBtn)

  const emailStepInputError = screen.getByTestId('email-step-input-error')
  expect(emailStepInputError).toBeInTheDocument()
  expect(emailStepInputError.innerHTML).toEqual('Invalid email')
})
