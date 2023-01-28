import Link from 'next/link'

import Logo from '../elements/Logo'

function Header() {
	return (
		<header className='bg-black flex flex-row justify-between'>
			<nav className='relative container mx-auto p-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-20'>
						<Link href='/'>
							<Logo />
						</Link>
					</div>

					<div className='flex items-center space-x-6 font-bold text-grayishViolet'>
						<div className='hover:text-veryDarkViolet'>Login</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
