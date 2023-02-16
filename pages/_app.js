import Head from 'next/head'
import { UserContextProvider } from '../store/userContext'
import Container from '../components/layouts/Container'
import '../assets/globals.css'

function App({ Component, pageProps }) {
	return (
		<UserContextProvider>
			<Container>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
				</Head>
				<Component {...pageProps} />
			</Container>
		</UserContextProvider>
	)
}

export default App
