import { ApolloProvider } from '@apollo/client'
import Client from '../src/apollo/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={Client}>
        <Component {...pageProps} />
    </ApolloProvider>

  )
}

export default MyApp
