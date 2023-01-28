import Link from 'next/link'
import HomeIcon from '../elements/HomeIcon'
import SearchIcon from '../elements/SearchIcon'
import HamburgerIcon from '../elements/HamburgerIcon'
import HistoryIcon from '../elements/HistoryIcon'
import AccountIcon from '../elements/SettingsIcon'
import SettingIcon from '../elements/SettingsIcon'

function Navbar() {
	return (
		<nav>
			<div className='bg-black p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
				<div className='flex flex-row items-center justify-center space-x-4 lg:hidden md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					<div className='group'>
						<Link href='/'>Home</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/search'>Search</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/library'>Library</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/profile'>Profile</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
				</div>
			</div>

			<div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex '>
				<div className='space-y-4'>
					<div className='flex items-center space-x-2 hover:text-white'>
						<Link href='/'>
							<HomeIcon className='h-5 w-5' />
							<p className='font-mono'>Home</p>
						</Link>
					</div>
					<div className='flex items-center space-x-2 hover:text-white'>
						<Link href='/search'>
							<SearchIcon className='h-5 w-5' />
							<p className='font-mono'>Search</p>
						</Link>
					</div>
					<div className='flex items-center space-x-2 hover:text-white'>
						<Link href='/user/library'>
							<HistoryIcon className='h-5 w-5' />
							<p className='font-mono'>Library</p>
						</Link>
					</div>
					<hr className='border-t-[0.1px] border-gray-900' />

					<div className='flex items-center space-x-2 hover:text-white'>
						<Link href='/user/library'>
							<HistoryIcon className='h-5 w-5' />
							<p className='font-mono'>History</p>
						</Link>
					</div>

					<div className='flex items-center space-x-2 hover:text-white'>
						<Link href='/user/profile'>
							<AccountIcon className='h-5 w-5' />
							<p className='font-mono'>Setting</p>
						</Link>
					</div>
					<hr className='border-t-[0.1px] border-gray-900' />
					{/* {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name} className='font-mono'
          </p>
        ))} */}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
