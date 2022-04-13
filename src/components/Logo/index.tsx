import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'normal'
}

const Logo = ({ size = 'normal' }: LogoProps) => {
  return (
    <S.Wrapper size={size}>
      <img src="/img/soaresdev_logo_vertical.svg" alt="logo soaresdev" />
    </S.Wrapper>
  )
}

export default Logo
