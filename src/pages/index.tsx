import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from 'templates/Home'
import LgpdConcepts from 'components/LgpdConcepts'

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-out' })
  }, [])

  return (
    <>
      <LgpdConcepts />
      <Home />
    </>
  )
}
