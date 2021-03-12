import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ value, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocus(true)
  }, [])

  const handleInputBlur = useCallback((): void => {
    setIsFocus(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <Container
      data-testid="input-container"
      isFocused={isFocused}
      isFilled={isFilled}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        value={value}
        {...rest}
      />
    </Container>
  )
}

export default Input
