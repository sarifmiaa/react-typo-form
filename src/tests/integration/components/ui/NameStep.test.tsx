import { render, screen } from '@testing-library/react'
import { mockStepCallback } from '../../../../common/buyflow'
import NameStep from '../../../../components/ui/NameStep'

test('Integration | Components | UI | NameStep', () => {
  render(<NameStep cb={mockStepCallback('age')} />)
  const firstNameInputElement = screen.getByTestId('name-step-first-name')
  expect(firstNameInputElement).toBeInTheDocument()
  const lastNameInputElement = screen.getByTestId('name-step-last-name')
  expect(lastNameInputElement).toBeInTheDocument()
  const nameStepNextBtn = screen.getByTestId('name-step-next-btn')
  expect(nameStepNextBtn).toBeInTheDocument()
  expect(nameStepNextBtn.innerHTML).toEqual('Next')
})
