import styled, { css, DefaultTheme } from 'styled-components'

export const Cards = styled.div``

type CardProps = {
  size: 'normal' | 'small'
}

const cardModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 320px;
    height: 430px;
    padding: 10px;

    border-radius: 10px;
    border-top: 1px solid rgba(46, 47, 66, 0.9);
    border-left: 1px solid rgba(46, 47, 66, 0.9);
    border-right: 1px solid rgba(46, 47, 66, 0.5);
    border-bottom: 1px solid rgba(46, 47, 66, 0.5);

    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    h1 {
      font-size: ${theme.font.sizes.mediumSmall};
    }

    p {
      font-size: ${theme.font.sizes.small};
      height: 100px;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    width: 600px;
    height: 450px;
    padding: 15px;

    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-top: 1px solid rgba(46, 47, 66, 0.9);
    border-left: 1px solid rgba(46, 47, 66, 0.9);
    border-right: 1px solid rgba(46, 47, 66, 0.5);
    border-bottom: 1px solid rgba(46, 47, 66, 0.5);

    img {
      width: 560px;
      height: 220px;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }

    p {
      font-size: ${theme.font.sizes.mediumSmall};
      height: 100px;
    }
  `
}

export const Card = styled.div<CardProps>`
  ${({ theme, size }) => css`
    ${!!size && cardModifiers[size](theme)};

    overflow: hidden;
    background: rgba(46, 47, 66, 0.3);
  `}
`

export const CardImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 100px;
`

export const CardText = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0;
  }
  `}
`

export const CardButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
