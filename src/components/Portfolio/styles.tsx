import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;

    > h2 {
      text-align: center;
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xxlarge};
    }

    ${media.lessThan('medium')`
      > h2 {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`

export const PortfolioContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const MainProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-column-gap: 8rem;
  grid-row-gap: 8rem;
  margin-bottom: 100px;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const AllProjects = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    ${media.lessThan('huge')`
      overflow: hidden;
      max-width: 1300px;
    `}

    ${media.lessThan('large')`
      max-width: 1000px;
    `}

    ${media.lessThan('medium')`
      max-width: 728px;
    `}

    ${media.lessThan('small')`
      max-width: 360px;
      margin-left: 0;
    `}

    .slick-track,
    .slick-list {
      width: ${theme.grid.container};
    }

    .slick-slide > div {
      height: 100%;
      width: 100%;
    }

    .slick-prev,
    .slick-next {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.small};
    }

    .slick-next {
      right: -${theme.spacings.small};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-dots {
      display: flex !important;
      list-style: none;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }

      ${media.lessThan('large')`
        display: inline-flex !important;
      `}
    }
  `}
`
