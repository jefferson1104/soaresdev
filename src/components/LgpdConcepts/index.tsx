import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import * as S from './styles'

const LgpdConcepts = () => {
  const [cookies, setCookies] = useCookies()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflowY = cookies.LGPD_Concetps ? '' : 'hidden'
    cookies.LGPD_Concetps && setIsVisible(false)
  }, [cookies])

  function handleAcceptConcepts() {
    setIsVisible(false)
    setCookies('LGPD_Concetps', true)
  }

  return isVisible ? (
    <S.Wrapper>
      <S.Container>
        <p>
          Coletamos cookies para entregar o melhor funcionamento e segurança do
          nosso site. Com base neles, oferecemos também uma melhor experiência
          para você. Ao continuar navegando você concorda.
        </p>
        <Button onClick={handleAcceptConcepts}>Aceitar</Button>
      </S.Container>
    </S.Wrapper>
  ) : null
}

export default LgpdConcepts
