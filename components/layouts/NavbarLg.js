import Link from 'next/link'
import { useRouter } from 'next/route'

import Logo from '../ui/Logo'
import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import HistoryIcon from '../../assets/icons/HistoryIcon'
import DownloadsIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'
import HelpIcon from '../../assets/icons/HelpIcon'

function NavbarLg() {
	const router = useRouter()
	const route = router.pathname
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<div className='overflow-y-hidden hide-scrollbar hidden lg:inline-block relative p-2 md:min-w-[10rem] lg:min-w-[12rem] bg-black border-r border-gray-900'>
					<div className='space-y-4 cursor-pointer'>
						<div className='flex items-center space-x-20'>
							<Logo size={45} />
						</div>
						<Link href='/'>
							<div
								className={`flex items-center space-x-2 my-4 hover:text-white text-${
									!route.includes('/') ? 'white' : 'gray-400'
								}`}>
								<HomeIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Home</p>
							</div>
						</Link>
						<Link href='/discover'>
							<div
								className={`flex items-center space-x-2 my-4 hover:text-white text-${
									route.includes('/discover') ? 'white' : 'gray-400'
								}`}>
								<DiscoverIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Discover</p>
							</div>
						</Link>
						<Link href='/user/library'>
							<div
								className={`flex items-center space-x-2 my-4 hover:text-white text-${
									route.includes('/library') ? 'white' : 'gray-400'
								}`}>
								<LibraryIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Library</p>
							</div>
						</Link>
						<Link href='/user/history'>
							<div
								className={`flex items-center space-x-2 my-4 hover:text-white text-${
									route.includes('/history') ? 'white' : 'gray-400'
								}`}>
								<HistoryIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>History</p>
							</div>
						</Link>
						<Link href='/user/profile'>
							<div
								className={`flex items-center space-x-2 my-4 hover:text-white text-${
									route.includes('/profile') ? 'white' : 'gray-400'
								}`}>
								<DownloadsIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Downloads</p>
							</div>
						</Link>

						<hr className='border-t-[0.1px] border-gray-900' />
						<div className='absolute bottom-16'>
							<Link href='/user/settings'>
								<div
									className={`flex items-center mb-2 space-x-2 p-2 hover:text-white text-${
										route.includes('/settings') ? 'white' : 'gray-400'
									}`}>
									<SettingsIcon color={'currentColor'} dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Settings</p>
								</div>
							</Link>
						</div>
						<div className='absolute bottom-4'>
							<Link href='/help'>
								<div
									className={`flex items-center mb-2 space-x-2 p-2 hover:text-white text-${
										route.includes('/help') ? 'white' : 'gray-400'
									}`}>
									<HelpIcon color={'currentColor'} dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Help</p>
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
