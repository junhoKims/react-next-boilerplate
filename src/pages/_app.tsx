import type { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalCss from 'styles/globalCss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
    {GlobalCss}
    <Component {...pageProps} />
    <CssBaseline />
  </>
)

export default MyApp
