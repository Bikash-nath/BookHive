import Link from 'next/link'

function MainNavigation() {
	return (
		<nav>
			<div class='bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
				<div class='flex flex-row items-center justify-center space-y-3 md:flex-col md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					<div class='group'>
						<Link href='/'>Home</Link>
						<div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div class='group'>
						<Link href='/search'>Search</Link>
						<div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div class='group'>
						<Link href='/user/library'>Library</Link>
						<div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div class='group'>
						<Link href='/user/profile'>Profile</Link>
						<div class='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default MainNavigation
