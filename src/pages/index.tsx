import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from 'templates/Home'

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-out' })
  }, [])

  return <Home />
}
