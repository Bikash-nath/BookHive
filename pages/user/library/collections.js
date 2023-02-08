import Head from 'next/head'
import { Fragment, useState } from 'react'

import TabModal from '../../../components/modals/TabModal'
import LoginBanner from '../../../components/login/LoginBanner'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function CollectionPage() {
	const [currentTab, setCurrentTab] = useState(0)
	const list = ''
	const user = '21'

	const onTabChangeHandler = (tabIndex) => {
		setCurrentTab(tabIndex)
	}

	return (
		<Fragment>
			<Head>
				<title>Collections</title>
				<meta name='description' content='Collections section' />
			</Head>
			<div className='bg-gradient'>
				{!user ? (
					<LoginBanner
						title='Enjoy Your Books Collection'
						message='Log in to see saved your collection of books, podcasts and more.'
						icon={<LibraryIcon />}
					/>
				) : (
					<div>
						<p className='text-xl md:text-2xl mx-2 md:mx-4 my-auto'>Your Library</p>
						<section id='tabs'>
							<div className='container relative sm:text-left px-4'>
								<div className='bg-tabs'></div>
								<TabModal
									tabs={['All Collections', 'Audiobooks', 'Ebooks', 'Podcasts']}
									onTabChange={onTabChangeHandler}
									selectedTab={currentTab}
								/>

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
											{'This collection has no books'}
										</h3>
									</div>
								)}
							</div>
						</section>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default CollectionPage
