import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import { getUserLibrary } from '../../../API/userLibrary'
import PageHeader from '../../../components/layouts/PageHeader'
import ListGridModal from '../../../components/modals/ListGridModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import LoginBanner from '../../../components/login/LoginBanner'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function LibraryPage(props) {
	const userCtx = useContext(UserContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const [activeUser, setActiveUser] = useState(null)
	const [library, setLibrary] = useState([null])

	useEffect(() => {
		setActiveUser(userCtx.user?.data)
		if (activeUser) {
			;(async () => {
				toggleSpinner(true)
				const userLibrary = await getUserLibrary()
				if (userLibrary.data) setLibrary(userLibrary.data)
				toggleSpinner(false)
			})()
		}
	}, [activeUser])

	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
			{!activeUser ? (
				<LoginBanner
					title='Enjoy Your Favourite Books'
					message='Log in to see saved books, authors, and collections in your library.'
					icon={<LibraryIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader pageTitle='Library' />
					{!library.books?.length &&
					!library.genres?.length &&
					!library.authors?.length ? (
						<div className='flex flex-col items-center justify-center h-[75vh] p-2'>
							<div className='flex py-4 text-white'>
								<LibraryIcon dimensions='h-24 w-24' />
							</div>
							<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
								<h3>Save books, authors and genres to see in your library</h3>
							</div>
						</div>
					) : (
						<div className='flex flex-col items-center xl:items-start justify-center w-full pb-8 xl:pb-4 md:mx-6'>
							{/* <p className='text-base md:text-lg xl:text-lg text-gray-300 xl:px-6'>You do not have any saved books.</p> */}
							{library.books?.length ? (
								<div className='flex justify-center w-full xl:w-fit xl:m-4'>
									<ListGridModal
										listTitle='Saved books'
										listLink={
											library.books.length > 10
												? '/user/library/user-books'
												: undefined
										}
										books={library.books.slice(library.books.length - 3)}
									/>
								</div>
							) : (
								<></>
							)}

							{library.authors?.length ? (
								<div className='flex justify-center w-full xl:w-fit xl:m-4'>
									<ListGridModal
										listTitle='Followed authors'
										listLink={
											library.authors.length > 10
												? '/user/library/user-authors'
												: undefined
										}
										authors={library.authors.slice(library.authors.length - 3)}
									/>
								</div>
							) : (
								<></>
							)}

							{library.genres?.length ? (
								<div className='flex flex-col w-full xl:w-fit mx-3 xl:mx-4 my-12 xl:my-16'>
									<h3 className='text-xl xl:text-2xl font-semibold leading-relaxed text-center xl:text-left w-full xl:mx-9'>
										Favourite genres
									</h3>
									<GenreListModal genres={library.genres} />
								</div>
							) : (
								<></>
							)}
						</div>
					)}
				</div>
			)}
		</Fragment>
	)
}

export default LibraryPage
