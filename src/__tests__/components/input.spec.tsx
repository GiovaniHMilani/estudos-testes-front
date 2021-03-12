import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Input from '../../components/Input'

describe('Input component', () => {
  it('should be able to render input component', () => {
    const { getByPlaceholderText } = render(<Input placeholder="email" />)

    expect(getByPlaceholderText('email')).toBeTruthy()
  })

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="email" />
    )

    const inputElement = getByPlaceholderText('email')
    const containerElement = getByTestId('input-container')

    fireEvent.focus(inputElement)

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #c0c0c0;')
    })
  })

  it('should remove highlight on input blur', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="email" />
    )

    const inputElement = getByPlaceholderText('email')
    const containerElement = getByTestId('input-container')

    fireEvent.focus(inputElement)
    fireEvent.blur(inputElement)

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #c0c0c0;')
    })
  })
})
