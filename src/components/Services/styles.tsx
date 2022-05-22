import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.huge} 0;

    > h2 {
      font-size: ${theme.font.sizes.huge};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xxlarge};
    }

    ${media.lessThan('medium')`
      > h2 {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`

export const ServicesContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: 2fr 2fr;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const ServicesCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
      height: 80px;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.small};
    }

    h3 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.light};
      margin-bottom: ${theme.spacings.small};
      color: ${theme.colors.white};
    }

    p {
      font-size: ${theme.font.sizes.mediumSmall};
      line-height: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.xxlarge};
      color: ${theme.colors.lightBg};
    }

    ${media.lessThan('medium')`
      svg {
        width: 50px;
        height: 50px;
      }

      h3 {
        font-size: ${theme.font.sizes.large};
      }

      p {
        font-size: ${theme.font.sizes.small};
        line-height: ${theme.spacings.small};
      }
    `}
  `}
`
