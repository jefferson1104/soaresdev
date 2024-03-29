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
        title="SoaresDev - desenvolvimento de software"
        description="Transformação digital para seu negócio, desenvolvimento de aplicativos, e-commerce, websites, landing pages, marketplaces e muito mais."
        canonical="https://soaresdev.com/"
        openGraph={{
          type: 'website',
          url: 'https://soaresdev.com/',
          title: 'SoaresDev - desenvolvimento de software',
          description:
            'Transformação digital para seu negócio, desenvolvimento de aplicativos, e-commerce, websites, landing pages, marketplaces e muito mais.',
          images: [
            {
              url: 'https://soaresdev.com/img/soaresdev-banner-seo.png',
              width: 800,
              height: 420,
              alt: 'SoaresDev desenvolvimento de software'
            }
          ],
          site_name: 'SoaresDev',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@jeffersonjr1104',
          site: '@jeffersonjr1104',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
