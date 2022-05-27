import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Input from '.'

describe('Input component', () => {
  it('Renders with Label', () => {
    render(<Input label="Label" name="label" />)

    const label = screen.getByLabelText('Label')

    expect(label).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<Input />)

    const label = screen.queryByLabelText('Label')

    expect(label).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<Input placeholder="hey you" />)

    const placeholder = screen.getByPlaceholderText('hey you')

    expect(placeholder).toBeInTheDocument()
  })

  it('Renders with error', () => {
    const { container } = render(
      <Input label="testField" error="Error message" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    render(<Input label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    render(<Input label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()

    render(
      <Input onInputChange={onInputChange} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <Input
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })
})
