import { Back, Front } from '@styled-icons/bootstrap'
import { DesignIdeas } from '@styled-icons/fluentui-system-regular'
import { Connectdevelop } from '@styled-icons/fa-brands'

import * as S from './styles'
import Container from 'components/Container'

const servicesData = [
  {
    name: 'FRONT-END',
    description:
      'Utilizamos das mais modernas tecnologias do mercado para desenvolver o front-end do seu sistema, atuamos com o conceito de SPA (Single Page Aplication) e sempre focado na escalabilidade, performance e boas práticas.',
    icon: <Front />
  },
  {
    name: 'BACK-END',
    description:
      'No que se diz a respeito de desenvolvimento de back-end e API, estamos preparados para desenvolver seu produto com as melhores práticas, padrões de projeto, código limpo, facil manutenção, documentação e pronto para ser escalável.',
    icon: <Back />
  },
  {
    name: 'UI/UX',
    description:
      'Criamos lindas interfaces para seu app, site, landing-page e sistema em geral, fazendo a junção desse design com uma boa experiência para o usuário, utilizamos conceitos modernos e pensando sempre na acessibilidade.',
    icon: <DesignIdeas />
  },
  {
    name: 'SEO',
    description:
      'O marketing digital é importante para atrair clientes, utilizamos um conjunto de técnicas e boas práticas para potencializar e melhorar o posicionamento em pesquisas orgânicas nos buscadores como Google, Bing e etc.',
    icon: <Connectdevelop />
  }
]

const Services = () => {
  return (
    <S.Wrapper id="services">
      <h2 data-aos="fade-down">Serviços</h2>
      <Container>
        <S.ServicesContent data-aos="fade-up">
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
      </Container>
    </S.Wrapper>
  )
}

export default Services
