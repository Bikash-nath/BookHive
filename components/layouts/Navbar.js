import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import PlusCircleIcon from '../../assets/icons/PlusCircleIcon'

function Navbar(props) {
	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		// console.log('router', router.asPath, router.pathname)
		return `font-medium text-xs md:sm-md mt-[0.1rem] group text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route ? 'white' : 'gray-400'
		}`
	}

	return (
		showRoute && (
			<div
				className='flex items-center justify-between fixed bottom-0 z-20 w-screen bg-[#030b17] shadow-inner shadow-gray-800 py-[.45rem] md:py-2 px-1 ms:px-3 xs:px-4 sm:px-6 md:px-10'
				ref={props.navbarRef}>
				<div className={routeClassHandler('/')}>
					<Link href='/'>
						<div className='flex w-full'>
							<div className='mx-auto'>
								<HomeIcon dimensions='h-6 w-6' />
							</div>
						</div>
						<p className=''>Home</p>
					</Link>
				</div>
				<div className={routeClassHandler('/discover')}>
					<Link href='/discover'>
						<div className='flex w-full'>
							<div className='mx-auto'>
								<DiscoverIcon dimensions='h-6 w-6' />
							</div>
						</div>
						<p className=''>Discover</p>
					</Link>
				</div>
				<div className={routeClassHandler('/user/uploads')}>
					<Link href='/user/uploads'>
						<div className='flex w-full'>
							<div className='mx-auto'>
								<PlusCircleIcon dimensions='h-6 w-6' />
							</div>
						</div>
						<p className=''>Uploads</p>
					</Link>
				</div>
				<div className={routeClassHandler('/library')}>
					<Link href='/user/library'>
						<div className='flex w-full'>
							<div className='mx-auto'>
								<LibraryIcon dimensions='h-6 w-6' />
							</div>
						</div>
						<p className=''>Library</p>
					</Link>
				</div>
				<div className={routeClassHandler('/account')}>
					<Link href='/user/account/profile'>
						<div className='flex w-full'>
							<div className='mx-auto'>
								<AccountIcon dimensions='h-6 w-6' />
							</div>
						</div>
						<p className=''>Account</p>
					</Link>
				</div>
			</div>
		)
	)
}

export default Navbar
