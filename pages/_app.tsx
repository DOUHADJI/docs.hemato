import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp
