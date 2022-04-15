import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
      flex-direction: column;
  `}
`

export const LogoWrapper = styled.div`
  margin-bottom: 4rem;
`

export const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;

  h1 {
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
  }

  ${media.lessThan('medium')`
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  `}
`
