import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import validEmail from '../../../common/utils/valid-email'
import { Fields } from '../../../common/buyflow'

interface EmailStepProps {
  cb: (field: Fields.email, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  return (
    <>
      <div>
        <Input
          data-testid="email-step-input"
          type="email"
          label="Email"
          name="email"
          onChange={({ target: { value } }) => {
            setEmail(value)

            if (!isValidEmail) {
              validEmail(email) ? setIsValidEmail(true) : setIsValidEmail(false)
            }
          }}
          onBlur={() => {
            validEmail(email) ? setIsValidEmail(true) : setIsValidEmail(false)
          }}
          value={email}
        />
        {!isValidEmail && (
          <p data-testid="email-step-input-error" style={{ color: 'red' }}>
            Invalid email
          </p>
        )}
      </div>
      <Button
        data-testid="email-step-next-btn"
        onClick={() => {
          if (validEmail(email)) {
            props.cb(Fields.email, email)
          } else {
            setIsValidEmail(false)
          }
        }}
      >
        Next
      </Button>
    </>
  )
}

export default EmailStep
