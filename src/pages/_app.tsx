import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { NextSeo } from 'next-seo'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SoaresDev</title>
        <meta name="theme-color" content="#1d1b27" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <NextSeo
        title="SoaresDev - Desenvolvimento de sistemas e apps."
        description="Desenvolvimento de aplicativos web, mobile, e-commerce, marketplace, websites, landing pages e SEO."
        canonical="https://soaresdev.com/"
        openGraph={{
          url: 'https://soaresdev.com/',
          title:
            'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',
          description:
            'Desenvolvimento de aplicativos web, mobile, e-commerce, marketplace, websites, landing pages e SEO.',
          images: [
            { url: 'https://soaresdev.com/img/soaresdev-banner-seo.png' }
          ],
          site_name: 'SoaresDev',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@jeffersonjr1104',
          site: 'https://soaresdev.com/',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
