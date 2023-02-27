import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import AccountIcon from '../../assets/icons/AccountIcon'

function Navbar(props) {
	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		return `font-medium text-xs md:sm-md mt-[0.1rem]  group text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white'
				: 'gray-400'
		}`
	}

	return (
		<>
			{showRoute && (
				<div
					className='absolute bottom-0 z-20 w-screen lg:hidden scale-100 p-[.4rem] md:p-[.45rem] m-0 rounded-md text-white bg-black shadow-inner shadow-gray-700'
					ref={props.navbarRef}>
					<div className='flex flex-row items-center justify-between space-x-8 mx-4 sm:mx-6 md:mx-10'>
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
							<Link href='/user/account'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<AccountIcon dimensions='h-6 w-6' />
									</div>
								</div>
								<p className=''>Account</p>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Navbar
