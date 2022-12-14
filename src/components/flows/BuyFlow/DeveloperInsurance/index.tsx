import React, { useState } from 'react'
import { DeveloperInsuranceFields } from '../../../../common/buyflow'
import AgeStep from '../../../ui/AgeStep'
import EmailStep from '../../../ui/EmailStep'
import SummaryStep from './SummaryStep'

const DevloperInsuranceFlow: React.FC = (props) => {
  const [currentStep, setStep] = useState('email')

  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })

  const getStepCallback = (nextStep: string) => (
    field: DeveloperInsuranceFields,
    value: any
  ) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  return (
    <>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default DevloperInsuranceFlow
