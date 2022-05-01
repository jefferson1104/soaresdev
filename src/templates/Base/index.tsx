import Menu from 'components/Menu'
// import Footer from 'components/Footer'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.BaseContainer>
        <Menu />
      </S.BaseContainer>

      <S.Content>{children}</S.Content>

      {/* <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter> */}
    </S.Wrapper>
  )
}

export default Base
