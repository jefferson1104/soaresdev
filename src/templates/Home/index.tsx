import Base from 'templates/Base'
import Container from 'components/Container'
import Main from 'components/Main'
import Services from 'components/Services'

// import * as S from './styles'

const Home = () => {
  return (
    <Base>
      <Main />
      <Container>
        <Services />
      </Container>
    </Base>
  )
}

export default Home
