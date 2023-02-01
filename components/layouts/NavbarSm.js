import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../ui/icons/HomeIcon'
import DiscoverIcon from '../ui/icons/DiscoverIcon'
import LibraryIcon from '../ui/icons/LibraryIcon'
import HistoryIcon from '../ui/icons/HistoryIcon'
import AccountIcon from '../ui/icons/AccountIcon'

function Navbar() {
	const router = useRouter()
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<div className='absolute bottom-0 z-10 w-screen lg:hidden md:scale-100 p-[0.4rem] md:p-2 rounded-md text-gray-200 bg-black bg-opacity-90 shadow-inner shadow-gray-700'>
					<div className='flex flex-row items-center justify-between space-x-8 mx-4 sm:mx-6 md:mx-10'>
						<div className='group z-10'>
							<Link href='/'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<HomeIcon dimensions='h-6 w-6' />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Home
								</p>
							</Link>
						</div>
						<div className='group'>
							<Link href='/search'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<DiscoverIcon dimensions='h-6 w-6' />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Discover
								</p>
							</Link>
						</div>
						<div className='group'>
							<Link href='/user/library'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<LibraryIcon dimensions='h-6 w-6' />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Library
								</p>
							</Link>
						</div>
						<div className='group'>
							<Link href='/user/profile'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<HistoryIcon dimensions='h-6 w-6' />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Profile
								</p>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Navbar
