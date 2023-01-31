import { Fragment } from 'react'

import Header from './Header'
import Navbar from './Navbar'

function NavbarSm(props) {
	return (
		<div className='bg-red-700 space-y-2 shadow-2xl rounded-xl'>
			<div className='flex flex-row items-center justify-center space-x-4 md:hidden md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
				<div className='group z-10'>
					<Link href='/'>
						<HomeIcon dimensions='h-6 w-6' />
						Home
					</Link>
					<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
				</div>
				<div className='group'>
					<Link href='/search'>
						<DiscoverIcon dimensions='h-6 w-6' />
						Discover
					</Link>
					<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
				</div>
				<div className='group'>
					<Link href='/user/library'>
						<LibraryIcon dimensions='h-6 w-6' />
						Library
					</Link>
					<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
				</div>
				<div className='group'>
					<Link href='/user/profile'>
						<AccountIcon dimensions='h-6 w-6' />
						Profile
					</Link>
					<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
				</div>
			</div>
		</div>
	)
}

export default NavbarSm
