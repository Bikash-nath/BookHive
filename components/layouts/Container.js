import { Fragment } from 'react'

import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'

function Container(props) {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<Header />
			<NavbarSm />
			<div className='flex'>
				<NavbarLg />
				<main className='flex-grow h-screen overflow-y-scroll hide-scrollbar select-none'>
					{props.children}
				</main>
			</div>
		</div>
	)
}

export default Container
