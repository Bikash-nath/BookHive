import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '../ui/Logo'
import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import DropdownIcon from '../../assets/icons/DropdownIcon'
import CollectionIcon from '../../assets/icons/CollectionIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import HistoryIcon from '../../assets/icons/HistoryIcon'
import DownloadsIcon from '../../assets/icons/DownloadsIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'

function NavbarLg() {
	const router = useRouter()
	const currentRoute = router.pathname
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const routeClassHandler = (route) => {
		return `flex items-center space-x-2 my-4 hover:text-white text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white'
				: 'gray-400'
		}`
	}

	return (
		<>
			{showRoute && (
				<div className='overflow-y-hidden hide-scrollbar hidden lg:inline-block relative p-2 md:min-w-[10rem] lg:min-w-[12rem] bg-black border-r border-gray-900'>
					<div className='space-y-4 cursor-pointer'>
						<div className='flex items-center space-x-20'>
							<Logo size={45} />
						</div>
						<Link href='/'>
							<div className={() => routeClassHandler('/')}>
								<HomeIcon dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Home</p>
							</div>
						</Link>
						<Link href='/discover'>
							<div className={() => routeClassHandler('/discover')}>
								<DiscoverIcon dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Discover</p>
							</div>
						</Link>
						<hr className='border-t-[0.1px] border-gray-900' />

						<div className='dropdown inline-block relative'>
							<button className='bg-gray-300 py-2 px-4 rounded inline-flex items-center'>
								<span className='mr-1'>
									<Link href='/user/library'>
										<div className={() => routeClassHandler('/library')}>
											<LibraryIcon dimensions='h-8 w-8' />
											<p className='font-mono text-base'>Library</p>
										</div>
									</Link>
								</span>
								<DropdownIcon />
							</button>
							<ul className='dropdown-menu absolute hidden text-gray-700 pt-1'>
								<li className='p-2'>
									<Link href='/user/library/collections'>
										<div className={() => routeClassHandler('/collections')}>
											<CollectionIcon dimensions='h-8 w-8' />
											<p className='font-mono text-base'>Collections</p>
										</div>
									</Link>
								</li>
								<li className='p-2'>
									<Link href='/user/library/favourites'>
										<div className={() => routeClassHandler('/favourites')}>
											<HeartIcon dimensions='h-8 w-8' />
											<p className='font-mono text-base'>Favourite books</p>
										</div>
									</Link>
								</li>
								<li className='p-2'>
									<Link href='/user/library/read-history'>
										<div className={() => routeClassHandler('/history')}>
											<HistoryIcon dimensions='h-8 w-8' />
											<p className='font-mono text-base'>Read history</p>
										</div>
									</Link>
								</li>
								<li className='p-2'>
									<a
										className='rounded-b bg-gray-300 hover:bg-gray-500 py-2 px-4 block whitespace-no-wrap'
										href='#'>
										Three is the magic number
									</a>
								</li>
							</ul>
						</div>

						<Link href='/user/downloads'>
							<div className={() => routeClassHandler('/downloads')}>
								<DownloadsIcon dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Downloads</p>
							</div>
						</Link>

						<hr className='border-t-[0.1px] border-gray-900' />
						<div className='absolute bottom-16'>
							<Link href='/user/settings'>
								<div className={() => routeClassHandler('/settings')}>
									<SettingsIcon dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Settings</p>
								</div>
							</Link>
						</div>
						<div className='absolute bottom-4'>
							<Link href='/help'>
								<div className={() => routeClassHandler('/help')}>
									<HelpIcon dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Help</p>
								</div>
							</Link>
						</div>
						<div className='absolute bottom-4'>
							<Link href='/feedback'>
								<div className={() => routeClassHandler('/help/donate')}>
									<FeedbackIcon dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Send Feedback</p>
								</div>
							</Link>
						</div>
						{/* {collections.map((collection) => (
							<p
								key={collection.id}
								onClick={() => setcollectionId(collection.id)}
								className='cursor-pointer hover:text-white'>
								{collection.name} className='font-mono text-base'
							</p>
						))} */}
					</div>
				</div>
			)}
		</>
	)
}

export default NavbarLg
