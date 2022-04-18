import Container from 'components/Container'
import Main from 'components/Main'
import Services from 'components/Services'

import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <Main />
      <Container>
        <Services />
      </Container>
    </S.Wrapper>
  )
}

export default Home
