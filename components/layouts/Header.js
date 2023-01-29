import Link from 'next/link'

import Logo from '../ui/Logo'
import AccountIcon from '../ui/icons/AccountIcon'
import BarIcon from '../ui/icons/BarIcon'
import BellIcon from '../ui/icons/BellIcon'

function Header() {
	return (
		<header className='bg-black flex flex-row justify-between'>
			<nav className='relative container mx-auto p-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-20'>
						<Link href='/'>
							<Logo />
						</Link>
					</div>

					<div className='flex items-center space-x-6 font-bold text-grayishViolet'>
						<div className='hover:text-veryDarkViolet'>Login</div>
					</div>

					<header className='absolute top-5 right-8'>
						<div className='flex items-center cursor-pointer p-2'>
							<BellIcon className='h-5 w-5' />
						</div>
						<div className='flex items-center bg-[#2e2e2e] space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-2'>
							{user?.image ? (
								<img
									className='rounded-full w-10 p-1 h-10'
									src={session?.user.image}
									alt='user image'
								/>
							) : (
								<AccountIcon className='h-5 w-5' />
							)}
							<h2 className='text-white'>{user?.name}</h2>
							<BarIcon className='text-white h-5 w-5' />
						</div>
					</header>
				</div>
			</nav>
		</header>
	)
}

export default Header
