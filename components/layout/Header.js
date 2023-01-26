import Link from 'next/link'

import Logo from './logo'

function MainNavigation() {
	return (
		<header className='bg-black'>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/settings'>Settings</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
