import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from '@styled-icons/boxicons-logos'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterContainer>
        <S.Logo>
          <img src="img/soaresdev_logo_horizontal.svg" alt="Logo soaresdev" />
          <p>SoaresDev © 2021. Todos os direitos reservados.</p>
        </S.Logo>

        <S.FastLinks>
          <S.Title>Menu</S.Title>
          <S.Link href="#services">Serviços</S.Link>
          <S.Link href="#about">Sobre</S.Link>
          <S.Link href="#technologies">Tecnologias</S.Link>
          <S.Link href="#portfolio">Portfolio</S.Link>
          <S.Link href="#contact">Contato</S.Link>
        </S.FastLinks>

        <S.FastLinks>
          <S.Title>Blog</S.Title>
          <S.Link href="https://blog.soaresdev.com" target="_blank">
            Home
          </S.Link>
          <S.Link href="https://blog.soaresdev.com/frontend/" target="_blank">
            Front-end
          </S.Link>
          <S.Link href="https://blog.soaresdev.com/backend/" target="_blank">
            Back-end
          </S.Link>
          <S.Link href="https://blog.soaresdev.com/about/" target="_blank">
            Sobre
          </S.Link>
        </S.FastLinks>

        <S.SocialMediaLinks>
          <a
            href="https://www.linkedin.com/in/jeffersonsjunior/"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <Linkedin width={50} />
          </a>

          <a
            href="https://twitter.com/jeffersonjr1104"
            target="_blank"
            className="twitter"
            rel="noreferrer"
          >
            <Twitter width={50} />
          </a>

          <a
            href="https://www.instagram.com/jeffersonsjunior/"
            target="_blank"
            className="instagram"
            rel="noreferrer"
          >
            <Instagram width={50} />
          </a>

          <a
            href="https://www.facebook.com/jefferson.soares.39948856/"
            target="_blank"
            className="facebook"
            rel="noreferrer"
          >
            <Facebook width={50} />
          </a>
        </S.SocialMediaLinks>
      </S.FooterContainer>
    </S.Wrapper>
  )
}

export default Footer
