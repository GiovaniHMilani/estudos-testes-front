import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isType?: 'normal' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ label, isType, ...rest }) => {
  return (
    <Container isType={isType ? isType : 'normal'} {...rest}>
      {label}
    </Container>
  )
}

export default Button
