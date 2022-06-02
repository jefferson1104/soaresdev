import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Container from 'components/Container'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 40vh;
  border-top: 2px solid #2e2f42;
  background: #17151f;

  ${media.lessThan('small')`
    height: 90vh;
  `}
`

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('small')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > img {
      width: 300px;
    }

    > p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.lightGray};
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.lessThan('small')`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const FastLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan('small')`
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    letter-spacing: 5px;
    text-transform: uppercase;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
    cursor: pointer;
    transition: ${theme.transition.default};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const SocialMediaLinks = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    svg {
      color: ${theme.colors.lightGray};
      transition: ${theme.transition.default};

      &:hover {
        width: 45px;
      }
    }

    .linkedin:hover {
      svg {
        color: #0e76a8;
      }
    }

    .twitter:hover {
      svg {
        color: #00acee;
      }
    }

    .instagram:hover {
      svg {
        color: #e1306c;
      }
    }

    .facebook:hover {
      svg {
        color: #4267b2;
      }
    }

    ${media.lessThan('small')`
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`
