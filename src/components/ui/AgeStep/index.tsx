import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { Fields } from '../../../common/buyflow'
import Error from '../Error'

interface AgeStepProps {
  cb: (field: Fields.age, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  const [isValidAge, setIsValidAge] = useState(true)
  return (
    <>
      <div>
        <Input
          data-testid="age-step-input"
          type="number"
          label="Age"
          onChange={({ target: { value } }) => {
            const ageValue = Number(value)
            setAge(Number(ageValue))

            if (!isValidAge) {
              ageValue > 0 ? setIsValidAge(true) : setIsValidAge(false)
            }
          }}
          onBlur={() => {
            age > 0 ? setIsValidAge(true) : setIsValidAge(false)
          }}
          value={age}
        />

        {!isValidAge && <Error message="Invalid age" />}
      </div>
      <Button
        data-testid="age-step-next-btn"
        onClick={() => {
          if (age > 0) {
            props.cb(Fields.age, age)
          } else {
            setIsValidAge(false)
          }
        }}
      >
        Next
      </Button>
    </>
  )
}

export default AgeStep
