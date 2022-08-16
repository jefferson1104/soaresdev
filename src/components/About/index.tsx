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
            <h2>Sobre</h2>
            <p>
              Meu nome é <b>Jefferson Soares</b> iniciei minha jornada como
              programador na web em 2011, naquele tempo as tecnologias que
              aprendi e utilizava em meus projetos para o desenvolvimento web
              foram: <b>HTML</b>, <b>CSS</b>, <b>Javascript</b> e <b>PHP</b>,
              desde esse primeiro momento também utilizei <b>JQuery</b> e{' '}
              <b>Bootstrap</b>, atuava com uma arquitetura MVC e com o paradigma
              de <b>programação orientado a objetos</b>. Com a evolução da web e
              surgimento de diversas tecnologias, resolvi me dedicar ao
              ecossistema da linguagem de programação <b>JavaScript</b>, passei
              a estudar e me atualizar constantemente com sua versão mais
              moderna, para o desenvolvimento de uma API ou um back-end moderno
              utilizo o runtime <b>NodeJS</b> como interpretador de JavaScript
              no servidor, no front-end sou entusiasta da biblioteca para
              construção de interfaces <b>ReactJS</b> e também do React Native
              para o desenvolvimento de aplicativos nativos para sistemas
              Android ou iOS, atualmente trabalho com um paradigma de{' '}
              <b>programação orientado a função</b>, tenho conhecimento em
              diferentes padrões de projetos e sempre me dedico a desenvolver um
              código limpo e uma aplicação escalável, sou apaixonado por
              tecnologia e como ela transforma o mundo.
            </p>
          </S.Content>
        </Container>
      </Parallax>
    </S.Wrapper>
  )
}

export default About
