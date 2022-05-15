import Container from 'components/Container'
import { Parallax } from 'react-parallax'

import * as S from './styles'

const About = () => {
  return (
    <S.Wrapper id="about">
      <Parallax
        className="paralax-image"
        bgImage="img/parallax-banner.png"
        bgImageAlt="parallax-banner"
        strength={600}
      >
        <Container>
          <S.Content data-aos="zoom-in">
            <h2>Sobre Nós</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </S.Content>
        </Container>
      </Parallax>
    </S.Wrapper>
  )
}

export default About
