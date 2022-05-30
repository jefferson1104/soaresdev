import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;

    width: 120px;
    height: 75px;

    > p {
      font-size: ${theme.font.sizes.mediumSmall};
      text-transform: uppercase;
      margin: auto;
    }

    .ball {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${theme.colors.white};
      animation: bounce 0.5s alternate infinite;

      & + .ball {
        margin-left: 10px;
      }
    }

    .ball:nth-child(2) {
      animation-delay: 0.16s;
    }

    .ball:nth-child(3) {
      animation-delay: 0.32s;
    }

    @keyframes bounce {
      from {
        transform: scaleX(1.25);
      }

      to {
        transform: translateY(-50%) scaleX(1);
      }
    }
  `}
`
