import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.super} 0;

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

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  ${media.lessThan('small')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `}
`

export const FormInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .header {
      h2 {
        font-size: ${theme.font.sizes.xlarge};
      }

      p {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.lightGray};
      }
    }

    .infos {
      a {
        display: flex;
        align-items: center;

        text-decoration: none;
        color: #fff;
        transition: ${theme.transition.default};

        max-width: 320px;

        svg {
          margin-right: 10px;
          color: ${theme.colors.primary};
        }

        & + a {
          margin-top: 45px;
        }

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }

    ${media.lessThan('medium')`
      .header {
        margin-bottom: 20px;

        h2 {
          font-size: ${theme.font.sizes.large};
        }

        p {
          font-size: ${theme.font.sizes.small};
        }
      }
    `}
  `}
`
