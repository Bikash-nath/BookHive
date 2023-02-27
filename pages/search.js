import Head from 'next/head'
import { useState, useEffect, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'

import { searchBooks } from '../api/books'
import SearchBar from '../components/SearchBar'
import BookGrid from '../components/book/BookGrid'
import SpinnerContext from '../store/spinnerContext'
import SnackbarContext from '../store/snackbarContext'

function SearchPage() {
	const [searchResult, setSearchResult] = useState([])
	const router = useRouter()
	const keyword = router.query.keyword

	const { toggleSpinner } = useContext(SpinnerContext)
	const snackbarCtx = useContext(SnackbarContext)

	useEffect(() => {
		if (keyword) {
			;(async () => {
				toggleSpinner(true)
				const result = await searchBooks(keyword)
				setSearchResult(result.data)
				if (!result.data) snackbarCtx.addMessage({ title: 'Something went wrong' })
				toggleSpinner(false)
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
				<div className='p-1 lg:p-2 sm:w-3/5 md:w-1/2'>
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
