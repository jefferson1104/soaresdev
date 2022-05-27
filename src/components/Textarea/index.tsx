import { useState, TextareaHTMLAttributes } from 'react'

import * as S from './styles'

export type TextAreaProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({
  onInputChange,
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  ...props
}: TextAreaProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.TextAreaWrapper>
        <S.TextArea
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          rows={5}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.TextAreaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextArea
