import Head from 'next/head'
import { useState, useEffect, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'

import { searchBooks } from '../api/books'
import SearchBar from '../components/SearchBar'
import ListGridModal from '../components/modals/ListGridModal'
import SpinnerContext from '../store/spinnerContext'
import SnackbarContext from '../store/snackbarContext'
import Paginate from '../components/widgets/Paginate'

function SearchPage() {
	const [searchResult, setSearchResult] = useState([])
	const router = useRouter()
	const keyword = router.query.keyword

	const { activeSpinner, toggleSpinner } = useContext(SpinnerContext)
	const snackbarCtx = useContext(SnackbarContext)

	useEffect(() => {
		if (keyword) {
			;(async () => {
				toggleSpinner(true)
				const result = await searchBooks(router.query)
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
				<div className='p-1 xl:p-2 sm:w-3/5 md:w-1/2'>
					<SearchBar />
				</div>
				{searchResult?.length ? (
					<div className='pb-16 xl:pb-10'>
						<div className='text-2xl p-4'>
							{searchResult?.length} results for "{keyword}"
						</div>
						<ListGridModal books={searchResult} />
						{searchResult.length >= 30 && <Paginate totalPages={3} page={1} />}
					</div>
				) : (
					!activeSpinner && <div className='text-2xl p-4'>No results for "{keyword}"</div>
				)}
			</div>
		</Fragment>
	)
}

export default SearchPage
