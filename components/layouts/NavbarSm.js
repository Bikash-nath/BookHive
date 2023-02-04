import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../assets/icons/HomeIcon'
import DiscoverIcon from '../assets/icons/DiscoverIcon'
import LibraryIcon from '../assets/icons/LibraryIcon'
import HistoryIcon from '../assets/icons/HistoryIcon'
import AccountIcon from '../assets/icons/AccountIcon'

function Navbar() {
	const router = useRouter()
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => router.pathname.includes(path))

	return (
		<>
			{showRoute && (
				<div className='absolute bottom-0 z-20 w-screen lg:hidden md:scale-100 p-[0.4rem] md:p-2 my-0 rounded-md text-white bg-black bg-opacity-90 shadow-inner shadow-gray-700'>
					<div className='flex flex-row items-center justify-between space-x-8 mx-4 sm:mx-6 md:mx-10'>
						<div className='group z-10'>
							<Link href='/'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<HomeIcon color={'currentColor'} dimensions='h-6 w-6' />
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
										<DiscoverIcon color={'#6b7280'} dimensions='h-6 w-6' />
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
										<LibraryIcon color={'currentColor'} dimensions='h-6 w-6' />
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
										<HistoryIcon color={'currentColor'} dimensions='h-6 w-6' />
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
