import { useState } from 'react'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'

import * as S from './styles'

const ContactForm = () => {
  const [isActive, setIsActive] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <S.Form
      onSubmit={() => {
        'testando'
      }}
    >
      <S.Inputs>
        <S.InputContainer>
          <S.Input
            id="name"
            type="text"
            placeholder="Nome"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setIsActive(true)}
            required
          />
          <S.Label className={isActive ? 'filled' : ''} htmlFor="name">
            Nome
          </S.Label>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="lastname"
            type="text"
            placeholder="Sobrenome"
            autoComplete="off"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            onFocus={() => setIsActive(true)}
            required
          />
          <S.Label className={isActive ? 'filled' : ''} htmlFor="lastname">
            Sobrenome
          </S.Label>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={() => setIsActive(true)}
            required
          />
          <S.Label className={isActive ? 'filled' : ''} htmlFor="email">
            Email
          </S.Label>
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            id="phone"
            type="text"
            placeholder="Telefone"
            autoComplete="off"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            onFocus={() => setIsActive(true)}
            required
          />
          <S.Label className={isActive ? 'filled' : ''} htmlFor="phone">
            Telefone
          </S.Label>
        </S.InputContainer>
      </S.Inputs>

      <S.TextareaContainer>
        <S.TextArea
          id="message"
          placeholder="Mensagem"
          autoComplete="off"
          rows={5}
        />

        <S.Label className={isActive ? 'filled' : ''} htmlFor="message">
          Mensagem
        </S.Label>
      </S.TextareaContainer>

      <S.ButtonForm
        type="submit"
        // disabled={comment.length === 0 || isSendingFeedback}
      >
        {/* {isSendingFeedback ? <Loading /> : 'Send feedback'} */}
        <SendPlane size={20} />
        Enviar
      </S.ButtonForm>
    </S.Form>
  )
}

export default ContactForm
