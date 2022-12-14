import React from 'react'
import style from './style.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { name } = props
  return (
    <button
      className={style.butonWrapper}
      id={name}
      data-testid="button"
      {...props}
    />
  )
}

export default Button
