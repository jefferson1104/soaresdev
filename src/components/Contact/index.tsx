import { Whatsapp as WhatsappIcon } from '@styled-icons/icomoon/Whatsapp'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { Location as LocationIcon } from '@styled-icons/entypo/Location'

import Container from 'components/Container'
import ContactForm from 'components/ContactForm'

import * as S from './styles'

const Contact = () => {
  return (
    <S.Wrapper id="contact">
      <h2 data-aos="fade-down">Contato</h2>
      <Container>
        <S.FormContainer data-aos="fade-up">
          <S.FormInfo>
            <div className="infos">
              <h3>Informações de contato</h3>
              <p>
                preencha o formulário e nossa equipe entrará em contato com você
                em até 24 horas. Fique a vontade também para nos enviar
                sugestões ou reclamações, sua opinião nos interessa.
              </p>
            </div>

            <div className="contact-options">
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

          <ContactForm />
        </S.FormContainer>
      </Container>
    </S.Wrapper>
  )
}

export default Contact
