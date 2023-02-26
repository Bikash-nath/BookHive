import Head from 'next/head'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

import { searchBooks } from '../api/books'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/book/BookGrid'

function SearchPage() {
	const [searchResult, setSearchResult] = useState([])
	const router = useRouter()
	const keyword = router.query.keyword

	useEffect(() => {
		if (keyword) {
			;(async () => {
				const { data } = await searchBooks(keyword)
				setSearchResult(data)
			})()
		}
	}, [keyword])

	return (
		<Fragment>
			<Head>
				<title>Search</title>
				<meta name='description' content='Search section' />
			</Head>
			<div className='h-full'>
				<div className='p-2 lg:py-4 sm:w-4/6 md:w-1/2 lg:w-1/2'>
					<SearchBar />
				</div>
				{!searchResult?.length ? (
					<div className='text-2xl p-4'>No results for "{keyword}"</div>
				) : (
					<>
						<div className='text-2xl p-4'>
							{searchResult?.length} results for "{keyword}"
						</div>
						<BookGrid books={searchResult} />
					</>
				)}
			</div>
		</Fragment>
	)
}

export default SearchPage
