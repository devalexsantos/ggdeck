import '@testing-library/jest-dom'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import RegisterGame from './register-game'
import { AllTheProviders } from '@/test/setupFiles'

describe('Register', () => {
  test('Should be able to see the initial register form and search a game', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <AllTheProviders>
        <RegisterGame />
      </AllTheProviders>,
    )

    expect(getByPlaceholderText('Digite o nome do jogo')).toBeInTheDocument()
    expect(getByText('Cadastrar Jogo')).toBeInTheDocument()
    expect(getByText('Buscar')).toBeInTheDocument()

    // Mock user typing into the input
    const input = getByPlaceholderText('Digite o nome do jogo')
    fireEvent.change(input, { target: { value: 'Mocked Game' } })

    // Mock user clicking the search button
    const searchButton = getByRole('button', { name: 'Buscar' })
    fireEvent.click(searchButton)

    await waitFor(() =>
      expect(getByText('Buscando jogos...')).toBeInTheDocument(),
    )

    expect(await screen.findByText('Mocked Game')).toBeVisible()
  })
})
