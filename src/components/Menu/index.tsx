import Link from 'next/link'
import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="#services" passHref>
            <S.MenuLink>Serviços</S.MenuLink>
          </Link>

          <Link href="#about" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>

          <Link href="#technologies" passHref>
            <S.MenuLink>Tecnologias</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Portfolio</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Serviços</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Sobre</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Tecnologias</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Portfolio</S.MenuLink>
          </Link>

          <Link href="/" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
