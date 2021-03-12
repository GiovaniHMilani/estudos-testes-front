import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from '../../components/Button'

describe('Button Component', () => {
  it('should be able to render an button', async () => {
    const { getByText } = render(<Button label="Texto Qualquer" />)

    const button = getByText('Texto Qualquer')

    expect(button).toBeTruthy()
  })

  it('should be able to render an outlined button', async () => {
    const { getByText } = render(
      <Button label="Texto Qualquer" isType="outline" />
    )

    const button = getByText('Texto Qualquer')

    expect(button).toBeTruthy()
    expect(button).toHaveStyle('border: 4px solid #ff9000;')
    expect(button).toHaveStyle('background-color: transparent;')
  })
})
