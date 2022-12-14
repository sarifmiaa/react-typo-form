import React from 'react'

interface ErrorProps {
  message: string
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  return (
    <p data-testid="error-component" style={{ color: 'red' }}>
      {message}
    </p>
  )
}

export default ErrorComponent
