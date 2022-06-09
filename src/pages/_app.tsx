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
        title="SoaresDev - Transformação digital para o seu produto ou serviço."
        description="Conta com a gente para o desenvolvimento de aplicativos web, app mobile, e-commerce, marketplace, websites, landing pages e SEO do seu negócio."
        canonical="https://soaresdev.com/"
        openGraph={{
          type: 'website',
          url: 'https://soaresdev.com/',
          title:
            'SoaresDev - Transformação digital para o seu produto ou serviço.',
          description:
            'Conta com a gente para o desenvolvimento de aplicativos web, app mobile, e-commerce, marketplace, websites, landing pages e SEO do seu negócio.',
          images: [
            {
              url: 'https://soaresdev.com/img/soaresdev-banner-seo.png',
              width: 800,
              height: 600,
              alt: 'SoaresDev Banner',
              type: 'image/png'
            },
            {
              url: 'https://soaresdev.com/img/soaresdev-banner-seo.png',
              width: 900,
              height: 800,
              alt: 'SoaresDev Banner',
              type: 'image/png'
            }
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
