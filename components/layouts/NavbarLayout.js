import { Fragment } from 'react'

import Header from './Header'
import Navbar from './Navbar'

function Layout(props) {
	return (
		<main className='overflow-hidden h-screen'>
			<Navbar />
		</main>
	)
}

export default Layout
