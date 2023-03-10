import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import UserContext from '../../store/userContext'
import SnackbarContext from '../../store/snackbarContext'
import SearchToggleContext from '../../store/searchToggleContext'
import SearchBar from '../SearchBar'
import LoginButton from '../ui/LoginButton'
import NavigateButtons from '../ui/NavigateButtons'
import HamburgerIcon from '../../assets/icons/HamburgerIcon'
import BellIcon from '../../assets/icons/BellIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import ChevronDoubleDownIcon from '../../assets/icons/ChevronDoubleDownIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import DarkmodeIcon from '../../assets/icons/DarkmodeIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'
// 	import SettingsIcon from '../../assets/icons/SettingsIcon'
// import { getUserProfile } from '../../api/userProfile'

function Header(props) {
	const [showNavBtn, setShowNavBtn] = useState(false)

	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const snackbarCtx = useContext(SnackbarContext)
	const { activeSearch, toggleSearch } = useContext(SearchToggleContext)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [userCtx.user])

	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeComplete', () => {
			setShowNavBtn(false)
			toggleSearch(false) //if (activeSearch)
		})

		return () => {
			router.events.off('routeChangeComplete', () => {})
		}
	}, [router.events])

	const currentRoute = router.pathname
	// const navRoutes = ['/', '/discover', '/library', '/account']
	const paths = ['login', 'signup', 'discover', 'search', 'read']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		return `flex items-center space-x-4 m-2 xl:my-3 cursor-pointer hover:text-white text-${
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
	// from-[#131a27] via-[#121927] to-[#111724]
	return (
		<>
			{showRoute && (
				<header
					ref={props.headerRef}
					className='hidden xl:flex flex-grow sticky top-0 justify-between items-center z-30 bg-gradient-to-r from-[#0C111B] to-[#030b17] bg-opacity-95'>
					<nav className='mx-auto p-1 w-screen'>
						{activeSearch ? (
							<div
								className={`flex items-center justify-center w-full cursor-pointer text-gray-300 hover:text-white space-x-2 px-1`}>
								<div className='w-1/2'>
									<SearchBar />
								</div>
							</div>
						) : (
							<div className='flex items-center justify-between text-white'>
								<div className='flex items-center mx-4 space-x-8 w-full'>
									<NavigateButtons />
								</div>

								<div className='flex right-8 gap-[0.1rem] md:gap-2 justify-end w-full'>
									<div
										className='flex items-center cursor-pointer p-2'
										onClick={() => {
											toggleSearch(true)
										}}>
										<SearchIcon dimensions='h-7 w-7' />
									</div>

									<div className='flex items-center space-x-3 cursor-pointer rounded-full pr-2'>
										{activeUser?.data ? (
											<>
												<div className='flex items-center cursor-pointer p-2 space-x-4 focus:bg-slate-800'>
													<BellIcon dimensions='h-7 w-7' />
												</div>
												<div className='inline-block rounded-xl relative'>
													<div
														className='grid grid-cols-2'
														onClick={() => setShowNavBtn(!showNavBtn)}>
														<div className='w-6 h-6 my-[0.1rem]'>
															{showNavBtn ? (
																<ChevronDoubleDownIcon className='h-7 w-7' />
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
																`absolute rounded-lg top-10 right-1 p-1 bg-[#192132] mt-2 border border-gray-900 bg-opacity-100 text-md` +
																(!showNavBtn && 'hidden')
															}>
															<Link href='/user/account'>
																<div
																	className={routeClassHandler(
																		'/account'
																	)}>
																	<ProfileIcon dimensions='h-7 w-7' />
																	<p className='w-[4.9rem]'>
																		Profile
																	</p>
																</div>
															</Link>
															<button
																id='theme-toggle'
																className='flex space-x-2 ml-2 w-full text-gray-500 hover:text-white'>
																<DarkmodeIcon dimensions='h-7 w-7' />
																<p className='w-[4.9rem]'>
																	Dark mode
																</p>
															</button>
															<div
																onClick={logOutHandler}
																className={routeClassHandler(
																	'/log-out'
																)}>
																<LogoutIcon dimensions='h-7 w-7' />
																<p className='w-[4.9rem]'>
																	Log out
																</p>
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
								</div>
							</div>
						)}
					</nav>
				</header>
			)}
		</>
	)
}

export default Header
