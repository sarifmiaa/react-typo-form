import React, { useState } from 'react'
import { DesignerInsuranceFields, Fields } from '../../../../common/buyflow'
import AgeStep from '../../../ui/AgeStep'
import EmailStep from '../../../ui/EmailStep'
import NameStep from '../../../ui/NameStep'
import SummaryStep from './SummaryStep'

enum FlowSteps {
  email = 'email',
  age = 'age',
  name = 'name',
  summary = 'summary',
}

const DesignerInsuranceFlow: React.FC = (props) => {
  const [currentStep, setStep] = useState('email')

  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    firstName: '',
    lastName: '',
  })

  const getStepCallback = (nextStep: string) => (
    field: DesignerInsuranceFields,
    value: any
  ) => {
    if (field === Fields.name) {
      updateData({
        ...collectedData,
        firstName: value.firstName,
        lastName: value.lastName,
      })
      setStep(nextStep)
      return
    }

    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
    return
  }

  return (
    <>
      {(currentStep === FlowSteps.email && (
        <EmailStep cb={getStepCallback(FlowSteps.age)} />
      )) ||
        (currentStep === FlowSteps.age && (
          <AgeStep cb={getStepCallback(FlowSteps.name)} />
        )) ||
        (currentStep === FlowSteps.name && (
          <NameStep cb={getStepCallback(FlowSteps.summary)} />
        )) ||
        (currentStep === FlowSteps.summary && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default DesignerInsuranceFlow
