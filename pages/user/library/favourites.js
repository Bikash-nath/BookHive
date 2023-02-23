import Head from 'next/head'
import { Fragment, useState } from 'react'

import TabModal from '../../../components/modals/TabModal'
import LoginBanner from '../../../components/login/LoginBanner'
import HeartIcon from '../../../assets/icons/HeartIcon'

function FavouritesPage(props) {
	const user = '1'
	const list = ''
	const tabs = ['Favourites', 'Audiobooks', 'Ebooks', 'Podcasts', 'Authors']
	const [currentTab, setCurrentTab] = useState(0)

	const onTabChangeHandler = (tabIndex) => {
		setCurrentTab(tabIndex)
	}

	return (
		<Fragment>
			<Head>
				<title>Favourites</title>
				<meta name='description' content='User favourites page' />
			</Head>
			<div className='bg-gradient h-[93vh]'>
				{!user ? (
					<LoginBanner
						title='Your favourite books'
						message='Login to save books as favourites'
						icon={<HeartIcon />}
					/>
				) : (
					<div>
						<p className='text-2xl md:text-3xl p-2 md:p-6'>Your Favourites</p>
						<section id='tabs'>
							<div className='container relative sm:text-left px-2'>
								<div className='bg-tabs'></div>
								<TabModal
									tabs={tabs}
									onTabChange={onTabChangeHandler}
									selectedTab={currentTab}
								/>

								{list?.length ? (
									<div id='panels' className='container mx-auto'>
										<div className='flex flex-col py-2 sm:text-xl md:text-2xl md:flex-row md:space-x-7 panel panel-1'>
											<div className='flex flex-col space-y-8 md:w-1/2'>
												<h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
													{'Favourite List'}
												</h3>
											</div>
										</div>
									</div>
								) : (
									<div
										className='flex min-h-full
									 justify-center items-center'>
										<div className='text-xl md:text-2xl font-semibold text-center my-32'>
											{`You do not have any favourite ${tabs[currentTab]}`}
										</div>
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

export default FavouritesPage
