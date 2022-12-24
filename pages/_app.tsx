import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import { useStore } from '../src/app'
import { Provider } from 'react-redux'
import { Header } from '../src/widgets/header'

const montserrat = Montserrat({ weight: ['400', '500','600', '700'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  return <div className={montserrat.className}>
          <Provider store={store}>
          <Header/>
            <Component {...pageProps} />
          </Provider>
        </div>
}
