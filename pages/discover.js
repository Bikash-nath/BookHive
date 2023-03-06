import Head from 'next/head'
import { useState, Fragment } from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'

import { getTopGenres } from '../api/genres'
import SearchBar from '../components/SearchBar'
import PageHeader from '../components/layouts/PageHeader'
import GenreGrid from '../components/GenreGrid'
// import { images } from '../utils/constants/genrePics'
// import { genreList } from '../utils/constants/genreConstants'

function DiscoverPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Discover</title>
				<meta name='description' content='Discover section' />
			</Head>
			<div className='page-gradient h-full'>
				<PageHeader pageTitle={<p className='px-2'>Discover</p>} />
				<div className='py-2 xl:py-4 pb-16 xl:pb-12'>
					<div className='p-1 xl:p-2 pb-6 xl:pb-8 sm:w-3/5 md:w-1/2'>
						<SearchBar />
					</div>
					<div className='mx-auto p-1 md:p-2 xl:p-4 text-white'>
						<div className='item-container discover-grid'>
							<Link href={'/books/category/bestsellers'}>
								<div className='flex justify-center w-full h-full'>
									<div className='group item rounded-lg w-40 h-20 xl:w-60 xl:h-28 m-2'>
										<div className='bg-gradient-to-b from-sky-900 to bg-sky-400 bg-opacity-95 w-40 h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Popular books</h5>
									</div>
								</div>
							</Link>
							<Link href={'/books/category/audiobooks'}>
								<div className='flex justify-center w-full h-full'>
									<div className='group item rounded-lg w-40 h-20 xl:w-60 xl:h-28 m-2'>
										<div className='bg-gradient-to-b from-purple-900 to bg-purple-400 bg-opacity-95 w-40 h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Featured Audiobooks</h5>
									</div>
								</div>
							</Link>
							<Link href={'/books/category/latest'}>
								<div className='flex justify-center w-full h-full'>
									<div className='group item rounded-lg w-40 h-20 xl:w-60 xl:h-28 m-2'>
										<div className='bg-gradient-to-b from-emerald-900 to bg-emerald-400 bg-opacity-95 w-40 h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Latest arrivals</h5>
									</div>
								</div>
							</Link>
							<Link href={'/authors'}>
								<div className='flex justify-center w-full h-full'>
									<div className='group item rounded-lg w-40 h-20 xl:w-60 xl:h-28 m-2'>
										<div className='bg-gradient-to-b from-rose-900 to bg-rose-400 bg-opacity-95 w-40 h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Popular authors</h5>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<GenreGrid genreList={props.genreList} />
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const topGenres = await getTopGenres()

	if (!topGenres.data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			genreList: topGenres.data,
		},
		revalidate: 600,
	}
}

export default DiscoverPage
