import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Container from 'components/Container'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // height: 100vh;
`

export const MenuContainer = styled(Container).attrs({ as: 'header' })`
  ${media.greaterThan('small')`
    max-width: 185rem;
  `}
`

export const Content = styled.main`
  ${({ theme }) => css`
    // flex: 1 0 auto;
    // margin-top: ${theme.spacings.xxlarge};
  `}
`

// export const SectionFooter = styled.section`
//   ${({ theme }) => css`
//     margin-top: ${theme.spacings.large};
//     padding-bottom: ${theme.spacings.xsmall};
//     padding-top: ${theme.spacings.xxlarge};
//     background-color: ${theme.colors.white};
//     clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

//     ${media.greaterThan('medium')`
//       padding-top: calc(${theme.spacings.xxlarge} * 2);
//       clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
//     `}
//   `}
// `
