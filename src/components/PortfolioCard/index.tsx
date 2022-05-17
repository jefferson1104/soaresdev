import Container from 'components/Container'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { World } from '@styled-icons/boxicons-regular/World'
import * as S from './styles'

type PortfolioCardProps = {
  name: string
  description: string
  image: string
  link?: string
  github: string
}

const PortfolioCard = ({
  image,
  name,
  description,
  link,
  github
}: PortfolioCardProps) => {
  return (
    <Container>
      <S.Cards data-aos="fade-up">
        <S.Card>
          <S.CardImage>
            <img src={image} alt={name} />
          </S.CardImage>

          <S.CardText>
            <h1>{name}</h1>
            <p>{description}</p>
          </S.CardText>

          <S.CardButtons>
            {link && (
              <S.LinkButton href={link}>
                <World width={25} />
                Acesse
              </S.LinkButton>
            )}

            <S.GithubButton href={github}>
              <Github width={25} />
              Github
            </S.GithubButton>
          </S.CardButtons>
        </S.Card>
      </S.Cards>
    </Container>
  )
}

export default PortfolioCard
