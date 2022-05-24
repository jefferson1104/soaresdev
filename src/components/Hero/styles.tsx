import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  box-shadow: 0px -50px 80px #1d1b27 inset;

  ${media.lessThan('medium')`
    height: 60rem;
  `}
`

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const HeroLogo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`

export const HeroContent = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 80rem;
    color: ${theme.colors.white};

    h1 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
    }

    p {
      font-size: ${theme.font.sizes.mediumSmall};
      line-height: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.large};
    }

    ${media.lessThan('medium')`
      h1 {
        font-size: ${theme.font.sizes.mediumSmall};
        margin-bottom: ${theme.spacings.small};
      }

      p {
        font-size: ${theme.font.sizes.small};
        line-height: ${theme.spacings.small};
      }
    `}
  `}
`
