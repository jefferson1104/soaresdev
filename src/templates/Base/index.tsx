import Menu from 'components/Menu'
import ScrollToTop from 'components/ScrollToTop'
// import Footer from 'components/Footer'

import * as S from './styles'

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

      {/* <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter> */}
      <ScrollToTop />
    </S.Wrapper>
  )
}

export default Base
