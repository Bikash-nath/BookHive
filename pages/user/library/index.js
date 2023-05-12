import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import { getUserLibrary } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import PageHeader from '../../../components/layouts/PageHeader'
import ListSliderModal from '../../../components/modals/ListSliderModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import LoginBanner from '../../../components/login/LoginBanner'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function LibraryPage() {
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
	console.log('library', library)

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
					{!library.books?.length && !library.genres?.length && !library.authors?.length ? (
						<div className='flex flex-col items-center justify-center h-[75vh] p-2'>
							<div className='flex py-4 text-white'>
								<LibraryIcon dimensions='h-24 w-24' />
							</div>
							<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
								<h3>Save books, authors and genres to see in your library</h3>
							</div>
						</div>
					) : (
						<div className='pb-16 xl:pb-8'>
							{library.readHistory?.length ? (
								<ListSliderModal
									listTitle='Read history'
									listLink={library.readHistory.length > 6 ? '/user/library/read-history' : null}
									books={library.readHistory}
								/>
							) : (
								<></>
							)}

							{library.books?.length ? (
								<ListSliderModal
									listTitle='Saved books'
									listLink={library.books.length > 6 ? '/user/library/user-books' : null}
									books={library.books}
								/>
							) : (
								<></>
							)}

							{library.authors?.length ? (
								<ListSliderModal
									listTitle='Followed authors'
									listLink={library.authors.length > 6 ? '/user/library/user-authors' : null}
									authors={library.authors}
								/>
							) : (
								<></>
							)}

							{library.genres?.length ? (
								<div className='flex flex-col w-full xl:w-fit px-2 xl:px-4 mt-12 xl:mt-16'>
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
