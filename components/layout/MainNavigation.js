import Link from 'next/link'

function MainNavigation() {
	return (
		<nav>
			<div className='bg-black p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
				<div className='flex flex-row items-center justify-center space-x-4 lg:hidden md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					<div className='group'>
						<Link href='/'>Home</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/search'>Search</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/library'>Library</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/profile'>Profile</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
				</div>
				<div className='lg:flex flex-col items-center hidden justify-center row-span-full space-y-4 lg:flex-col md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					<div className='group'>
						<Link href='/'>Home</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/search'>Search</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/library'>Library</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/profile'>Profile</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default MainNavigation
