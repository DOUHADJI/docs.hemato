import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
import { ProcessesStepsContextProvider } from '../components/contexts/processesStepsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextUIProvider>
        <ProcessesStepsContextProvider>
          <Component {...pageProps} />
        </ProcessesStepsContextProvider>
        <ToastContainer />
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp
