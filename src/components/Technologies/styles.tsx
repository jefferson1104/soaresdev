import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.bold};
      margin: 10rem 0;
    }

    ${media.lessThan('medium')`
      h2 {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15rem;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 400px;
    position: relative;
    background: ${theme.colors.mainBg};
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin-bottom: 6rem;

    &:hover {
      opacity: 1;

      h3 {
        opacity: 1;
        transform: translateY(-70px);
      }

      h4 {
        opacity: 1;
      }

      p {
        opacity: 1;
      }

      span {
        opacity: 1;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      bottom: 2px;
      width: 50%;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }

    span {
      transition: 0.5s ease-in-out;
      opacity: 0.2;

      &:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, transparent, #4bbecf);
        animation: animate1 2s linear infinite;
      }

      @keyframes animate1 {
        0% {
          transform: translateX(-100%);
        }

        100% {
          transform: translateX(100%);
        }
      }

      &:nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, #4bbecf);
        animation: animate2 2s linear infinite;
        animation-delay: 1s;
      }

      @keyframes animate2 {
        0% {
          transform: translateY(-100%);
        }

        100% {
          transform: translateY(100%);
        }
      }

      &:nth-child(3) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(to left, transparent, #4bbecf);
        animation: animate3 2s linear infinite;
      }

      @keyframes animate3 {
        0% {
          transform: translateX(100%);
        }

        100% {
          transform: translateX(-100%);
        }
      }

      &:nth-child(4) {
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: linear-gradient(to top, transparent, #4bbecf);
        animation: animate4 2s linear infinite;
        animation-delay: 1s;
      }

      @keyframes animate4 {
        0% {
          transform: translateY(100%);
        }

        100% {
          transform: translateY(-100%);
        }
      }
    }
  `}
`

export const CardContent = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    text-align: center;

    h3 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      position: absolute;
      right: 20px;
      z-index: 1;
      opacity: 0.1;
      transition: 0.5s ease-in-out;
    }

    h4 {
      position: relative;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
      z-index: 2;
      opacity: 0.5;
      letter-spacing: 1px;
      transition: 0.5s ease-in-out;
    }

    p {
      position: relative;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.lightGray};
      font-weight: ${theme.font.light};
      z-index: 2;
      opacity: 0.5;
      transition: 0.5s ease-in-out;
    }

    ${media.lessThan('medium')`
      padding: 40px;

      h3 {
        font-size: ${theme.font.sizes.xlarge};
      }

      h4 {
        font-size: ${theme.font.sizes.medium};
      }

      p {
        font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`
