import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../ui/Logo'
import LoginButton from '../ui/LoginButton'
import HamburgerIcon from '../../assets/icons/HamburgerIcon'
import BellIcon from '../../assets/icons/BellIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import LightmodeIcon from '../../assets/icons/LightmodeIcon'
import DarkmodeIcon from '../../assets/icons/DarkmodeIcon'

function Header() {
	const user = undefined

	const router = useRouter()
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<header className='flex flex-grow sticky top-0 justify-between items-center z-30 bg-black bg-opacity-95'>
					<nav className='container mx-auto p-2'>
						<div className='flex items-center justify-between'>
							<div className='flex lg:hidden items-center space-x-20 w-full'>
								<Logo size={50} />
							</div>

							<header className='flex right-8 opacity-100 gap-[0.1rem] md:gap-2 justify-end w-full'>
								<div className='flex items-center cursor-pointer p-2'>
									<SearchIcon dimensions='h-7 w-7' />
								</div>
								<button
									id='theme-toggle'
									className='p-2 mx-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm'>
									<LightmodeIcon />
									<DarkmodeIcon dimensions='h-7 w-7' />
								</button>

								<div className='flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2'>
									{user ? (
										<>
											<div className='flex items-center cursor-pointer p-2 space-x-4'>
												<BellIcon dimensions='h-7 w-7' />
											</div>
											<HamburgerIcon className=' h-7 w-7' />
											{user?.name ? (
												<img
													className='rounded-full p-1 w-8 h-8'
													src={user?.image}
													alt='user image'
												/>
											) : (
												<AccountIcon dimensions='h-8 w-8' />
											)}
										</>
									) : (
										<LoginButton />
									)}
								</div>
							</header>
						</div>
					</nav>
				</header>
			)}
		</>
	)
}

export default Header
