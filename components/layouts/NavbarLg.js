import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../assets/icons/HomeIcon'
import DiscoverIcon from '../assets/icons/DiscoverIcon'
import AccountIcon from '../assets/icons/AccountIcon'
import LibraryIcon from '../assets/icons/LibraryIcon'
import SettingIcon from '../assets/icons/SettingsIcon'
import HistoryIcon from '../assets/icons/HistoryIcon'

function Navbar() {
	const router = useRouter()
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<div className='overflow-y-scroll h-screen hide-scrollbar hidden lg:inline-block relative p-2 md:min-w-[10rem] lg:min-w-[12rem] text-gray-500 text-sm border-r border-gray-900'>
					<div className='space-y-4 cursor-pointer'>
						<Link href='/'>
							<div className='flex items-center space-x-2 my-4 hover:text-white'>
								<HomeIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Home</p>
							</div>
						</Link>
						<Link href='/search'>
							<div className='flex items-center space-x-2 my-4 hover:text-white'>
								<DiscoverIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Discover</p>
							</div>
						</Link>
						<Link href='/user/library'>
							<div className='flex items-center space-x-2 my-4 hover:text-white'>
								<LibraryIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Library</p>
							</div>
						</Link>
						<Link href='/user/profile'>
							<div className='flex items-center space-x-2 my-4 hover:text-white'>
								<AccountIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>Profile</p>
							</div>
						</Link>

						<Link href='/user/history'>
							<div className='flex items-center space-x-2 my-4 hover:text-white'>
								<HistoryIcon color={'currentColor'} dimensions='h-8 w-8' />
								<p className='font-mono text-base'>History</p>
							</div>
						</Link>

						<hr className='border-t-[0.1px] border-gray-900' />

						<div className='absolute bottom-20'>
							<Link href='/user/settings'>
								<div className='flex items-center mb-2 space-x-2 my-4 hover:text-white'>
									<SettingIcon color={'currentColor'} dimensions='h-8 w-8' />
									<p className='font-mono text-base'>Setting</p>
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

export default Navbar
