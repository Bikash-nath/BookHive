import { useEffect, useRef, useContext, Fragment, useState } from 'react'
import Head from 'next/head'

import { getLibraryBooks } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'

function LibraryBooksPage() {
	const { toggleSpinner } = useContext(SpinnerContext)
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const [books, setBooks] = useState([])

	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()

	useEffect(() => {
		if (!activeUser) setActiveUser(userCtx.user)
		else {
			;(async () => {
				toggleSpinner(true)
				const { books } = await getLibraryBooks()
				if (books.length) {
					setBooks(books)
				}
				toggleSpinner(false)
			})()
		}
	}, [activeUser])

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
