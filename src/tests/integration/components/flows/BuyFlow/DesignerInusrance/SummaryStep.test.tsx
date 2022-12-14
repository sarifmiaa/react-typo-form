import { render } from '@testing-library/react'
import SummaryStep from '../../../../../../components/flows/BuyFlow/DesignerInsurance/SummaryStep'
import { MemoryRouter } from 'react-router-dom'
test('Integration | Components | Flow | DesignerInsurance | SummaryStep', () => {
  render(
    <MemoryRouter>
      <SummaryStep
        collectedData={{
          email: 'sa@email',
          age: 12,
          firstName: 'Sa',
          lastName: 'Ja',
        }}
      />
    </MemoryRouter>
  )
})
