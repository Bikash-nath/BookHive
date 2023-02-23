import Head from 'next/head'
import { useState, Fragment } from 'react'
// import { useRouter } from 'next/router'
import Link from 'next/link'

import SearchBar from '../components/SearchBar'
import GenreGrid from '../components/GenreGrid'
import { getTopGenres } from '../api/genres'
import { genreList } from '../utils/constants/genreConstants'
import { images } from '../utils/constants/genrePics'

function DiscoverPage(props) {
	// const [searchToggle, setSearchToggle] = useState(false)

	return (
		<Fragment>
			<Head>
				<title>Discover</title>
				<meta name='description' content='Discover section' />
			</Head>
			<div className='bg-gradient pb-24'>
				<div className='p-2 lg:py-4 sm:w-4/6 md:w-1/2 lg:w-1/2'>
					<SearchBar />
				</div>
				{/* <div className={searchToggle && 'opacity-25'}> */}
				<div className='container mx-auto p-2 md:p-6 text-white'>
					<div className='item-container discover-grid grid-cols-2 md:grid-cols-4'>
						<Link href={'/books/category/bestsellers'}>
							<div className='group item rounded-lg'>
								<div className='bg-sky-700 w-36 h-24 md:w-60 md:h-40'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Bestsellers</h5>
							</div>
						</Link>
						<Link href={'/books/category/audiobooks'}>
							<div className='group item rounded-lg'>
								<div className='bg-purple-700 w-36 h-24 md:w-60 md:h-40'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Featured Audiobooks</h5>
							</div>
						</Link>
						<Link href={'/books/category/latest'}>
							<div className='group item rounded-lg'>
								<div className='bg-emerald-700 w-36 h-24 md:w-60 md:h-40'></div>
								<div className='item-gradient'></div>
								<h5 className='box-text'>Latest arrivals</h5>
							</div>
						</Link>
						<Link href={'/authors'}>
							<div className='group item rounded-lg'>
								<div className='bg-rose-700 w-36 h-24 md:w-60 md:h-40'></div>
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
