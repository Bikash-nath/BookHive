import { useState, useEffect, useContext, Fragment } from 'react'

import SpinnerContext from '../../store/spinnerContext'
import { searchBooks } from '../../API/books'
import BookListCards from '../../components/cards/BookListCards'
import SearchIcon from '../../assets/icons/SearchIcon'

function BookSearchModal({ selectBookHandler }) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const [searchResult, setSearchResult] = useState([])
	const [keyword, setKeyword] = useState('')

	const searchBookHandler = async () => {
		toggleSpinner(true)
		const result = await searchBooks({ keyword })
		console.log('result', result)
		if (!result.data) snackbarCtx.addMessage({ title: 'Something went wrong' })
		else setSearchResult(result.data)
		toggleSpinner(false)
	}

	return (
		<>
			<div className='relative w-full'>
				<input
					type='text'
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					className='w-full box-border h-10 p-4 text-white text-lg rounded-full focus:outline-none bg-gray-800'
					placeholder='Search books'
				/>
				<button
					className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full px-1.5'
					onClick={searchBookHandler}>
					<SearchIcon dimensions='h-7 w-7' color={keyword ? 'white' : '#9ca3af'} />
				</button>
			</div>
			<BookListCards books={searchResult} selectBookHandler={selectBookHandler} />
		</>
	)
}

export default BookSearchModal
