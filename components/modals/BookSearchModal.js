import { useState, useEffect, useRef, useContext, Fragment } from 'react'

import SpinnerContext from '../../store/spinnerContext'
import SnackbarContext from '../../store/snackbarContext'
import { searchBooks } from '../../API/books'
import BookListCards from '../../components/cards/BookListCards'
import SearchIcon from '../../assets/icons/SearchIcon'

function BookSearchModal({ selectedBook, selectBookHandler }) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const snackbarCtx = useContext(SnackbarContext)
	const [searchResult, setSearchResult] = useState([])
	const [keyword, setKeyword] = useState('')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const searchBookHandler = async () => {
		if (!keyword) return
		toggleSpinner(true)
		const result = await searchBooks({ keyword, limit: 5 })
		if (!result.data) snackbarCtx.addMessage({ title: 'Something went wrong' })
		else setSearchResult(result.data)
		toggleSpinner(false)
	}

	return (
		<Fragment>
			<div className='relative w-full'>
				<input
					type='text'
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					ref={inputRef}
					className='w-full box-border h-10 p-4 text-white text-lg rounded-full bg-slate-700 outline-none focus:outline-2 focus:outline-slate-500 focus:bg-slate-700'
					placeholder='Search books'
				/>
				<button
					className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full px-1.5'
					onClick={searchBookHandler}>
					<SearchIcon dimensions='h-7 w-7' color={keyword ? 'white' : '#9ca3af'} />
				</button>
			</div>
			<BookListCards books={searchResult} selectedBook={selectedBook} selectBookHandler={selectBookHandler} />
		</Fragment>
	)
}

export default BookSearchModal
