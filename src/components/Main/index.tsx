import Link from 'next/link'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline'

import Background from 'components/Background'
import Button from 'components/Button'
import Container from 'components/Container'
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
            <Link href="#test">
              <Button as="a" icon={<ArrowheadRightOutline />}>
                Saiba mais
              </Button>
            </Link>
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default Main
