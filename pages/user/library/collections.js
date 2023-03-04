import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import NavigateBackButton from '../../../components/ui/NavigateBackButtton'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function CollectionPage() {
	const list = ''
	const user = '21'

	return (
		<Fragment>
			<Head>
				<title>Collections</title>
				<meta name='description' content='Collections section' />
			</Head>

			{!user ? (
				<LoginBanner
					title='Enjoy Your Books Collection'
					message='Log in to see saved your collection of books, podcasts and more.'
					icon={<LibraryIcon />}
				/>
			) : (
				<div className='h-full'>
					<PageHeader pageTitle='Collections' />
					<NavigateBackButton />
					<p className='text-2xl md:text-3xl p-2 md:p-4'>Your Collections</p>
					<section id='tabs'>
						<div className='container relative sm:text-left px-4'>
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
								<div className='flex flex-auto h-[60vh]	 justify-center items-center'>
									<h3 className='text-xl md:text-2xl font-semibold text-center'>
										{'No collection found'}
									</h3>
								</div>
							)}
						</div>
					</section>
				</div>
			)}
		</Fragment>
	)
}

export default CollectionPage
