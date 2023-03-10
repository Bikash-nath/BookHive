import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import UserContext from '../../store/userContext'
import Logo from '../ui/Logo'
import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import AccountIcon from '../../assets/icons/AccountIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import CollectionIcon from '../../assets/icons/CollectionIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import HistoryIcon from '../../assets/icons/HistoryIcon'
// import DownloadsIcon from '../../assets/icons/DownloadsIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'

function Sidebar() {
	const [libraryToggle, setLibraryToggle] = useState(true)
	const router = useRouter()
	const currentRoute = router.asPath
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => currentRoute.includes(path))

	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		if (user?.data) setActiveUser(user.data)
		// if (!activeUser?.data) getUserProfile()
	}, [user])

	const routeClassHandler = (route) => {
		return `flex items-center space-x-2 m-2 hover:text-white text-${
			(currentRoute.includes(route) && route !== '/') || currentRoute === route
				? 'white '
				: 'gray-400 '
		}`
	}

	return (
		<>
			{showRoute && (
				<div className='overflow-y-hidden hide-scrollbar hidden xl:inline-block relative p-2 min-w-[13rem] bg-[#030b17] border-r border-gray-900'>
					<div className='space-y-5 cursor-pointer'>
						<div className='flex items-center space-x-20'>
							<Logo size={48} />
						</div>
						<Link href='/'>
							<div className={routeClassHandler('/') + 'my-4'}>
								<HomeIcon dimensions='h-7 w-7' />
								<p className='text-base'>Home</p>
							</div>
						</Link>
						<Link href='/discover'>
							<div className={routeClassHandler('/discover') + 'my-4'}>
								<DiscoverIcon dimensions='h-7 w-7' />
								<p className='text-base'>Discover</p>
							</div>
						</Link>
						<hr className='border-t-[0.1px] border-gray-700' />
						<div className='flex flex-col'>
							<div className='flex'>
								<Link href='/user/library'>
									<div className={routeClassHandler('/library')}>
										<LibraryIcon dimensions='h-7 w-7' />
										<p className='text-base'>Library</p>
									</div>
								</Link>
								{activeUser ? (
									<div
										className={'flex items-center m-2'}
										onClick={() => setLibraryToggle(!libraryToggle)}>
										{libraryToggle ? (
											<ChevronDownIcon dimensions='h-6 w-6' color='white' />
										) : (
											<ChevronRightIcon dimensions='h-6 w-6' color='white' />
										)}
									</div>
								) : (
									<></>
								)}
							</div>
							{activeUser && libraryToggle ? (
								<div className='ml-2'>
									<Link href='/user/library/collections'>
										<div className={routeClassHandler('/collections')}>
											<CollectionIcon dimensions='h-7 w-7' />
											<p className='text-base'>Collections</p>
										</div>
									</Link>
									<Link href='/user/library/favourites'>
										<div className={routeClassHandler('/favourites')}>
											<HeartIcon dimensions='h-7 w-7' />
											<p className='text-base'>Favourites</p>
										</div>
									</Link>
									<Link href='/user/library/read-history'>
										<div className={routeClassHandler('/read-history')}>
											<HistoryIcon dimensions='h-7 w-7' />
											<p className='text-base'>Read history</p>
										</div>
									</Link>
								</div>
							) : (
								<></>
							)}
						</div>

						<Link href='/user/account'>
							<div className={routeClassHandler('/account') + 'my-4'}>
								<AccountIcon dimensions='h-7 w-7' />
								<p className='text-base'>Account</p>
							</div>
						</Link>

						<hr className='border-t-[0.1px] border-gray-900' />
						<div className='absolute bottom-28'>
							<Link href='/user/account/settings'>
								<div className={routeClassHandler('/account/settings')}>
									<SettingsIcon dimensions='h-7 w-7' />
									<p className='text-base'>Settings</p>
								</div>
							</Link>
						</div>
						<div className='absolute bottom-16'>
							<Link href='/help/faq'>
								<div className={routeClassHandler('/faq')}>
									<HelpIcon dimensions='h-7 w-7' />
									<p className='text-base'>Help</p>
								</div>
							</Link>
						</div>
						<div className='absolute bottom-4'>
							<Link href='/help/donate'>
								<div className={routeClassHandler('/donate')}>
									<FeedbackIcon dimensions='h-7 w-7' />
									<p className='text-base'>Send Feedback</p>
								</div>
							</Link>
						</div>
						{/* {collections.map((collection) => (
							<p
								key={collection.id}
								onClick={setcollectionId(collection.id)}
								className='cursor-pointer hover:text-white'>
								{collection.name} className='text-base'
							</p>
						))} */}
					</div>
				</div>
			)}
		</>
	)
}

export default Sidebar
