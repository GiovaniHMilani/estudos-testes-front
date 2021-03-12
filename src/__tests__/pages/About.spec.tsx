import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import About from '../../pages/About'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  }
})

describe('About Page', () => {
  it('should be able to navigate to home page', () => {
    const { getByText } = render(<About />)

    const homeButton = getByText('Home')

    fireEvent.click(homeButton)

    expect(mockedHistoryPush).toHaveBeenCalledWith('/')
  })
})
