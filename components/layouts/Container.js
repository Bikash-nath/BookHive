import { Fragment } from 'react'

import Header from './Header'
import Navbar from './Navbar'

function Container(props) {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			<Navbar />
		</Fragment>
	)
}

export default Container
