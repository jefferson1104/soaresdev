import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-column-gap: 8rem;
  grid-row-gap: 8rem;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Card = styled.div`
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: rgba(29, 27, 39, 0.1);
  border-top: 1px solid rgba(46, 47, 66, 0.9);
  border-left: 1px solid rgba(46, 47, 66, 0.9);
  border-right: 1px solid rgba(46, 47, 66, 0.5);
  border-bottom: 1px solid rgba(46, 47, 66, 0.5);

  overflow: hidden;
  width: 600px;
  height: 420px;
  padding: 15px;

  ${media.lessThan('small')`
    width: 320px;
    height: 420px;
    padding: 10px;
  `}
`

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 560px;
    height: 220px;
    object-fit: cover;
    border-radius: 4px;
  }

  ${media.lessThan('small')`
    img {
      width: 300px;
      height: 220px;
      object-fit: cover;
      border-radius: 4px;
    }
  `}
`

export const CardText = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0;

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }

    p {
      font-size: ${theme.font.sizes.medium};
    }

    ${media.lessThan('small')`
      h1 {
        font-size: ${theme.font.sizes.medium};

      }

      p {
        font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`

export const CardButtons = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
  width: 50%;
  margin-top: 20px;
`

export const LinkButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    padding: 5px;
    background: ${theme.colors.primary};
    color: ${theme.colors.mainBg};
    transition: 0.5s all ease-in-out;

    &:hover {
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      background: ${theme.colors.mainBg};
    }
  `}
`

export const GithubButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    padding: 5px;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.mainBg};
    transition: 0.5s all ease-in-out;

    &:hover {
      border: 1px solid ${theme.colors.lightGray};
      background: ${theme.colors.mainBg};
      color: ${theme.colors.lightGray};
    }
  `}
`
