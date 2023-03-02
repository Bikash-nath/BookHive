import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import AccountIcon from '../../../assets/icons/AccountIcon'
import LibraryIcon from '../../../assets/icons/LibraryIcon'
import HistoryIcon from '../../../assets/icons/HistoryIcon'
import CollectionIcon from '../../../assets/icons/CollectionIcon'
import HeartIcon from '../../../assets/icons/HeartIcon'
import CompletedIcon from '../../../assets/icons/CompletedIcon'

function LibraryPage(props) {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [activeUser])

	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			<PageHeader pageTitle='Library' />
			{!activeUser?.data ? (
				<LoginBanner
					title='Enjoy Your Favourite Books'
					message='Log in to see saved books, authors,
						and collections in your library.'
					icon={<LibraryIcon />}
				/>
			) : (
				<div className='flex flex-col'>
					<div className='flex p-2 md:p-4'>
						{activeUser.data?.image ? (
							<Image
								src={process.env.USERS_URL + activeUser.data.image}
								alt={activeUser?.data.name}
								height={32}
								width={32}
								className='rounded-full p-2 w-10 h-10'
							/>
						) : (
							<AccountIcon dimensions='h-16 w-16' />
						)}
						<p className='text-xl md:text-2xl mx-2 md:mx-4 my-auto'>Your Library</p>
					</div>
					<div className='flex flex-col items-start justify-between mx-2 md:mx-6 my-6 space-y-3'>
						<Link href='/user/library/collections'>
							<div className='rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] p-2 bg-gray-900 border border-black'>
								<div className='flex rounded-md py-2 gap-2'>
									<CollectionIcon dimensions='h-7 w-7' />
									<p className='text-lg md:text-xl text-left font-semibold'>
										Collections
									</p>
								</div>
								<p className='text-base md:text-lg text-gray-400 text-left'>
									Book collections that you created.
								</p>
							</div>
						</Link>
						<Link href='/user/library/read-history'>
							<div className='rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] p-2 bg-gray-900 border border-black'>
								<div className='flex rounded-md py-2 gap-2'>
									<HistoryIcon dimensions='h-7 w-7' />
									<p className='text-lg md:text-xl text-left font-semibold'>
										History
									</p>
								</div>
								<p className='text-base md:text-lg text-gray-400 text-left'>
									Books that you have read or listened.
								</p>
							</div>
						</Link>
						<Link href='/user/library/read-later'>
							<div className='rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] p-2 bg-gray-900 border border-black'>
								<div className='flex rounded-md py-2 gap-2'>
									<HistoryIcon dimensions='h-7 w-7' />
									<p className='text-lg md:text-xl text-left font-semibold'>
										Read Later
									</p>
								</div>
								<p className='text-base md:text-lg text-gray-400 text-left'>
									Books that you have saved for read later.
								</p>
							</div>
						</Link>
						<Link href='/user/library/favourites'>
							<div className='rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] p-2 bg-gray-900 border border-black'>
								<div className='flex rounded-md py-2 gap-2'>
									<HeartIcon dimensions='h-7 w-7' />
									<p className='text-lg md:text-xl text-left font-semibold'>
										Favourites
									</p>
								</div>
								<p className='text-base md:text-lg text-gray-400 text-left'>
									List of your liked books.
								</p>
							</div>
						</Link>
						<Link href='/user/library/favourites'>
							<div className='rounded-lg w-[90vw] md:w-[70vw] lg:w-[50vw] p-2 bg-gray-900 border border-black'>
								<div className='flex rounded-md py-2 gap-2'>
									<CompletedIcon dimensions='h-7 w-7' />
									<p className='text-lg md:text-xl text-left font-semibold'>
										Finished Books
									</p>
								</div>
								<p className='text-base md:text-lg text-gray-400 text-left'>
									List of books that you have completed.
								</p>
							</div>
						</Link>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default LibraryPage

/*
<div className='flex flex-col items-start justify-between max-w-6xl w-full mx-auto gap-2 my-6 space-y-4 divide-y divide-gray-400'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<p className='text-lg md:text-xl text-left font-semibold'>Collections</p>
			<p className='text-base md:text-lg text-gray-400 text-left'>
			Book collections that you created.
			</p>
			</div>
		<div className='flex w-full p-1 py-2 gap-2'>
			<p className='text-lg md:text-xl text-left font-semibold'>History</p>
			<p className='text-base md:text-lg text-gray-400 text-left'>
			Books that you have read or listened.
			</p>
			</div>
		<div className='flex w-full p-1 py-2 gap-2'>
			<p className='text-lg md:text-xl text-left font-semibold'>Read Later</p>
			<p className='text-base md:text-lg text-gray-400 text-left'>
			Books that you have saved for read later.
			</p>
			</div>
	</Link>
	<Link href='/user/library/favourites'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<HeartIcon dimensions='h-7 w-7' />
			<p className='text-lg md:text-xl text-left font-semibold'>Favourite Books</p>
		</div>
		<p className='text-base md:text-lg text-gray-400 text-left'>
			List of your liked books.
		</p>
	</Link>
	<Link href='/user/library/favourites'>
		<div className='flex w-full p-1 py-2 gap-2'>
			<CompletedIcon dimensions='h-7 w-7' />
			<p className='text-lg md:text-xl text-left font-semibold'>Finished Books</p>
		</div>
		<p className='text-base md:text-lg text-gray-400 text-left'>
			List of books that you have completed.
		</p>
	</Link>
</div>
*/
