import { useState } from 'react'

import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill'
import * as S from './styles'

const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false)

  function toTop() {
    window.scrollTo({ top: 0 })
  }

  window.addEventListener('scroll', () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)
  })

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
