import dynamic from 'next/dynamic'
// import Base from 'templates/Base'
// import Hero from 'components/Hero'
// import Services from 'components/Services'
// import About from 'components/About'
// import Technologies from 'components/Technologies'
// import Portfolio from 'components/Portfolio'
// import Contact from 'components/Contact'

const Base = dynamic(() => import('templates/Base'), {
  ssr: false
})

const Hero = dynamic(() => import('components/Hero'), {
  ssr: false
})

const Services = dynamic(() => import('components/Services'), {
  ssr: false
})

const About = dynamic(() => import('components/About'), {
  ssr: false
})

const Technologies = dynamic(() => import('components/Technologies'), {
  ssr: false
})

const Portfolio = dynamic(() => import('components/Portfolio'), {
  ssr: false
})

const Contact = dynamic(() => import('components/Contact'), {
  ssr: false
})

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
