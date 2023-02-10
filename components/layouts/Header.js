import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from '../ui/Logo'
import LoginButton from '../ui/LoginButton'
import HamburgerIcon from '../../assets/icons/HamburgerIcon'
import BellIcon from '../../assets/icons/BellIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon'
// import LightmodeIcon from '../../assets/icons/LightmodeIcon'
import DarkmodeIcon from '../../assets/icons/DarkmodeIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'
import SearchBar from '../SearchBar'

function Header(props) {
	const [SearchBtn, setSearchBtn] = useState(false)
	const user = 1
	const windowWidth = 720
	// const windowWidth = window.innerHeight
	// const pageHeight = useState(props.pageRef.current.clientHeight)
	const [opacity, setOpacity] = useState(70)

	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup', 'discover']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		return `flex items-center space-x-4 m-2 hover:text-white text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white'
				: 'gray-400'
		}`
	}

	return (
		<>
			{showRoute && (
				<header className='flex flex-grow sticky top-0 justify-between items-center z-30 bg-black bg-opacity-95'>
					<nav className='container mx-auto p-1'>
						{!Search || windowWidth > 720 ? (
							<div className='flex items-center justify-between text-white'>
								<div className='flex lg:hidden items-center space-x-20 w-full'>
									<Logo size={50} />
								</div>

								<header className='flex right-8 gap-[0.1rem] md:gap-2 justify-end w-full'>
									{Search ? (
										<SearchBar />
									) : (
										<div className='flex items-center cursor-pointer p-2'>
											<SearchIcon dimensions='h-7 w-7' />
										</div>
									)}

									<div className='flex items-center space-x-3 cursor-pointer rounded-full pr-2 md:pr-4'>
										{user ? (
											<>
												<div className='flex items-center cursor-pointer p-2 space-x-4 focus:bg-slate-800'>
													<BellIcon dimensions='h-7 w-7' />
												</div>
												<div className='dropdown inline-block rounded-xl relative'>
													<div className='grid grid-cols-2'>
														<HamburgerIcon className='h-7 w-7' />
														{user?.image ? (
															<img
																className='rounded-full p-1 w-8 h-8'
																src={user?.image}
																alt='user image'
															/>
														) : (
															<AccountIcon dimensions='h-7 w-7' />
														)}
													</div>
													<div className='dropdown-menu absolute hidden rounded-lg top-10 md:top-6 right-0 md:right-1 p-2 md:p-3 bg-[#121212] mt-2 border border-gray-900 bg-opacity-100'>
														<Link href='/user/profile'>
															<div className={routeClassHandler('/profile')}>
																<AccountIcon dimensions='h-7 w-7' />
																<p className='font-mono text-base'>Profile</p>
															</div>
														</Link>
														<button
															id='theme-toggle'
															className='flex space-x-2 ml-2 text-gray-500 dark:text-gray-400 hover:text-white'>
															<DarkmodeIcon dimensions='h-7 w-7' />
															<p className='font-mono text-base'>Dark mode</p>
														</button>
														{windowWidth < 1024 && (
															<>
																<Link href='/user/settings'>
																	<div className={routeClassHandler('/settings')}>
																		<SettingsIcon dimensions='h-7 w-7' />
																		<p className='font-mono text-base'>Settings</p>
																	</div>
																</Link>
																<hr className='border-t-[0.1px] border-gray-800' />
																<Link href='/help/faq'>
																	<div className={routeClassHandler('/faq')}>
																		<HelpIcon dimensions='h-7 w-7' />
																		<p className='font-mono text-base'>Help</p>
																	</div>
																</Link>
																<Link href='/help/donate'>
																	<div className={routeClassHandler('/donate')}>
																		<FeedbackIcon dimensions='h-7 w-7' />
																		<p className='font-mono text-base'>Feedback</p>
																	</div>
																</Link>
																<hr className='border-t-[0.1px] border-gray-800' />
															</>
														)}
														<Link href='/user/log-out'>
															<div className={routeClassHandler('/log-out')}>
																<LogoutIcon dimensions='h-7 w-7' />
																<p className='font-mono text-base'>Log out</p>
															</div>
														</Link>
													</div>
												</div>
											</>
										) : (
											<div className='transform scale-80'>
												<LoginButton />
											</div>
										)}
									</div>
								</header>
							</div>
						) : (
							<>
								<ArrowBackIcon />
								<SearchBar />
							</>
						)}
					</nav>
				</header>
			)}
		</>
	)
}

export default Header
