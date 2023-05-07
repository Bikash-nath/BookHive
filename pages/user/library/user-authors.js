import { useEffect, useRef, useContext, Fragment, useState } from 'react'
import Head from 'next/head'

import { getLibraryAuthors } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'

function LibraryAuthorssPage() {
	const userCtx = useContext(UserContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const [activeUser, setActiveUser] = useState(null)
	const [authors, setAuthors] = useState([])

	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()

	useEffect(() => {
		if (!activeUser) setActiveUser(userCtx.user)
		else {
			;(async () => {
				toggleSpinner(true)
				const { authors } = await getLibraryAuthors()
				if (authors) setAuthors(authors)
				toggleSpinner(false)
			})()
		}
	}, [activeUser])

	return authors.length ? (
		<Fragment>
			<Head>
				<title>Favourite authors</title>
				<meta name='description' content='A list of user library authors' />
			</Head>
			<div className='pb-16 xl:pb-8' ref={pageRef}>
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
