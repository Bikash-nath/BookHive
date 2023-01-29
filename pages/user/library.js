import Head from 'next/head'
import { Fragment } from 'react'

function LibraryPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			<section id='tabs'>
				<div class='container relative mx-auto my-6 mb-32 mt-12 px-6'>
					<div class='bg-tabs'></div>
					<div class='flex justify-between max-w-xl mx-auto mb-6 border-b md:space-x-10'>
						<div
							class='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
							data-target='panel-1'>
							<div class='py-5 border-b-4 border-softRed' data-target='panel-1'>
								Collections
							</div>
						</div>

						<div
							class='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
							data-target='panel-2'>
							<div class='py-5' data-target='panel-2'>
								Audiobooks
							</div>
						</div>

						<div
							class='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
							data-target='panel-3'>
							<div class='py-5' data-target='panel-3'>
								Ebooks
							</div>
						</div>

						<div
							class='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
							data-target='panel-3'>
							<div class='py-5' data-target='panel-3'>
								Podcasts
							</div>
						</div>
					</div>

					<div id='panels' class='container mx-auto'>
						<div class='flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1'>
							<div class='flex flex-col space-y-8 md:w-1/2'>
								<h3 class='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
									{'Lists'}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default LibraryPage
