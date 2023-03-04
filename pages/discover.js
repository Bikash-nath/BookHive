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
			<PageHeader pageTitle={<p className='px-2'>Discover</p>} />
			<div className='py-2 lg:py-4 pb-16 lg:pb-12'>
				<div className='p-1 lg:p-2 pb-6 lb:pb-12 sm:w-3/5 md:w-1/2'>
					<SearchBar />
				</div>
				<div className='container mx-auto p-1 md:p-2 lg:p-4 text-white'>
					<div className='item-container discover-grid'>
						<Link href={'/books/category/bestsellers'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-gradient-to-b from-sky-900 to bg-sky-400 w-40 h-20 md:w-60 md:h-32'></div>
								<h5 className='box-text'>Popular books</h5>
							</div>
						</Link>
						<Link href={'/books/category/audiobooks'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-gradient-to-b from-purple-900 to bg-purple-400 w-40 h-20 md:w-60 md:h-32'></div>
								<h5 className='box-text'>Featured Audiobooks</h5>
							</div>
						</Link>
						<Link href={'/books/category/latest'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-gradient-to-b from-emerald-900 to bg-emerald-400 w-40 h-20 md:w-60 md:h-32'></div>
								<h5 className='box-text'>Latest arrivals</h5>
							</div>
						</Link>
						<Link href={'/authors'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-gradient-to-b from-rose-900 to bg-rose-400 w-40 h-20 md:w-60 md:h-32'></div>
								<h5 className='box-text'>Popular authors</h5>
							</div>
						</Link>
					</div>
				</div>
				<GenreGrid genreList={props.genreList} />
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
