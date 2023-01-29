import Head from 'next/head'
import { Fragment } from 'react'

import Footer from '../../components/layout/Footer'

function HelpPage(props) {
	return (
		<Fragment className='scroll-smooth'>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
			<Footer />
		</Fragment>
	)
}

export default HelpPage
