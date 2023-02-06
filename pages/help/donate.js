import Head from 'next/head'
import { Fragment } from 'react'

function DonatePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Donate</title>
				<meta name='description' content='Donate section' />
			</Head>
			<div className='bg-gradient'>
				<h2>
					Your small, recurring donations will allow us to respond to requests
					more quickly and add new user-friendly features to the site.
				</h2>
				<h3>Consider supporting us via Patreon!</h3>
				<h3>Or make a one time donation via UPI</h3>
			</div>
		</Fragment>
	)
}

export default DonatePage
