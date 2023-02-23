import Head from 'next/head'

import { UserContextProvider } from '../store/userContext'
import Container from '../components/layouts/Container'
import '../assets/globals.css'

function App({ Component, pageProps }) {
	return (
		<UserContextProvider>
			<Container>
				<Head>
					<meta
						name='viewport'
						// http-equiv='Content-Security-Policy'
						content='width=device-width, initial-scale=1, upgrade-insecure-requests'
					/>
				</Head>
				<Component {...pageProps} />
			</Container>
		</UserContextProvider>
	)
}

export default App
