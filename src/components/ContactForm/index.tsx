import { useState } from 'react'

import { SendPlane } from '@styled-icons/remix-fill/SendPlane'
import { Whatsapp as WhatsappIcon } from '@styled-icons/icomoon/Whatsapp'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { Location as LocationIcon } from '@styled-icons/entypo/Location'

import * as S from './styles'
import Container from 'components/Container'

const ContactForm = () => {
  const [isActive, setIsActive] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // console.log('NOME =>', name)
  // console.log('SOBRENOME =>', lastName)
  // console.log('EMAIL =>', email)
  // console.log('PHONE =>', phone)

  return (
    <S.Wrapper>
      <h2 data-aos="fade-down">Contato</h2>

      <Container>
        <S.FormContainer data-aos="fade-up">
          <S.FormInfo>
            <div className="header">
              <h2>Informações de contato</h2>
              <p>
                preencha o formulário e nossa equipe entrará em contato com você
                em até 24 horas.
              </p>
            </div>

            <div className="infos">
              <a href="https://wa.me/+5511958002292">
                <WhatsappIcon width={30} /> +55 11 95800-2292
              </a>

              <a href="mailto:jefferson1104junior@gmail.com">
                <EmailIcon width={30} /> jefferson1104junior@gmail.com
              </a>

              <a href="https://goo.gl/maps/cysVrreghC73Tzkh7">
                <LocationIcon width={30} /> São Paulo, SP - Brasil
              </a>
            </div>

            <div />
          </S.FormInfo>

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
                <S.Label
                  className={isActive ? 'filled' : ''}
                  htmlFor="lastname"
                >
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
        </S.FormContainer>
      </Container>
    </S.Wrapper>
  )
}

export default ContactForm
