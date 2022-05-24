import Base from 'templates/Base'
import Hero from 'components/Hero'
import Services from 'components/Services'
import About from 'components/About'
import Technologies from 'components/Technologies'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'

const Home = () => {
  return (
    <Base>
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
    </Base>
  )
}

export default Home
