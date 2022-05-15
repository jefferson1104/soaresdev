import styled, { css } from 'styled-components'

type WrapperProps = {
  scrollState: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, scrollState }) => css`
    display: ${scrollState ? 'block' : 'none'};
    color: ${theme.colors.white};
    position: fixed;
    bottom: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    z-index: ${theme.layers.alwaysOnTop};
    cursor: pointer;
  `}

  svg {
    width: 40px;
    height: 40px;
  }
`
