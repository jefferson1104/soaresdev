import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'color' | 'fullWidth'
>

const wrapperModifiers = {
  default: (theme: DefaultTheme) => css`
    width: 120px;
    padding: ${theme.paddings.small};
    font-size: ${theme.font.sizes.medium};
  `,
  small: (theme: DefaultTheme) => css`
    width: 100px;
    padding: ${theme.paddings.small};
    font-size: ${theme.font.sizes.xsmall};
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.mainBg};
    border: 1px solid ${theme.colors.primary};
    transition: 0.5s all ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
      background: transparent;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightBg};
    color: ${theme.colors.mainBg};
    border: 1px solid ${theme.colors.lightBg};
    transition: 0.5s all ease-in-out;

    &:hover {
      color: ${theme.colors.lightBg};
      background: transparent;
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth, hasIcon, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: ${theme.border.radius};

    cursor: pointer;

    ${!!color && wrapperModifiers[color](theme)};
    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${disabled && wrapperModifiers.disabled()}
  `}
`
