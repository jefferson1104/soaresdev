import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacings.huge} 0;

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

        svg {
          margin-right: 10px;
          color: ${theme.colors.primary};
        }

        & + a {
          margin-top: 30px;
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

export const Form = styled.form`
  ${({ theme }) => css`
    padding: 20px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.darkGray};
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

    ${media.lessThan('small')`
      padding: 0;
      border-radius:  0;
      border: 0;
      box-shadow: unset;
    `}
  `}
`

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const InputContainer = styled.div`
  width: 320px;
  position: relative;

  ${media.lessThan('medium')`
    width: 350px;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    left: 10px;
    top: 14px;
    transition: all 0.2s;
    padding: 0 2px;
    z-index: 1;
    color: ${theme.colors.darkBlue};
    opacity: 0;

    &::before {
      content: '';
      height: 5px;
      background: ${theme.colors.darkGray};
      position: absolute;
      left: 0px;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.secondary};
    background: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    transition: ${theme.transition.default};
    color: ${theme.colors.white};

    &:focus {
      border: 2px solid ${theme.colors.primary};
    }

    &:focus + .filled {
      top: -10px;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};
      opacity: 1;
    }

    &::placeholder {
      font-size: ${theme.font.sizes.small};
      opacity: 1;
      transition: ${theme.transition.default};
    }

    &:focus::placeholder {
      opacity: 1;
    }
  `}
`

export const TextareaContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  ${media.lessThan('medium')`
    width: 350px;
  `}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.secondary};
    background: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    transition: ${theme.transition.default};
    color: ${theme.colors.white};

    &:focus {
      border: 2px solid ${theme.colors.primary};
    }

    &:focus + .filled {
      top: -10px;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xsmall};
      opacity: 1;
    }

    &::placeholder {
      font-size: 16px;
      opacity: 1;
      transition: ${theme.transition.default};
    }

    &:focus::placeholder {
      opacity: 1;
    }
  `}
`

export const ButtonForm = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: ${theme.spacings.xxsmall};
    border: 0;
    border-radius: ${theme.border.radius};

    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.default};
    cursor: pointer;

    &:hover {
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      background: transparent;
    }

    svg {
      margin-right: 2px;
    }

    ${media.lessThan('medium')`
      width: 350px;
    `}
  `}
`
