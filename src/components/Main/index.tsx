import Link from 'next/link'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline'

import Background from 'components/Background'
import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'

import { useMediaQuery } from 'react-responsive'
import * as S from './styles'

const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <S.Wrapper>
      <Background />
      <Container>
        <S.MainContainer>
          <S.MainLogo>{isMobile ? <Logo size="small" /> : <Logo />}</S.MainLogo>

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
