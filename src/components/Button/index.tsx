import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'default' | 'small'
  color?: 'primary' | 'secondary'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    size = 'default',
    color = 'primary',
    fullWidth = false,
    children,
    icon,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      color={color}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
