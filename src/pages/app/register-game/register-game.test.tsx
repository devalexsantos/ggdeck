import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import RegisterGame from './register-game'
import { AllTheProviders } from '@/test/setupFiles'

describe('Register', () => {
  test('Should be able to see the initial register form', () => {
    const { getByPlaceholderText, getByText } = render(
      <AllTheProviders>
        <RegisterGame />
      </AllTheProviders>,
    )

    expect(getByPlaceholderText('Digite o nome do jogo')).toBeInTheDocument()
    expect(getByText('Cadastrar Jogo')).toBeInTheDocument()
    expect(getByText('Buscar')).toBeInTheDocument()
  })
})
