import Logo from 'components/Logo'
import HeroBackground from 'components/HeroBackground'
import * as S from './styles'

const Main = ({
  title = 'SoaresDev.com',
  description = 'Desenvolvimento de aplicativos, websites, landing pages, e-commerce e plataformas online.'
}) => {
  return (
    <>
      <HeroBackground />
      <S.Wrapper>
        <Logo />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Wrapper>
    </>
  )
}

export default Main
