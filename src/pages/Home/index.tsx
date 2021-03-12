import React, { useState } from 'react'

import { Container } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'

function Home() {
  const [textInput, setTextInput] = useState('')
  const [textLabel, setTextLabel] = useState('')

  const history = useHistory()

  const handleClick = (): void => {
    setTextLabel(textInput)
  }

  const handlePressAbout = (): void => {
    history.push('/sobre')
  }

  return (
    <Container>
      <Input
        placeholder="Digite algum texto"
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
      />
      <Button isType="outline" onClick={handleClick} label="Alterar" />
      <p data-testid="label-text">{textLabel}</p>
      <Button label="Sobre" onClick={handlePressAbout}>
        Sobre
      </Button>
    </Container>
  )
}
export default Home
