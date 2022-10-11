import Container from 'components/Container'
import Slider, { SliderSettings } from 'components/Slider'
import PortfolioCard from 'components/PortfolioCard'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'

const allProjects = [
  {
    image: 'projects/go_barber.png',
    title: 'Go Barber',
    description:
      'Sistema de agendamento para Barbearia, desenvolvido com ReactJS, React Native para mobile e uma API com NodeJS.',
    github: 'https://github.com/jefferson1104/goBarber'
  },
  {
    image: 'projects/wongames.png',
    title: 'Won Games',
    description: `Uma loja virtual de jogos, também contém DLC's, Demos, Packs e você pode comprar e baixar direto da sua casa.`,
    github: 'https://github.com/jefferson1104/wongames'
  },
  {
    image: 'projects/letmeask.png',
    title: 'Let Me Ask',
    description:
      'Um sistema de organização de perguntas, onde você pode criar uma sala e enviar a seus seguidores.',
    github: 'https://github.com/jefferson1104/letmeask-reactjs',
    link: 'https://letmeask-reactjs.vercel.app/'
  },
  {
    image: 'projects/esports-duo.png',
    title: 'E-sports Duo',
    description:
      'Plataforma sobre de jogos online, uma pagina na web e um aplicativo mobile onde jogadores publicam suas informações para encontrar outras pessoas e jogar em parceria',
    github: 'https://github.com/jefferson1104/esports-duo'
  },
  {
    image:
      'https://raw.githubusercontent.com/jefferson1104/study-platform-reactjs/main/src/assets/screenshots/screenshot-01.png',
    title: 'Event platform',
    description:
      'Este projeto é um evento de estudos, onde o aluno se inscreve, faz login e tem acesso a video aulas, foi desenvolvido com ReactJS e GraphQL.',
    github: 'https://github.com/jefferson1104/study-platform-reactjs',
    link: 'https://study-platform-reactjs.vercel.app/'
  },
  {
    image: 'projects/ig_news.png',
    title: 'IG News',
    description:
      'Uma plataforma de noticias, possui noticias gratuitas e uma versão de jornal digital pago.',
    link: 'https://ignews-nextjs.vercel.app/',
    github: 'https://github.com/jefferson1104/ignews-nextjs'
  },
  {
    image: 'projects/app-help.png',
    title: 'AppHelp',
    description:
      'Um aplicativo móvel para Android e iOS em demandas de suporte técnico, foi desenvolvido com tecnologia react-native.',
    github: 'https://github.com/jefferson1104/appHelp-reactNative'
  },
  {
    image: 'projects/blog_dev.png',
    title: 'Blog Dev Study',
    description:
      'Blog sobre desenvolvimento web, feito com GatsbyJS, GraphQL e muitas outras tecnologias.',
    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://nextjs-dev-studyblog.vercel.app/'
  },
  {
    image: 'projects/space_traveling.png',
    title: 'Space Traveling',
    description:
      'Site com dicas de viagens sobre lugares incriveis, desenvolvido com NextJS, Prismic CMS e muitas outras tecnologias.',
    github: 'https://github.com/jefferson1104/spaceTraveling-nextjs',
    link: 'https://space-traveling-nextjs.vercel.app/'
  },
  {
    image: 'projects/blog-soaresdev.png',
    title: 'Blog SoaresDev',
    description:
      'Blog com dicas, tutoriais e guias rápidos sobre desenvolvimento web, desenvolvido com as tecnologias GatsbyJS, GraphQL, Markedown e outras.',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image: 'projects/proffy.png',
    title: 'Proffy',
    description:
      'Uma plataforma de ensino onde professores criam anuncios para alunos escolher e agendar aulas.',
    github: 'https://github.com/jefferson1104/Proffy'
  },
  {
    image: 'projects/dashgo.png',
    title: 'Dashgo',
    description:
      'Exemplo de uma dashboard com integrações e validações de formulário utilizando React Hook Forms e Yup.',
    github: 'https://github.com/jefferson1104/dashgo-nextjs'
  }
]

const settings: SliderSettings = {
  slidesToShow: 3.3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: false,
  speed: 900,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

const Portfolio = () => {
  return (
    <S.Wrapper id="portfolio">
      <h2 data-aos="fade-down">Portfolio</h2>
      <Container>
        <S.PortfolioContent data-aos="fade-up">
          <S.AllProjects>
            <Slider settings={settings}>
              {allProjects.map(
                (project, index) =>
                  project && (
                    <PortfolioCard
                      key={index}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      github={project.github}
                      link={project.link}
                    />
                  )
              )}
            </Slider>
          </S.AllProjects>
        </S.PortfolioContent>
      </Container>
    </S.Wrapper>
  )
}

export default Portfolio
