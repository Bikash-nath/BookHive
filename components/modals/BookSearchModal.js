import { useState, useEffect, useRef, useContext, Fragment } from 'react'

import SpinnerContext from '../../store/spinnerContext'
import SnackbarContext from '../../store/snackbarContext'
import { searchBooks } from '../../API/books'
import BookListCards from '../../components/cards/BookListCards'
import SearchIcon from '../../assets/icons/SearchIcon'

function BookSearchModal({ selectedBook, selectBookHandler }) {
	const { activeSpinner, toggleSpinner } = useContext(SpinnerContext)
	const snackbarCtx = useContext(SnackbarContext)
	const [searchResult, setSearchResult] = useState([])
	const [keyword, setKeyword] = useState('')
	const [searchSubmitted, setSearchSubmitted] = useState(false)

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const searchBookHandler = async () => {
		if (!keyword) return
		toggleSpinner(true)
		const result = await searchBooks({ keyword, limit: 5 })
		if (!result.data) snackbarCtx.addMessage({ title: 'Something went wrong', status: 'fail' })
		else setSearchResult(result.data)
		toggleSpinner(false)
		setSearchSubmitted(true)
	}

	const keywordHandler = (e) => {
		setKeyword(e.target.value)
		setSearchSubmitted(false)
	}

	return (
		<Fragment>
			<div className='relative w-full'>
				<input
					type='text'
					value={keyword}
					ref={inputRef}
					onChange={keywordHandler}
					onKeyUp={(e) => {
						if (e.key === 'Enter') searchBookHandler()
					}}
					className='w-full box-border h-10 p-4 text-white text-lg rounded-full bg-slate-700 outline-none focus:ring-1 focus:ring-[#8C6AFF]'
					placeholder='Search books'
				/>
				<button
					className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full px-1.5'
					onClick={searchBookHandler}>
					<SearchIcon dimensions='h-7 w-7' color={keyword ? 'white' : '#9ca3af'} />
				</button>
			</div>
			{searchResult?.length ? (
				<BookListCards books={searchResult} selectedBook={selectedBook} selectBookHandler={selectBookHandler} />
			) : (
				searchSubmitted && <div className='text-xl text-center py-4'>No books found with "{keyword}"</div>
			)}
		</Fragment>
	)
}

export default BookSearchModal
