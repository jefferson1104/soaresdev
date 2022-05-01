import { Back, Front } from '@styled-icons/bootstrap'
import { DesignIdeas } from '@styled-icons/fluentui-system-regular'
import { Connectdevelop } from '@styled-icons/fa-brands'

import * as S from './styles'
import Container from 'components/Container'

const servicesData = [
  {
    name: 'FRONT-END',
    description:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: <Front />
  },
  {
    name: 'BACK-END',
    description:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: <Back />
  },
  {
    name: 'UI/UX',
    description:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: <DesignIdeas />
  },
  {
    name: 'SEO',
    description:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: <Connectdevelop />
  }
]

const Services = () => {
  return (
    <Container>
      <S.Wrapper>
        <h2>Serviços</h2>
        <S.ServicesContent>
          {servicesData &&
            servicesData.map((service) => {
              return (
                <S.ServicesCard key={service.name}>
                  {service.icon}
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </S.ServicesCard>
              )
            })}
        </S.ServicesContent>
      </S.Wrapper>
    </Container>
  )
}

export default Services
