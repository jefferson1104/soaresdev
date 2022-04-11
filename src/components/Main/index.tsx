import * as S from './styles'

const Main = ({
  title = 'SoaresDev.com',
  description = 'Desenvolvimento de aplicativos, websites, landing pages, e-commerce e plataformas online.'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/soaresdev_logo_horizontal.svg" alt="logo soaresdev" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer facing a screen with code"
      />
    </S.Wrapper>
  )
}

export default Main
