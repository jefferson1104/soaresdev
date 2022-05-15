import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  .paralax-image {
    position: relative;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: ${theme.font.sizes.huge};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xxlarge};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.xxlarge};
      color: ${theme.colors.lightGray};
    }

    ${media.lessThan('medium')`
      h2 {
        font-size: ${theme.font.sizes.xlarge};
        margin-bottom: ${theme.spacings.medium};
      }

      p {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.white};
      }
    `}
  `}
`
