import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import ListSliderModal from '../../../components/modals/ListGridModal'
import BookCard from '../../../components/cards/BookCard'
import GenreListModal from '../../../components/modals/GenreListModal'
import AuthorCard from '../../../components/cards/AuthorCard'
import LibraryIcon from '../../../assets/icons/LibraryIcon'

function LibraryPage(props) {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(userCtx.user?.data)
		// if (!activeUser?.data) getUserProfile()
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
					message='Log in to see saved books, authors,
						and collections in your library.'
					icon={<LibraryIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader pageTitle='Library' />
					<div className='flex flex-col items-center xl:items-start w-full justify-center mx-2 md:mx-6 my-6 space-y-6 xl:space-y-10'>
						<div className='m-4 xl:m-6'>
							<ListSliderModal
								listTitle='Saved books'
								listLink={activeUser.books?.length && '/user/library/collections'}>
								{activeUser.books?.length ? (
									props.bestsellers?.map((book, i) => (
										<BookCard book={book} key={i} />
									))
								) : (
									<p className='text-base md:text-lg xl:text-lg text-gray-300 xl:px-6'>
										You do not have any saved books.
									</p>
								)}
							</ListSliderModal>
						</div>

						<div className='m-4 xl:m-6'>
							<ListSliderModal
								listTitle='Favourites genres'
								listLink={activeUser.genres?.length && '/user/library/collections'}>
								{activeUser.genres?.length ? (
									<GenreListModal genres={user.genres} />
								) : (
									<p className='text-base md:text-lg text-gray-300 xl:px-6'>
										You did not liked any genres yet.
									</p>
								)}
							</ListSliderModal>
						</div>

						<div className='m-4 xl:m-6'>
							<ListSliderModal
								listTitle='Favourites genres'
								listLink={activeUser.genres?.length && '/user/library/collections'}>
								{activeUser.genres?.length ? (
									props.authors?.map((author) => <AuthorCard author={author} />)
								) : (
									<p className='text-base md:text-lg text-gray-300 xl:px-6'>
										You did not follow any authors yet.
									</p>
								)}
							</ListSliderModal>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default LibraryPage
