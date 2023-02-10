import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import AccountIcon from '../../../assets/icons/AccountIcon'
import HistoryIcon from '../../../assets/icons/HistoryIcon'
import CollectionIcon from '../../../assets/icons/CollectionIcon'
import HeartIcon from '../../../assets/icons/HeartIcon'
import CompletedIcon from '../../../assets/icons/CompletedIcon'

function LibraryPage(props) {
	const user = '21'

	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			<div className='bg-gradient'>
				{!user ? (
					<LoginBanner
						title='Enjoy Your Favourite Books'
						message='Log in to see saved books, podcasts, authors,
						and collections in Your Library.'
						icon={<LibraryIcon />}
					/>
				) : (
					<div className='flex flex-col'>
						<div className='flex p-2 md:p-4'>
							{user?.image ? (
								<img className='rounded-full p-2 w-10 h-10' src={user?.image} alt='user image' />
							) : (
								<AccountIcon dimensions='h-16 w-16' />
							)}
							<p className='text-xl md:text-2xl mx-2 md:mx-4 my-auto'>Your Library</p>
						</div>
						<div class='flex flex-col items-start justify-between mx-2 md:mx-6 my-6 space-y-3'>
							<Link href='/user/library/collections'>
								<div className='rounded-lg w-80 md:w-120 p-2 bg-[#121212] border border-black'>
									<div className='flex rounded-md py-2 gap-2'>
										<CollectionIcon dimensions='h-7 w-7' />
										<p class='text-lg md:text-xl text-left font-semibold'>Collections</p>
									</div>
									<p class='text-base md:text-lg text-gray-400 text-left'>
										Book collections that you created.
									</p>
								</div>
							</Link>
							<Link href='/user/library/read-history'>
								<div className='rounded-lg w-80 md:w-120 p-2 bg-[#121212] border border-black'>
									<div className='flex rounded-md py-2 gap-2'>
										<HistoryIcon dimensions='h-7 w-7' />
										<p class='text-lg md:text-xl text-left font-semibold'>History</p>
									</div>
									<p class='text-base md:text-lg text-gray-400 text-left'>
										Books that you have read or listened.
									</p>
								</div>
							</Link>
							<Link href='/user/library/read-later'>
								<div className='rounded-lg w-80 md:w-120 p-2 bg-[#121212] border border-black'>
									<div className='flex rounded-md py-2 gap-2'>
										<HistoryIcon dimensions='h-7 w-7' />
										<p class='text-lg md:text-xl text-left font-semibold'>Read Later</p>
									</div>
									<p class='text-base md:text-lg text-gray-400 text-left'>
										Books that you have saved for read later.
									</p>
								</div>
							</Link>
							<Link href='/user/library/favourites'>
								<div className='rounded-lg w-80 md:w-120 p-2 bg-[#121212] border border-black'>
									<div className='flex rounded-md py-2 gap-2'>
										<HeartIcon dimensions='h-7 w-7' />
										<p class='text-lg md:text-xl text-left font-semibold'>Favourites</p>
									</div>
									<p class='text-base md:text-lg text-gray-400 text-left'>
										List of your liked books.
									</p>
								</div>
							</Link>
							<Link href='/user/library/favourites'>
								<div className='rounded-lg w-80 md:w-120 p-2 bg-[#121212] border border-black'>
									<div className='flex rounded-md py-2 gap-2'>
										<CompletedIcon dimensions='h-7 w-7' />
										<p class='text-lg md:text-xl text-left font-semibold'>Finished Books</p>
									</div>
									<p class='text-base md:text-lg text-gray-400 text-left'>
										List of books that you have completed.
									</p>
								</div>
							</Link>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default LibraryPage

/*
<div class='flex flex-col items-start justify-between max-w-6xl w-full mx-auto gap-2 my-6 space-y-4 divide-y divide-gray-400'>
	<Link href='/user/library/collections'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<CollectionIcon dimensions='h-7 w-7' />
			<p class='text-lg md:text-xl text-left font-semibold'>Collections</p>
		</div>
		<p class='text-base md:text-lg text-gray-400 text-left'>
			Book collections that you created.
		</p>
	</Link>
	<Link href='/user/library/read-history'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<HistoryIcon dimensions='h-7 w-7' />
			<p class='text-lg md:text-xl text-left font-semibold'>History</p>
		</div>
		<p class='text-base md:text-lg text-gray-400 text-left'>
			Books that you have read or listened.
		</p>
	</Link>
	<Link href='/user/library/read-later'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<HistoryIcon dimensions='h-7 w-7' />
			<p class='text-lg md:text-xl text-left font-semibold'>Read Later</p>
		</div>
		<p class='text-base md:text-lg text-gray-400 text-left'>
			Books that you have saved for read later.
		</p>
	</Link>
	<Link href='/user/library/favourites'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<HeartIcon dimensions='h-7 w-7' />
			<p class='text-lg md:text-xl text-left font-semibold'>Favourite Books</p>
		</div>
		<p class='text-base md:text-lg text-gray-400 text-left'>
			List of your liked books.
		</p>
	</Link>
	<Link href='/user/library/favourites'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<CompletedIcon dimensions='h-7 w-7' />
			<p class='text-lg md:text-xl text-left font-semibold'>Finished Books</p>
		</div>
		<p class='text-base md:text-lg text-gray-400 text-left'>
			List of books that you have completed.
		</p>
	</Link>
</div>
*/
