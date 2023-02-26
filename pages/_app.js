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
					<meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
					<link href='/images/logo.png' rel='icon' type='image/png' sizes='64x64'></link>
				</Head>
				<Component {...pageProps} />
			</Container>
		</UserContextProvider>
	)
}

export default App
