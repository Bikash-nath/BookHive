import Link from 'next/link'
import HomeIcon from '../ui/icons/HomeIcon'
import SearchIcon from '../ui/icons/SearchIcon'
import AccountIcon from '../ui/icons/AccountIcon'
import LibraryIcon from '../ui/icons/LibraryIcon'
import SettingIcon from '../ui/icons/SettingsIcon'
import HistoryIcon from '../ui/icons/HistoryIcon'

function Navbar() {
	return (
		<div className='overflow-y-scroll h-screen scrollbar-hide hidden md:inline-block p-2 md:min-w-[10rem] lg:min-w-[12rem] text-gray-500 text-sm border-r border-gray-900'>
			<div className='bg-red-700 space-y-2 shadow-2xl rounded-xl'>
				<div className='flex flex-row items-center justify-center space-x-4 md:hidden md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
					<div className='group z-10'>
						<Link href='/'>
							<HomeIcon dimensions='h-8 w-8' />
							Home
						</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/search'>
							<SearchIcon dimensions='h-8 w-8' />
							Search
						</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/library'>
							<LibraryIcon dimensions='h-8 w-8' />
							Library
						</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
					<div className='group'>
						<Link href='/user/profile'>
							<AccountIcon dimensions='h-8 w-8' />
							Profile
						</Link>
						<div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
					</div>
				</div>
			</div>

			<div className='space-y-4 relative cursor-pointer'>
				<Link href='/'>
					<div className='flex items-center space-x-2 my-4 hover:text-white'>
						<HomeIcon dimensions='h-8 w-8' />
						<p className='font-mono text-base'>Home</p>
					</div>
				</Link>
				<Link href='/search'>
					<div className='flex items-center space-x-2 my-4 hover:text-white'>
						<SearchIcon dimensions='h-8 w-8' />
						<p className='font-mono text-base'>Search</p>
					</div>
				</Link>
				<Link href='/user/library'>
					<div className='flex items-center space-x-2 my-4 hover:text-white'>
						<LibraryIcon dimensions='h-8 w-8' />
						<p className='font-mono text-base'>Library</p>
					</div>
				</Link>
				<Link href='/user/profile'>
					<div className='flex items-center space-x-2 my-4 hover:text-white'>
						<AccountIcon dimensions='h-8 w-8' />
						<p className='font-mono text-base'>Profile</p>
					</div>
				</Link>

				<Link href='/user/history'>
					<div className='flex items-center space-x-2 my-4 hover:text-white'>
						<HistoryIcon dimensions='h-8 w-8' />
						<p className='font-mono text-base'>History</p>
					</div>
				</Link>

				<hr className='border-t-[0.1px] border-gray-900' />

				<div className='absolute mb-0'>
					<Link href='/user/settings'>
						<div className='flex items-center mb-2 space-x-2 my-4 hover:text-white'>
							<SettingIcon dimensions='h-8 w-8' />
							<p className='font-mono text-base'>Setting</p>
						</div>
					</Link>
				</div>

				{/* {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name} className='font-mono text-base'
          </p>
        ))} */}
			</div>
		</div>
	)
}

export default Navbar
