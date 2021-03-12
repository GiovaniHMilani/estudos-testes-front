import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../../pages/Home'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  }
})

describe('Home Page', () => {
  it('should be able to mirror the input text on the label', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home />)

    const input = getByPlaceholderText('Digite algum texto')
    const button = getByText('Alterar')

    fireEvent.change(input, { target: { value: 'Texto 123' } })
    fireEvent.click(button)

    expect(getByTestId('label-text').textContent).toBe('Texto 123')
  })

  it('should be able to navigate to about page', () => {
    const { getByText } = render(<Home />)

    const aboutButton = getByText('Sobre')

    fireEvent.click(aboutButton)

    expect(mockedHistoryPush).toHaveBeenCalledWith('/sobre')
  })
})
