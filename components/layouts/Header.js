import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Router from 'next/router'

import { useContext } from 'react'
import UserContext from '../../store/userContext'
import SnackbarContext from '../../store/snackbarContext'
import SearchBar from '../SearchBar'
import Logo from '../ui/Logo'
import LoginButton from '../ui/LoginButton'
import HamburgerIcon from '../../assets/icons/HamburgerIcon'
import BellIcon from '../../assets/icons/BellIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
import BarArrowIcon from '../../assets/icons/BarArrowIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import DarkmodeIcon from '../../assets/icons/DarkmodeIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'
// import { getUserProfile } from '../../api/userProfile'
// import LightmodeIcon from '../../assets/icons/LightmodeIcon'

function Header(props) {
	const [showNavBtn, setShowNavBtn] = useState(false)
	const [windowWidth, setWindowWidth] = useState(null)
	const [history, setHistory] = useState(null)
	const { searchToggle, setSearchToggle } = props
	// const [opacity, setOpacity] = useState(70)

	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup', 'discover', 'search']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const snackbarCtx = useContext(SnackbarContext)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [activeUser])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
			setHistory(window.history)
		}
	}, [])

	const routeClassHandler = (route) => {
		return `flex items-center space-x-4 m-2 lg:my-3 cursor-pointer hover:text-white text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white'
				: 'gray-400'
		}`
	}

	const logOutHandler = (e) => {
		e.preventDefault()
		userCtx.removeUser()
		router.push('/')
		snackbarCtx.addMessage({ title: 'Log out successfull' })
	}

	return (
		<>
			{showRoute && (
				<header className='flex flex-grow sticky top-0 justify-between items-center z-30 bg-black bg-opacity-95'>
					<nav className='container mx-auto p-1 w-screen'>
						{searchToggle ? (
							<div
								className={`flex items-center justify-center w-full cursor-pointer text-gray-300 hover:text-white space-x-2 mx-2${
									searchToggle && 'bg-opacity-50'
								}`}>
								<div className='w-full sm:w-60 md:w-1/2'>
									<SearchBar
										inputToggle={searchToggle}
										setInputToggle={setSearchToggle}
									/>
								</div>
							</div>
						) : (
							<div className='flex items-center justify-between text-white'>
								<div className='flex lg:hidden items-center space-x-20 w-full'>
									<Logo size={44} />
								</div>
								<div className='hidden lg:flex items-center mx-4 space-x-8 w-full'>
									<button
										className='rounded-full p-[0.2rem] text-gray-300 hover:text-white bg-gray-700'
										onClick={() => router.back()}>
										<ChevronLeftIcon dimensions='h-6 w-6' />
									</button>
									<button
										className='rounded-full p-[0.2rem] text-gray-300 hover:text-white bg-gray-700'
										onClick={(e) => {
											e.preventDefault()
											history && history.forward()
										}}>
										<ChevronRightIcon dimensions='h-6 w-6' />
									</button>
								</div>

								<header className='flex right-8 gap-[0.1rem] md:gap-2 justify-end w-full'>
									<div
										className='flex items-center cursor-pointer p-2'
										onClick={() => {
											setSearchToggle(!searchToggle)
										}}>
										<SearchIcon dimensions='h-7 w-7' />
									</div>

									<div className='flex items-center space-x-3 cursor-pointer rounded-full pr-2 md:pr-4'>
										{activeUser?.data ? (
											<>
												<div className='flex items-center cursor-pointer p-2 space-x-4 focus:bg-slate-800'>
													<BellIcon dimensions='h-7 w-7' />
												</div>
												<div className='inline-block rounded-xl relative'>
													<div
														className='grid grid-cols-2'
														onClick={() => setShowNavBtn(!showNavBtn)}>
														<div className='w-6 h-6 lg:my-[0.1rem]'>
															{showNavBtn ? (
																<BarArrowIcon className='h-7 w-7' />
															) : (
																<HamburgerIcon className='h-7 w-7' />
															)}
														</div>
														{activeUser?.data.image ? (
															<img
																className='rounded-full w-7 h-7'
																src={activeUser?.data.image}
																alt='user image'
															/>
														) : (
															<AccountIcon dimensions='h-7 w-7' />
														)}
													</div>
													{showNavBtn && (
														<div
															className={
																`absolute rounded-lg top-10 right-0 md:right-1 p-2 md:p-3 bg-[#121212] mt-2 border border-gray-900 bg-opacity-100 font-mono text-base lg:text-lg lg:w-24` +
																(!showNavBtn && 'hidden')
															}>
															<Link href='/user/profile'>
																<div
																	className={routeClassHandler(
																		'/profile'
																	)}>
																	<ProfileIcon dimensions='h-7 w-7' />
																	<p>Profile</p>
																</div>
															</Link>
															<button
																id='theme-toggle'
																className='flex space-x-2 ml-2 w-full text-gray-500 dark:text-gray-400 hover:text-white'>
																<DarkmodeIcon dimensions='h-7 w-7' />
																<p>Dark mode</p>
															</button>
															{windowWidth < 1024 && (
																<>
																	<Link href='/user/settings'>
																		<div
																			className={routeClassHandler(
																				'/settings'
																			)}>
																			<SettingsIcon dimensions='h-7 w-7' />
																			<p>Settings</p>
																		</div>
																	</Link>
																	<hr className='border-t-[0.1px] border-gray-800' />
																	<Link href='/help/faq'>
																		<div
																			className={routeClassHandler(
																				'/faq'
																			)}>
																			<HelpIcon dimensions='h-7 w-7' />
																			<p>Help</p>
																		</div>
																	</Link>
																	<Link href='/help/donate'>
																		<div
																			className={routeClassHandler(
																				'/donate'
																			)}>
																			<FeedbackIcon dimensions='h-7 w-7' />
																			<p>Feedback</p>
																		</div>
																	</Link>
																	<hr className='border-t-[0.1px] border-gray-800' />
																</>
															)}
															<div
																onClick={logOutHandler}
																className={routeClassHandler(
																	'/log-out'
																)}>
																<LogoutIcon dimensions='h-7 w-7' />
																<p>Log out</p>
															</div>
														</div>
													)}
												</div>
											</>
										) : (
											<div className='transform scale-90'>
												<LoginButton />
											</div>
										)}
									</div>
								</header>
							</div>
						)}
					</nav>
				</header>
			)}
		</>
	)
}

export default Header
