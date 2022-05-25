import Link from 'next/link'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline'

import Background from 'components/Background'
import Container from 'components/Container'
import MediaMatch from 'components/MediaMatch'
import Logo from 'components/Logo'
import Button from 'components/Button'

import * as S from './styles'

const Hero = () => {
  return (
    <>
      <Background />
      <S.Wrapper>
        <Container>
          <S.HeroContainer>
            <S.HeroLogo data-aos="fade-down">
              <MediaMatch lessThan="medium">
                <Logo size="small" />
              </MediaMatch>

              <MediaMatch greaterThan="medium">
                <Logo />
              </MediaMatch>
            </S.HeroLogo>

            <S.HeroContent data-aos="fade-up">
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
            </S.HeroContent>
          </S.HeroContainer>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default Hero
