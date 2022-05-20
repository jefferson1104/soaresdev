import Slider, { SliderSettings } from 'components/Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { useMediaQuery } from 'react-responsive'

import Container from 'components/Container'
import PortfolioCard from 'components/PortfolioCard'

import * as S from './styles'

const mainProjects = [
  {
    image: 'https://blog.soaresdev.com/assets/img/soaresdev-social-banner.png',
    title: 'Blog SoaresDev',
    description:
      'Blog sobre desenvolvimento web, feito com GatsbyJS, GraphQL e muitas outras tecnologias.',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image:
      'https://s3.amazonaws.com/ltm.ragnarok.tenants.prod.40455/iupp-banner-open-graph.png',
    title: 'Itaú iupp',
    description:
      'Marketplace sobre programa de pontos do banco Itaú, possui contexto de compras com cartão e pontos.',

    link: 'https://www.iupp.com.br'
  }
]

const allProjects = [
  {
    image:
      'https://raw.githubusercontent.com/jefferson1104/goBarber/master/assets/images/screenshots/screenshot_web_01.png',
    title: 'GoBarber',
    description: 'Sistema de agendamento para Barbearia',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image:
      'https://www.mundodomarketing.com.br/assets/img/lancamentos/thumb/fanlab.png',
    title: 'Itaú iupp',
    description:
      'Marketplace sobre programa de pontos do banco Itaú, possui contexto de compras com cartão e pontos.',

    link: 'https://www.iupp.com.br'
  },
  {
    image:
      'https://res.cloudinary.com/wongames/image/upload/v1619472565/won_games_og_fc420ed09b.png',
    title: 'Blog SoaresDev',
    description:
      'Blog sobre desenvolvimento web, feito com GatsbyJS, GraphQL e muitas outras tecnologias.',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image:
      'https://www.mundodomarketing.com.br/assets/img/lancamentos/thumb/fanlab.png',
    title: 'Itaú iupp',
    description:
      'Marketplace sobre programa de pontos do banco Itaú, possui contexto de compras com cartão e pontos.',

    link: 'https://www.iupp.com.br'
  },
  {
    image:
      'https://res.cloudinary.com/wongames/image/upload/v1619472565/won_games_og_fc420ed09b.png',
    title: 'Blog SoaresDev',
    description:
      'Blog sobre desenvolvimento web, feito com GatsbyJS, GraphQL e muitas outras tecnologias.',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image:
      'https://www.mundodomarketing.com.br/assets/img/lancamentos/thumb/fanlab.png',
    title: 'Itaú iupp',
    description:
      'Marketplace sobre programa de pontos do banco Itaú, possui contexto de compras com cartão e pontos.',

    link: 'https://www.iupp.com.br'
  },
  {
    image:
      'https://res.cloudinary.com/wongames/image/upload/v1619472565/won_games_og_fc420ed09b.png',
    title: 'Blog SoaresDev',
    description:
      'Blog sobre desenvolvimento web, feito com GatsbyJS, GraphQL e muitas outras tecnologias.',

    github: 'https://github.com/jefferson1104/blog-soaresdev',
    link: 'https://blog.soaresdev.com/'
  },
  {
    image:
      'https://www.mundodomarketing.com.br/assets/img/lancamentos/thumb/fanlab.png',
    title: 'Itaú iupp',
    description:
      'Marketplace sobre programa de pontos do banco Itaú, possui contexto de compras com cartão e pontos.',

    link: 'https://www.iupp.com.br'
  }
]

const settings: SliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 900,
  autoplay: true,
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
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <Container>
      <S.Wrapper>
        <h2>Portfolio</h2>
        <div>
          {isMobile ? (
            ''
          ) : (
            <S.MainProjects>
              {mainProjects.map(
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
            </S.MainProjects>
          )}
        </div>

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
                    size="small"
                  />
                )
            )}
          </Slider>
        </S.AllProjects>
      </S.Wrapper>
    </Container>
  )
}

export default Portfolio
