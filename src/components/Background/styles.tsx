import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
`

export const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  overflow: hidden;
  z-index: -1;

  filter: opacity(60%);

  #square1 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate3 3s ease infinite alternate;
  }

  #square2 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate3 3s ease infinite alternate;
  }

  #square3 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate3 3s ease infinite alternate;
  }

  #square4 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate1 2s ease infinite alternate;
  }

  #square5 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate1 2s ease infinite alternate;
  }

  #square6 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate1 2s ease infinite alternate;
  }

  #square7 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate1 2s ease infinite alternate;
  }

  #square8 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: rotate1 2s ease infinite alternate;
  }

  @keyframes rotate1 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate3 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }

  ${media.lessThan('medium')`
    margin-top: 6rem;
  `}
`
