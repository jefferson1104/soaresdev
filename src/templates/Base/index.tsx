import dynamic from 'next/dynamic'

import * as S from './styles'

const Menu = dynamic(() => import('components/Menu'), {
  ssr: false
})

const Footer = dynamic(() => import('components/Footer'), {
  ssr: false
})

const ScrollToTop = dynamic(() => import('components/ScrollToTop'), {
  ssr: false
})

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.MenuContainer>
        <Menu />
      </S.MenuContainer>
      <S.Content>{children}</S.Content>
      <Footer />
      <ScrollToTop />
    </S.Wrapper>
  )
}

export default Base
