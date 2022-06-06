import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  ${({ theme }) => css`
    background: rgba(46, 47, 66, 0.3);
    border-radius: 10px;
    border-top: 1px solid rgba(46, 47, 66, 0.9);
    border-left: 1px solid rgba(46, 47, 66, 0.9);
    border-right: 1px solid rgba(46, 47, 66, 0.5);
    border-bottom: 1px solid rgba(46, 47, 66, 0.5);

    width: 350px;
    height: 450px;
    padding: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    ${media.lessThan('small')`
      width: 310px;
    `}
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

    h1 {
      font-size: ${theme.font.sizes.mediumSmall};
    }

    p {
      font-size: ${theme.font.sizes.small};
      height: 130px;
    }
  `}
`

export const CardButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
