import { useEffect, useRef, useContext, Fragment, useState } from 'react'
import Head from 'next/head'

import { getLibraryAuthors } from '../../../API/userLibrary'
import SpinnerContext from '../../../store/spinnerContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'

function LibraryAuthorssPage() {
	const { toggleSpinner } = useContext(SpinnerContext)
	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()
	const [authors, setAuthors] = useState([])

	useEffect(() => {
		;(async () => {
			toggleSpinner(true)
			const { authors } = await getLibraryAuthors()
			if (authors) setAuthors(authors)
			toggleSpinner(false)
		})()
	}, [])

	return authors.length ? (
		<Fragment>
			<Head>
				<title>Favourite authors</title>
				<meta name='description' content='A list of user library authors' />
			</Head>
			<div className='xl:pb-8' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal pageTitle='Favourite authors' pageRef={pageRef} coverRef={coverRef} />
				)}
				<ListGridModal listTitle='Favourite authors' authors={authors} coverRef={coverRef} />
			</div>
		</Fragment>
	) : (
		<></>
	)
}

export default LibraryAuthorssPage
