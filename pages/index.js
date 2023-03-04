import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import { getBestsellers, getLatestBooks } from '../api/books'
import { getTopAuthors } from '../api/authors'
import UserContext from '../store/userContext'
import PageHeader from '../components/layouts/PageHeader'
import ListSliderModal from '../components/modals/ListSliderModal'
import BookRow from '../components/book/BookRow'
import AuthorRow from '../components/author/AuthorRow'
import Logo from '../components/ui/Logo'
import AccountIcon from '../assets/icons/AccountIcon'
import HamburgerIcon from '../assets/icons/HamburgerIcon'
import LoginButton from '../components/ui/LoginButton'
// import SpinnerContext from '../store/spinnerContext'

function HomePage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(user)
		// if (!activeUser?.data) getUserProfile()
	}, [user])

	return (
		<Fragment>
			<Head>
				<title>Bookhive</title>
				<meta
					name='description'
					content='Bookhive is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div className='page-gradient pb-16 lg:pb-12'>
				<div className='block lg:hidden'>
					<PageHeader
						pageTitle={<Logo size={32} />}
						rightContainer={
							activeUser?.data ? (
								<>
									{activeUser?.data?.image ? (
										<img
											className='rounded-full w-7 h-7'
											src={activeUser.data.image}
											alt='user image'
										/>
									) : (
										<AccountIcon dimensions='h-7 w-7' />
									)}
								</>
							) : (
								<div className='transform scale-90'>
									<LoginButton />
								</div>
							)
						}
					/>
				</div>
				<div className='py-1 lg:py-4'>
					<ListSliderModal
						listTitle='Popular books'
						listLink='/books/category/bestsellers'>
						{<BookRow books={props.bestsellers} />}
					</ListSliderModal>
					{/* <ListSliderModal
					listTitle='Featured Audiobooks'
					listLink='/books/category/audiobooks'>
					{<BookRow books={props.audiobooks} />}
				</ListSliderModal> */}
					<ListSliderModal listTitle='Latest arrivals' listLink='/books/category/latest'>
						{<BookRow books={props.latestBooks} />}
					</ListSliderModal>
					<ListSliderModal listTitle='Popular authors' listLink='/authors'>
						{<AuthorRow authors={props.authors} />}
					</ListSliderModal>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bestsellers = await getBestsellers(15)
	// const audiobooks = await getTopAudiobooks()
	const latestBooks = await getLatestBooks(15)
	const authors = await getTopAuthors(15)

	if (!bestsellers.data)
		return {
			notFound: true,
		}

	return {
		props: {
			bestsellers: bestsellers.data,
			// audiobooks: audiobooks.data,
			latestBooks: latestBooks.data,
			authors: authors.data,
		},
		revalidate: 600,
	}
}

export default HomePage
