import Base from 'templates/Base'
import Main from 'components/Main'
import Services from 'components/Services'
import About from 'components/About'
import Technologies from 'components/Technologies'

const Home = () => {
  return (
    <Base>
      <Main />
      <Services />
      <About />
      <Technologies />
    </Base>
  )
}

export default Home
