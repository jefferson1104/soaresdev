import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
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
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.xxlarge};
      color: ${theme.colors.lightGray};
    }
  `}
`
