import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    img {
      width: 20rem;
      height: 15rem;
    }
  `,

  normal: () => css`
    img {
      width: 35rem;
      height: 30rem;
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
