import { useEffect, useRef, useContext, Fragment, useState } from 'react'
import Head from 'next/head'

import { getLibraryBooks } from '../../../API/userLibrary'
import SpinnerContext from '../../../store/spinnerContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'

function LibraryBooksPage() {
	const { toggleSpinner } = useContext(SpinnerContext)
	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()
	const [books, setBooks] = useState([])

	useEffect(() => {
		;(async () => {
			toggleSpinner(true)
			const { books } = await getLibraryBooks()
			if (books) {
				setBooks(books)
			}
			toggleSpinner(false)
		})()
	}, [])

	return books.length ? (
		<Fragment>
			<Head>
				<title>Library books</title>
				<meta name='description' content='A list of user library books' />
			</Head>
			<div className='pb-16 xl:pb-8' ref={pageRef}>
				{windowWidth < 1280 && <TopNavModal pageTitle='Library books' pageRef={pageRef} coverRef={coverRef} />}
				<ListGridModal listTitle='Library books' books={books} coverRef={coverRef} />
			</div>
		</Fragment>
	) : (
		<></>
	)
}

export default LibraryBooksPage
