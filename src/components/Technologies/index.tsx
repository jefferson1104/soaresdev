/* eslint-disable prettier/prettier */
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Container from 'components/Container'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const mainTechnologies = [
  {
    title: 'NodeJS',
    subtitle: 'BACK-END',
    description:
      'Node.js, an event-driven asynchronous JavaScript execution environment, is designed to development of applications with high scalability, good flexibility.'
  },
  {
    title: 'ReactJS',
    subtitle: 'FRONT-END',
    description:
      'React is an open source JavaScript library focused on creating user interfaces on web pages. its main objective is to be fast and scalable, and it can also.'
  },
  {
    title: 'React Native',
    subtitle: 'MOBILE',
    description:
      'React Native is a framework based on the already acclaimed React, developed by the Facebook team, which enables the development of mobile applications.'
  }
]

const allTechnologies = [
  { img: 'img/technologies/html.svg', description: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { img: 'img/technologies/css.svg', description: 'CSS3', link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
  { img: 'img/technologies/javascript.svg', description: 'Javascript', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { img: 'img/technologies/typescript.svg', description: 'TypeScript', link: 'https://www.typescriptlang.org/docs/' },
  { img: 'img/technologies/git-svgrepo-com.svg', description: 'GIT', link: 'https://git-scm.com/' },
  { img: 'img/technologies/reactjs.svg', description: 'ReactJS', link: 'https://pt-br.reactjs.org/docs/getting-started.html' },
  { img: 'img/technologies/redux.svg', description: 'Redux', link: 'https://redux.js.org/' },
  { img: 'img/technologies/gatsbyjs.svg', description: 'GatsbyJS', link: 'https://www.gatsbyjs.com/docs/' },
  { img: 'img/technologies/nextjs.svg', description: 'NextJS', link: 'https://nextjs.org/docs' },
  { img: 'img/technologies/nodejs.svg', description: 'NodeJS', link: 'https://nodejs.org/en/docs/' },
  { img: 'img/technologies/strapi.svg', description: 'Strapi', link: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html' },
  { img: 'img/technologies/nestjs.svg', description: 'NestJS', link: 'https://docs.nestjs.com/' },
  { img: 'img/technologies/graphql.svg', description: 'Graphql', link: 'https://graphcdn.io/' },
  { img: 'img/technologies/swagger.svg', description: 'Swagger', link: 'https://swagger.io/docs/' },
  { img: 'img/technologies/php.svg', description: 'PHP', link: 'https://www.php.net/docs.php' },
  { img: 'img/technologies/laravel.svg', description: 'Laravel', link: 'https://laravel.com/docs/9.x/installation' },
  { img: 'img/technologies/bootstrap.svg', description: 'Bootstrap', link: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' },
  { img: 'img/technologies/chakraui.svg', description: 'Chakra-ui', link: 'https://chakra-ui.com/' },
  { img: 'img/technologies/tailwindcss.svg', description: 'TailwindCSS', link: 'https://tailwindcss.com/' },
  { img: 'img/technologies/markdown.svg', description: 'Markdown', link: 'https://www.markdownguide.org/basic-syntax/' },
  { img: 'img/technologies/styled-components.svg', description: 'styled-components', link: 'https://styled-components.com/' },
  { img: 'img/technologies/mongodb.svg', description: 'MongoDB', link: 'https://www.mongodb.com/docs/' },
  { img: 'img/technologies/mysql.svg', description: 'MySQL', link: 'https://dev.mysql.com/doc/' },
  { img: 'img/technologies/postgresql.svg', description: 'PostgreSQL', link: 'https://www.postgresql.org/docs/' },
  { img: 'img/technologies/microsoft-sql-server.svg', description: 'Microsoft SQL Server', link: 'https://docs.microsoft.com/pt-br/sql/sql-server/?view=sql-server-ver15' },
  { img: 'img/technologies/firebase.svg', description: 'Firebase', link: 'https://firebase.google.com/docs' },
  { img: 'img/technologies/aws.svg', description: 'AWS', link: 'https://docs.aws.amazon.com/' },
  { img: 'img/technologies/azure.svg', description: 'Azure', link: 'https://docs.microsoft.com/pt-br/azure/?product=popular' },
  { img: 'img/technologies/gcp.svg', description: 'CGP', link: 'https://cloud.google.com/' },
  { img: 'img/technologies/digital-ocean.svg', description: 'Digital Ocean', link: 'https://www.digitalocean.com/' },
  { img: 'img/technologies/docker.svg', description: 'Docker', link: 'https://docs.docker.com/' },
  { img: 'img/technologies/kubernetes.svg', description: 'Kubernetes', link: 'https://kubernetes.io/pt-br/' },
  { img: 'img/technologies/terraform.svg', description: 'Terraform', link: 'https://www.terraform.io/' },
  { img: 'img/technologies/datocms.svg', description: 'DatoCMS', link: 'https://www.datocms.com/' },
  { img: 'img/technologies/prismic.svg', description: 'Prismic', link: 'https://prismic.io/ ' },
  { img: 'img/technologies/heroku.svg', description: 'Heroku', link: 'https://www.heroku.com/' },
  { img: 'img/technologies/netlify.svg', description: 'Netlify', link: 'https://www.netlify.com/' },
  { img: 'img/technologies/vercel.svg', description: 'Vercel', link: 'https://vercel.com/' }
]

const settings: SliderSettings = {
  slidesToShow: 10,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        infinite: true,

      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

const Technologies = () => {
  return (
    <S.Wrapper id="technologies">
      <Container>
        <S.Content>
          <h2 data-aos="fade-up">Tecnologias</h2>

          <S.Cards data-aos="fade-down">
            {mainTechnologies.map((technology, index) => {
              return (
                <S.Card key={index}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <S.CardContent>
                    <h3>{technology.title}</h3>
                    <h4>{technology.subtitle}</h4>
                    <p>{technology.description}</p>
                  </S.CardContent>
                </S.Card>
              )
            })}
          </S.Cards>

          <S.Technologies data-aos="fade-up">
            <Slider settings={settings}>
              {allTechnologies.map((technology, index) => {
                return (
                  <S.TechnologyCard key={index}>
                    <img src={technology.img} alt={technology.description} />
                    <p>{technology.description}</p>
                  </S.TechnologyCard>
                )
              })}
            </Slider>
          </S.Technologies>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Technologies
