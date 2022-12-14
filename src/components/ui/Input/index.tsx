import React from 'react'
import style from './style.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = (props) => {
  const { name, label } = props
  return (
    <div className={style.inputWrapper} data-testid="input-wrapper">
      <label htmlFor={name}>{label}: </label>
      <input id={name} data-testid={name} {...props} />
    </div>
  )
}

export default Input
