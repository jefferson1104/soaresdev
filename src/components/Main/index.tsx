import Link from 'next/link'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline'

import Background from 'components/Background'
import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'

import MediaQuery from 'react-responsive'
import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <Background />
      <Container>
        <S.MainContainer>
          <S.MainLogo>
            <MediaQuery minWidth={768}>
              <Logo />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <Logo size="small" />
            </MediaQuery>
          </S.MainLogo>

          <S.MainContent>
            <h1>Desenvolvimento de software</h1>
            <p>
              Impulsione seu negócio com as melhores tecnologias utilizadas
              pelos gigantes do Vale do Silício, transformamos desafios de
              empresas e empreendedores em soluções tecnológicas, criando
              produtos de software inovadores.
            </p>
            <Link href="#test">
              <Button as="a" icon={<ArrowheadRightOutline />}>
                Saiba mais
              </Button>
            </Link>
          </S.MainContent>
        </S.MainContainer>
      </Container>
    </S.Wrapper>
  )
}

export default Main
