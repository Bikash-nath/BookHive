import TabModal from '../../../components/modals/TabModal'
import LoginBanner from '../../../components/login/LoginBanner'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function CollectionPage() {
	const user = '21'
	const list = ''

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
					<div>
						<p className='text-xl md:text-2xl mx-2 md:mx-4 my-auto'>
							Your Library
						</p>
						<section id='tabs'>
							<div className='container relative sm:text-left px-4'>
								<div className='bg-tabs'></div>
								<TabModal
									tabs={['Collections', 'Audiobooks', 'Ebooks', 'Podcasts']}
									onTabChange={onTabChangeHandler}
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
