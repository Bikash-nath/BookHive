import { Fragment } from 'react'

import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'

function Container(props) {
	return (
		<div className='overflow-hidden m-0'>
			<div className='flex'>
				<NavbarLg />
				<main className='flex-grow h-screen bg-gray-100 overflow-y-scroll select-none'>
					<Header />
					{props.children}
				</main>
			</div>
			<NavbarSm />
		</div>
	)
}

export default Container
