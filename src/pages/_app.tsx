import type { AppProps } from 'next/app'
import GlobalCss from 'styles/globalCss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {GlobalCss}
    <Component {...pageProps} />
  </>
)

export default MyApp
