import Background from 'components/Background'
import Container from 'components/Container'
import MediaMatch from 'components/MediaMatch'
import Logo from 'components/Logo'

import { ExpandMore } from '@styled-icons/material-twotone/ExpandMore'
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
              <S.ButtonSeeMore href="#services">
                saiba mais
                <span>
                  <ExpandMore width={30} height={30} />
                </span>
                <span>
                  <ExpandMore width={35} height={35} />
                </span>
              </S.ButtonSeeMore>
            </S.HeroContent>
          </S.HeroContainer>
        </Container>
      </S.Wrapper>
    </>
  )
}

export default Hero
