import { render, screen } from '@testing-library/react'
import { mockStepCallback } from '../../../../common/buyflow'
import AgeStep from '../../../../components/ui/AgeStep'

test('Integration | Components | UI | AgeStep', () => {
  render(<AgeStep cb={mockStepCallback('age')} />)
  const ageStepInputElement = screen.getByTestId('age-step-input')
  expect(ageStepInputElement).toBeInTheDocument()
  const ageStepNextBtn = screen.getByTestId('age-step-next-btn')
  expect(ageStepNextBtn).toBeInTheDocument()
  expect(ageStepNextBtn.innerHTML).toEqual('Next')
})
