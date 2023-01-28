import { Fragment } from 'react'

import Header from './Header'
import Navbar from './Navbar'

function Layout(props) {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			<Navbar />
		</Fragment>
	)
}

export default Layout
