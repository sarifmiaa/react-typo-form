import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { Fields } from '../../../common/buyflow'
import Error from '../Error'

export interface Name {
  firstName: string
  lastName: string
}

interface NameStepProps {
  cb: (field: Fields.name, value: Name) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isValidFirstName, setIsValidFirstName] = useState(true)
  const [isValidLastName, setIsValidLastName] = useState(true)

  return (
    <>
      <div>
        <Input
          data-testid="name-step-first-name"
          type="text"
          label="First Name"
          name="first name"
          onChange={({ target: { value } }) => {
            setFirstName(value)

            if (!isValidFirstName && firstName) {
              setIsValidFirstName(true)
            }
          }}
          value={firstName}
        />
        {!isValidFirstName && <Error message="First name required" />}
        <Input
          data-testid="name-step-last-name"
          type="text"
          label="Last Name"
          name="last name"
          onChange={({ target: { value } }) => {
            setLastName(value)

            if (!isValidLastName && lastName) {
              setIsValidLastName(true)
            }
          }}
          value={lastName}
        />
        {!isValidLastName && <Error message="Last name required" />}
      </div>
      <Button
        data-testid="name-step-next-btn"
        onClick={() => {
          if (firstName && lastName) {
            props.cb(Fields.name, {
              firstName,
              lastName,
            })
          }

          if (!firstName) {
            setIsValidFirstName(false)
          }

          if (!lastName) {
            setIsValidLastName(false)
          }
        }}
      >
        Next
      </Button>
    </>
  )
}

export default NameStep
