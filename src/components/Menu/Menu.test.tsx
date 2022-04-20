/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from 'utils/test-utils'
import { screen, fireEvent } from '@testing-library/react'

import Menu from '.'

// Mock useRouter
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  query: {}
}))

describe('Menu component', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Home/i)).toHaveLength(2)
    expect(screen.getAllByText(/Serviços/i)).toHaveLength(2)
    expect(screen.getAllByText(/Sobre/i)).toHaveLength(2)
    expect(screen.getAllByText(/Tecnologias/i)).toHaveLength(2)
    expect(screen.getAllByText(/Portfolio/i)).toHaveLength(2)
    expect(screen.getAllByText(/Contato/i)).toHaveLength(2)
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

    // selecionar o nosso menuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
