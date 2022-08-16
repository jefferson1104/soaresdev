import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    height: 120px;

    padding: ${theme.paddings.medium} ${theme.paddings.huge};
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    border-radius: 8px;

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      padding: ${theme.paddings.medium};
    }

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;


      width: 100%;
      height: 170px;
      background: ${theme.colors.white};
      border: 0;
      border-radius: 0;

      p {
        font-size: ${theme.font.sizes.xxsmall};
        padding: 0;
        text-align: center;
      }
    `}
  `}
`
