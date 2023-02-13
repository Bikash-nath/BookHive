import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import SearchBar from '../components/SearchBar'
import BookGrid from '../components/book/BookGrid'

function SearchPage() {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>Search</title>
				<meta name='description' content='Search section' />
			</Head>
			<div className='bg-gradient pb-24'>
				<div className='p-2 lg:py-4 sm:w-4/6 md:w-1/2 lg:w-1/2'>
					<SearchBar />
				</div>
				<BookGrid />
			</div>
		</Fragment>
	)
}

export default SearchPage
