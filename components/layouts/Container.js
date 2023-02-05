import { Fragment } from 'react'

import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'

function Container(props) {
	return (
		<div className='screen-gradient overflow-hidden m-0'>
			<NavbarSm />
			<div className='flex'>
				<NavbarLg />
				<main className='flex-grow h-screen pb-20 lg:pb-12 overflow-y-scroll select-none'>
					<Header />
					{props.children}
				</main>
			</div>
		</div>
	)
}

export default Container
