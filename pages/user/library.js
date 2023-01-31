import Head from 'next/head'
import { Fragment } from 'react'

function LibraryPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			<div className='p-6 items-center space-x-3'>
				{user?.name ? (
					<img
						className='rounded-full p-1 w-10 h-10'
						src={user?.image}
						alt='user image'
					/>
				) : (
					<AccountIcon dimensions='h-10 w-10' />
				)}
				<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
					Your Library
				</h3>
				<section id='tabs'>
					<div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
						<div className='bg-tabs'></div>
						<div className='flex justify-between max-w-xl mx-auto mb-6 border-b md:space-x-10'>
							<div
								className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
								data-target='panel-1'>
								<div
									className='py-5 border-b-4 border-softRed'
									data-target='panel-1'>
									Collections
								</div>
							</div>

							<div
								className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
								data-target='panel-2'>
								<div className='py-5' data-target='panel-2'>
									Audiobooks
								</div>
							</div>

							<div
								className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
								data-target='panel-3'>
								<div className='py-5' data-target='panel-3'>
									Ebooks
								</div>
							</div>

							<div
								className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
								data-target='panel-3'>
								<div className='py-5' data-target='panel-3'>
									Podcasts
								</div>
							</div>
						</div>

						<div id='panels' className='container mx-auto'>
							<div className='flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1'>
								<div className='flex flex-col space-y-8 md:w-1/2'>
									<h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
										{'Lists'}
									</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	)
}

export default LibraryPage
