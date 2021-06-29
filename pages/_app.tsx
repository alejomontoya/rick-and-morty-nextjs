import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon-32x32.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
