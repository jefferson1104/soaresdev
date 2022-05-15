import Container from 'components/Container'
import * as S from './styles'

const technologies = [
  {
    title: 'NodeJS',
    subtitle: 'BACK-END',
    description:
      'Node.js, an event-driven asynchronous JavaScript execution environment, is designed to development of applications with high scalability, good flexibility.'
  },
  {
    title: 'ReactJS',
    subtitle: 'FRONT-END',
    description:
      'React is an open source JavaScript library focused on creating user interfaces on web pages. its main objective is to be fast and scalable, and it can also.'
  },
  {
    title: 'React Native',
    subtitle: 'MOBILE',
    description:
      'React Native is a framework based on the already acclaimed React, developed by the Facebook team, which enables the development of mobile applications.'
  }
]

const Technologies = () => {
  return (
    <S.Wrapper id="technologies">
      <Container>
        <S.Content>
          <h2>Tecnologias</h2>

          <S.Cards>
            {technologies.map((technology, index) => {
              return (
                <S.Card key={index}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <S.CardContent>
                    <h3>{technology.title}</h3>
                    <h4>{technology.subtitle}</h4>
                    <p>{technology.description}</p>
                  </S.CardContent>
                </S.Card>
              )
            })}
          </S.Cards>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Technologies
