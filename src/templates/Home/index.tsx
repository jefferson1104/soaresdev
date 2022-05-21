import Base from 'templates/Base'
import Main from 'components/Main'
import Services from 'components/Services'
import About from 'components/About'
import Technologies from 'components/Technologies'
import Portfolio from 'components/Portfolio'
import ContactForm from 'components/ContactForm'

const Home = () => {
  return (
    <Base>
      <Main />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <ContactForm />
    </Base>
  )
}

export default Home
