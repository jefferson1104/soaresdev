import { useState } from 'react'

import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill'
import * as S from './styles'

const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false)
  const isBrowser = typeof window !== 'undefined'

  function toTop() {
    window.scrollTo({ top: 0 })
  }

  if (isBrowser) {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 500 ? setScrollState(true) : setScrollState(false)
    })
  }

  return (
    <S.Wrapper
      title="Subir para o topo"
      scrollState={scrollState}
      onClick={toTop}
    >
      <ArrowUpCircleFill />
    </S.Wrapper>
  )
}

export default ScrollToTop
