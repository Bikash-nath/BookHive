import Head from 'next/head'

import Container from '../layouts/Container'
import '../assets/globals.css'

function App({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Component {...pageProps} />
		</Container>
	)
}

export default App
