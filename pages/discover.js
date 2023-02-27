import Head from 'next/head'
import { useState, Fragment } from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'

import { getTopGenres } from '../api/genres'
import SearchBar from '../components/SearchBar'
import GenreGrid from '../components/GenreGrid'

// import { genreList } from '../utils/constants/genreConstants'
import { images } from '../utils/constants/genrePics'

function DiscoverPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Discover</title>
				<meta name='description' content='Discover section' />
			</Head>
			<div className='py-2 lg:py-4 pb-16 lg:pb-12'>
				<div className='p-1 lg:p-2 sm:w-3/5 md:w-1/2'>
					<SearchBar />
				</div>
				<div className='container mx-auto px-1 py-4 md:px-2 md:py-6 lg:p-4 lg:py-8 text-white'>
					<div className='item-container discover-grid'>
						<Link href={'/books/category/bestsellers'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-sky-600 w-40 h-20 md:w-60 md:h-32'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Bestsellers</h5>
							</div>
						</Link>
						<Link href={'/books/category/audiobooks'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-purple-700 w-40 h-20 md:w-60 md:h-32'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Featured Audiobooks</h5>
							</div>
						</Link>
						<Link href={'/books/category/latest'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-emerald-600 w-40 h-20 md:w-60 md:h-32'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Latest arrivals</h5>
							</div>
						</Link>
						<Link href={'/authors'}>
							<div className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								<div className='bg-rose-700 w-40 h-20 md:w-60 md:h-32'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Popular authors</h5>
							</div>
						</Link>
					</div>
				</div>
				<GenreGrid genreList={props.genreList} images={images} />
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
		revalidate: 600, //for production
	}
}

export default DiscoverPage
