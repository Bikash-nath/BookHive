import Head from 'next/head'
import { Fragment } from 'react'

function DonatePage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>Donate</title>
				<meta name='description' content='Donate section' />
			</Head>
		</Fragment>
	)
}

export default DonatePage
