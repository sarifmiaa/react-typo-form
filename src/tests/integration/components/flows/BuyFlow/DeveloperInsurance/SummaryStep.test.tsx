import { render } from '@testing-library/react'
import SummaryStep from '../../../../../../components/flows/BuyFlow/DeveloperInsurance/SummaryStep'
import { MemoryRouter } from 'react-router-dom'
test('Integration | Components | Flow | DeveloperInsurance | SummaryStep', () => {
  render(
    <MemoryRouter>
      <SummaryStep
        collectedData={{
          email: 'sa@email',
          age: 12,
        }}
      />
    </MemoryRouter>
  )
})
