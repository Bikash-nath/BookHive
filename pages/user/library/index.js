import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import UserContext from '../../../store/userContext'
import PageHeader from '../../../components/layouts/PageHeader'
import ListSliderModal from '../../../components/modals/ListSliderModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import LoginBanner from '../../../components/login/LoginBanner'
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
					message='Log in to see saved books, authors, and collections in your library.'
					icon={<LibraryIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader pageTitle='Library' />
					{!activeUser.books?.length &&
					!activeUser.genres?.length &&
					!activeUser.authors?.length ? (
						<div className='flex flex-col items-center justify-center h-full xl:h-[94vh] p-2'>
							<div className='flex py-4 text-white'>
								<LibraryIcon dimensions='h-24 w-24' />
							</div>
							<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
								<h3>Save books, authors and genres to see in your library</h3>
							</div>
						</div>
					) : (
						<div className='flex flex-col items-center xl:items-start w-full justify-center mx-2 md:mx-6 my-6 space-y-6 xl:space-y-10'>
							<div className='m-4 xl:m-6'>
								{/* <p className='text-base md:text-lg xl:text-lg text-gray-300 xl:px-6'>You do not have any saved books.</p> */}

								{activeUser.books.length ? (
									<ListSliderModal
										listTitle='Saved books'
										listLink={'/user/library/collections'}
										books={activeUser.books.length}
									/>
								) : (
									<></>
								)}
							</div>

							<div className='m-4 xl:m-6'>
								{activeUser.genres.length ? (
									<GenreListModal genres={activeUser.genres} />
								) : (
									<></>
								)}
							</div>

							<div className='m-4 xl:m-6'>
								{activeUser.authors.length ? (
									<ListSliderModal
										listTitle='Favourites genres'
										listLink={
											activeUser.genres.length && '/user/library/collections'
										}
										authors={props.authors}
									/>
								) : (
									<></>
								)}
							</div>
						</div>
					)}
				</div>
			)}
		</Fragment>
	)
}

export default LibraryPage
