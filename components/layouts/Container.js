import { Fragment } from 'react'

import Header from './Header'
import Navbar from './Navbar'

function Container(props) {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<Header />
			<div className='flex'>
				<Navbar />
				<main className='flex-grow h-screen overflow-y-scroll hide-scrollbar select-none'>
					{props.children}
				</main>
			</div>
		</div>
	)
}

export default Container
