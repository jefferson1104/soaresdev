import Link from 'next/link'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline'

import Background from 'components/Background'
import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'

import * as S from './styles'
import { useState, useEffect } from 'react'

const Main = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return (
    <>
      <Background />
      <S.Wrapper>
        <Container>
          <S.MainContainer>
            <S.MainLogo data-aos="fade-down">
              {isMobile ? <Logo size="small" /> : <Logo />}
            </S.MainLogo>

            <S.MainContent data-aos="fade-up">
              <h1>Desenvolvimento de software</h1>
              <p>
                Impulsione seu negócio com as melhores tecnologias utilizadas
                pelos gigantes do Vale do Silício, transformamos desafios de
                empresas e empreendedores em soluções tecnológicas, criando
                produtos de software inovadores.
              </p>
              <Link href="#services">
                <Button as="a" icon={<ArrowheadRightOutline />}>
                  Saiba mais
                </Button>
              </Link>
            </S.MainContent>
          </S.MainContainer>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default Main
