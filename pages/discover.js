import Head from 'next/head'
import { Fragment } from 'react'
// import { useRouter } from 'next/router'

import SearchBar from '../components/SearchBar'
import GenreGrid from '../components/GenreGrid'

import { genreList } from '../utils/constants/genreConstants'
import { images } from '../utils/constants/genrePics'

function DiscoverPage() {
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
				<GenreGrid genreList={genreList} images={images} />
			</div>
		</Fragment>
	)
}

export default DiscoverPage
