import Link from 'next/link'
import { useRouter } from 'next/router'

import HomeIcon from '../../assets/icons/HomeIcon'
import DiscoverIcon from '../../assets/icons/DiscoverIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import DownloadsIcon from '../../assets/icons/AccountIcon'

function NavbarLg() {
	const router = useRouter()
	const route = router.pathname
	const paths = ['login', 'signup']
	const showRoute = !paths.find((path) => route.includes(path))
	// console.log('NavbarSm', route)

	return (
		<>
			{showRoute && (
				<div className='absolute bottom-0 z-20 w-screen lg:hidden md:scale-100 p-[0.4rem] md:p-2 my-0 rounded-md text-white bg-black bg-opacity-90 shadow-inner shadow-gray-700'>
					<div className='flex flex-row items-center justify-between space-x-8 mx-4 sm:mx-6 md:mx-10'>
						<div
							className={`group text-${route === '/' ? 'white' : 'gray-400'}`}>
							<Link href='/'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<HomeIcon dimensions='h-6 w-6' color={'currentColor'} />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Home
								</p>
							</Link>
						</div>
						<div
							className={`group text-${
								route.includes('/discover') ? 'white' : 'gray-400'
							}`}>
							<Link href='/discover'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<DiscoverIcon dimensions='h-6 w-6' color={'currentColor'} />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Discover
								</p>
							</Link>
						</div>
						<div
							className={`group text-${
								route.includes('/library') ? 'white' : 'gray-400'
							}`}>
							<Link href='/user/library'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<LibraryIcon dimensions='h-6 w-6' color={'currentColor'} />
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Library
								</p>
							</Link>
						</div>
						<div
							className={`group text-${
								route.includes('/downloads') ? 'white' : 'gray-400'
							}`}>
							<Link href='/user/downloads'>
								<div className='flex w-full'>
									<div className='mx-auto'>
										<DownloadsIcon
											color={'currentColor'}
											dimensions='h-6 w-6'
										/>
									</div>
								</div>
								<p className='font-mono text-xs leading-none mt-[0.1rem]'>
									Downloads
								</p>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default NavbarLg
