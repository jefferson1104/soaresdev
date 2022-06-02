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
              Em janeiro de 2021 iniciamos nossa jornada, criando uma conexão
              entre negócio e tecnologia, disponibilizamos todas as skills
              necessárias para entender a dor do negócio, desenvolver e
              sustentar produtos digitais do zero. A SoaresDev te apoia no ciclo
              completo do projeto, temos a capacidade e habilidade de
              desenvolver desde o UI/UX, Front-end, back-end, devops, banco de
              dados e outras tecnologias. Nós somos capazes de entregar com alta
              qualidade e rapidez porque utilizamos metodologias ágeis de
              desenvolvimento em nossos softwares, com a gente você conta com
              uma visão que vai além do código e exerga a tecnologia como uma
              solução para seus problemas, te auxiliamos na sua jornada de
              transformação digital.
            </p>
          </S.Content>
        </Container>
      </Parallax>
    </S.Wrapper>
  )
}

export default About
