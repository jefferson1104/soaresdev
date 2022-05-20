import { Github } from '@styled-icons/boxicons-logos/Github'
import { World } from '@styled-icons/boxicons-regular/World'
import * as S from './styles'

export type PortfolioCardProps = {
  image: string
  title: string
  description: string
  link?: string
  github?: string
  size?: 'small' | 'normal'
}

const PortfolioCard = ({
  image,
  title,
  description,
  link,
  github,
  size = 'normal'
}: PortfolioCardProps) => {
  return (
    <S.Card size={size}>
      <S.CardImage>
        <img src={image} alt={title} />
      </S.CardImage>

      <S.CardContent>
        <S.CardText>
          <h1>{title}</h1>
          <p>{description}</p>
        </S.CardText>

        <S.CardButtons>
          {link && (
            <S.LinkButton href={link} target="_blank">
              <World width={25} />
              Acesse
            </S.LinkButton>
          )}

          {github && (
            <S.GithubButton href={github} target="_blank">
              <Github width={25} />
              Github
            </S.GithubButton>
          )}
        </S.CardButtons>
      </S.CardContent>
    </S.Card>
  )
}

export default PortfolioCard
