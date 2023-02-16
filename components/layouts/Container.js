import { Fragment } from 'react'

import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'

function Container(props) {
	// const pageRef = useRef()

	return (
		<div className='overflow-hidden m-0'>
			<div className='flex'>
				<NavbarLg />
				<main className='flex-grow h-screen relative bg-[#121212] overflow-y-scroll select-none p-0 m-0'>
					<Header />
					{props.children}
				</main>
			</div>
			<NavbarSm />
		</div>
	)
}

export default Container
