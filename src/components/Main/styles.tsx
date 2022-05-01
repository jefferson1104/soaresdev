import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  max-height: 95rem;

  box-shadow: 0px -50px 80px #1d1b27 inset;

  ${media.lessThan('medium')`
    height: 75rem;
  `}
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
      flex-direction: column;
  `}
`

export const MainLogo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`

export const MainContent = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 80rem;
    color: ${theme.colors.white};

    h1 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: 3rem;
      margin-bottom: ${theme.spacings.large};
    }

    ${media.lessThan('medium')`
      h1 {
        font-size: ${theme.font.sizes.large};
      }

      p {
        font-size: ${theme.font.sizes.small};
        line-height: 2rem;
      }
    `}
  `}
`
