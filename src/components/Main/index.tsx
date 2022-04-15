import Background from 'components/Background'
import { Container } from 'components/Container'
import Logo from 'components/Logo'

import * as S from './styles'

const Main = () => {
  return (
    <>
      <Background />
      <Container>
        <S.Wrapper>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>

          <S.ContentWrapper>
            <h1>Desenvolvimento de software</h1>
            <p>
              Impulsione seu negócio com as melhores tecnologias utilizadas
              pelos gigantes do Vale do Silício, transformamos desafios de
              empresas e empreendedores em soluções tecnológicas, criando
              produtos de software inovadores.
            </p>
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default Main
