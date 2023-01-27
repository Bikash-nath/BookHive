import { Fragment } from 'react'

import Header from './Header'
import MainNavigation from './MainNavigation'

function Layout(props) {
	return (
		<Fragment>
			<Header />
			<main>{props.children}</main>
			<MainNavigation />
		</Fragment>
	)
}

export default Layout
