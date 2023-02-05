import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../components/login/LoginBanner'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import AccountIcon from '../../assets/icons/AccountIcon'

function LibraryPage(props) {
	const user = '21'
	const list = ''

	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			<div className='text-white'>
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
						</div>
						<section id='tabs'>
							<div className='container relative sm:text-left px-4'>
								<div className='bg-tabs'></div>
								<div className='flex items-center mx-auto md:mx-6 mb-6 justify-between sm:justify-start space-x-1 sm:space-x-6 md:space-x-10'>
									<div className='py-1 text-lg md:text-2xl border-b-2 md:border-b-3 border-gray-200'>
										Collections
									</div>
									<div className='py-1 text-base md:text-xl cursor-pointer text-gray-600 hover:text-gray-200'>
										Audiobooks
									</div>
									<div className='py-1 text-base md:text-xl cursor-pointer text-gray-600 hover:text-gray-200'>
										Ebooks
									</div>
									<div className='py-1 text-base md:text-xl cursor-pointer text-gray-600 hover:text-gray-200'>
										Podcasts
									</div>
								</div>

								{list?.length ? (
									<div id='panels' className='container mx-auto'>
										<div className='flex flex-col py-2 sm:text-xl md:text-2xl md:flex-row md:space-x-7 panel panel-1'>
											<div className='flex flex-col space-y-8 md:w-1/2'>
												<h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
													{'Lists'}
												</h3>
											</div>
										</div>
									</div>
								) : (
									<div className='flex flex-auto justify-center items-center'>
										<h3 className='text-xl md:text-2xl font-semibold text-center'>
											{'Add books to collection'}
										</h3>
									</div>
								)}
							</div>
						</section>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default LibraryPage
