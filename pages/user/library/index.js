import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { useState } from 'react'

import AccountIcon from '../../../assets/icons/AccountIcon'
import HistoryIcon from '../../../assets/icons/HistoryIcon'
import CollectionIcon from '../../../assets/icons/CollectionIcon'
import HeartIcon from '../../../assets/icons/HeartIcon'

function LibraryPage(props) {
	const [currentTab, setCurrentTab] = useState(1)
	const user = '21'

	const onTabChangeHandler = (tabIndex) => {
		setCurrentTab(tabIndex)
	}

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
								<img
									className='rounded-full p-2 w-10 h-10'
									src={user?.image}
									alt='user image'
								/>
							) : (
								<AccountIcon dimensions='h-16 w-16' color={'white'} />
							)}
							<p className='text-xl md:text-2xl mx-2 md:mx-4 my-auto'>
								Your Library
							</p>
						</div>
						<div class='flex flex-col items-center justify-between max-w-6xl w-full mx-auto my-6 space-y-4 divide-y divide-gray-400'>
							<Link href='/user/library/collections'>
								<div className='w-full p-1 py-4'>
									<p class='text-2xl text-white text-left font-bold'>
										<CollectionIcon dimensions='h-7 w-7' />
										Collections
									</p>
									<p class='text-lg text-gray-300 text-left'>
										Book collections that you created.
									</p>
								</div>
							</Link>
							<Link href='/user/library/read-history'>
								<div className='w-full p-1 py-4'>
									<p class='text-2xl text-white text-left font-bold'>History</p>
									<HistoryIcon color={'white'} dimensions='h-7 w-7' />
									<p class='text-lg text-gray-300 text-left'>
										Books that you have read or listened.
									</p>
								</div>
							</Link>
							<Link href='/user/library/read-later'>
								<div className='w-full p-1 py-4'>
									<p class='text-2xl text-white text-left font-bold'>
										<HistoryIcon />
										Read Later
									</p>
									<p class='text-lg text-gray-300 text-left'>
										Books that you have saved for read later.
									</p>
								</div>
							</Link>
							<Link href='/user/library/favourites'>
								<div className='w-full p-1 py-4'>
									<p class='text-2xl text-white text-left font-bold'>
										<HeartIcon />
										Favourite Books
									</p>
									<p class='text-lg text-gray-300 text-left'>
										List of your liked books.
									</p>
								</div>
							</Link>
							<Link href='/user/library/favourites'>
								<div className='w-full p-1 py-4'>
									<p class='text-2xl text-white text-left font-bold'>
										<HeartIcon />
										Finished Books
									</p>
									<p class='text-lg text-gray-400 text-left'>
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
