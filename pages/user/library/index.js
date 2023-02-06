import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { useState } from 'react'

import AccountIcon from '../../../assets/icons/AccountIcon'
import HistoryIcon from '../../../assets/icons/HistoryIcon'
import CollectionPage from './collections'

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
					<>
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
							<div class='flex flex-col items-center justify-between max-w-4xl w-full mx-auto my-6 space-y-6 divide-y divide-gray-400'>
								<Link href='/user/library/collections'>
									<div className='p-1 py-8'>
										<CollectionIcon />
										<p class='text-2xl text-white text-left font-bold'>
											Collections
										</p>
										<p class='text-lg text-gray-300 text-left'>
											Book collections that you created.
										</p>
									</div>
								</Link>
								<Link href='/user/library/read-history'>
									<div className='p-1'>
										<HistoryIcon />
										<p class='text-2xl text-white text-left font-bold'>
											History
										</p>
										<p class='text-lg text-gray-300 text-left'>
											Books that you have read or listened.
										</p>
									</div>
								</Link>
								<Link href='/user/library/read-later'>
									<div className='p-1'>
										<HistoryIcon />
										<p class='text-2xl text-white text-left font-bold'>
											Read Later
										</p>
										<p class='text-lg text-gray-300 text-left'>
											Books that you have saved for read later.
										</p>
									</div>
								</Link>
								<Link href='/user/library/favourites'>
									<div className='p-1'>
										<HeartIcon />
										<p class='text-2xl text-white text-left font-bold'>
											Favourite Books
										</p>
										<p class='text-lg text-gray-300 text-left'>
											List of your liked books.
										</p>
									</div>
								</Link>
								<Link href='/user/library/favourites'>
									<div className='p-1'>
										<HeartIcon />
										<p class='text-2xl text-white text-left font-bold'>
											Finished Books
										</p>
										<p class='text-lg text-gray-400 text-left'>
											List of books that you have completed.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default LibraryPage
