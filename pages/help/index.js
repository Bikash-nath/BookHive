import Head from 'next/head'
import { Fragment } from 'react'

function HelpPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
		</Fragment>
	)
}

export default HelpPage
