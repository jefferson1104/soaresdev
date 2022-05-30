import * as S from './styles'

type LoadingProps = {
  text?: string
}

const Loading = ({ text = '' }: LoadingProps) => {
  return (
    <S.Wrapper>
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <p>{text}</p>
    </S.Wrapper>
  )
}

export default Loading
