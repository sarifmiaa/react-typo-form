import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    firstName: string
    lastName: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>First Name: {props.collectedData.firstName}</div>
      <div>Last Name: {props.collectedData.lastName}</div>
      <div>
        <Link to="/purchased=des_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
