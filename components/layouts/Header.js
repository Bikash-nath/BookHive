import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../ui/Logo'
import AccountIcon from '../ui/icons/AccountIcon'
import HamburgerIcon from '../ui/icons/HamburgerIcon'
import BellIcon from '../ui/icons/BellIcon'
import SearchIcon from '../ui/icons/SearchIcon'
import LightmodeIcon from '../ui/icons/LightmodeIcon'
import DarkmodeIcon from '../ui/icons/DarkmodeIcon'
import HeadphoneIcon from '../ui/icons/HeadphoneIcon'

function Header() {
	const user = ''
	const router = useRouter()
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<header className='flex flex-row flex-grow sticky top-0 justify-between bg-black'>
					<nav className='relative container mx-auto p-2'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-20'>
								<Link href='/'>
									<Logo size={50} />
								</Link>
							</div>

							<header className='flex flex-row absolute top-5 right-8 opacity-100 gap-2'>
								<div className='flex items-center cursor-pointer p-2'>
									<SearchIcon dimensions='h-7 w-7' />
								</div>
								<button
									id='theme-toggle'
									className='p-2 mx-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm'>
									<LightmodeIcon />
									<DarkmodeIcon dimensions='h-7 w-7' />
								</button>

								<div className='flex items-center bg-[#2e2e2e] space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2'>
									{user?.name ? (
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
										<Link href='/user/login'>
											<button className='flex items-center space-x-2 p-2 font-bold text-grayishViolet'>
												<AccountIcon dimensions='h-7 w-7' />
												<div className='text-white hover:text-veryDarkViolet'>
													Login
												</div>
											</button>
										</Link>
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
