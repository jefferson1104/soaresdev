import { useState } from 'react'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'

import * as S from './styles'
import Button from 'components/Button'
import Input from 'components/Input'

const ContactForm = () => {
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
          <Input
            id="name"
            type="text"
            placeholder="Nome"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </S.InputContainer>

        <S.InputContainer>
          <Input
            id="lastname"
            type="text"
            placeholder="Sobrenome"
            autoComplete="off"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </S.InputContainer>

        <S.InputContainer>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </S.InputContainer>

        <S.InputContainer>
          <Input
            id="phone"
            type="text"
            placeholder="Telefone"
            autoComplete="off"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </S.InputContainer>
      </S.Inputs>

      <S.TextareaContainer>
        <S.TextArea
          id="message"
          placeholder="Mensagem"
          autoComplete="off"
          rows={5}
        />
      </S.TextareaContainer>

      <Button
        type="submit"
        fullWidth
        icon={<SendPlane />}
        // disabled={comment.length === 0 || isSendingFeedback}
      >
        {/* {isSendingFeedback ? <Loading /> : 'Send feedback'} */}
        Enviar
      </Button>
    </S.Form>
  )
}

export default ContactForm
