import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import useWindowWidth from '../hooks/useWindowWidth'
import { getBestsellers, getLatestBooks, getTopAudiobooks } from '../api/books'
import { getTopAuthors } from '../api/authors'
import UserContext from '../store/userContext'
import PageHeader from '../components/layouts/PageHeader'
import ScrollToTop from '../components/ScrollToTop'
import ListSliderModal from '../components/modals/ListSliderModal'
import Logo from '../components/ui/Logo'
import LoginButton from '../components/ui/LoginButton'
import AccountIcon from '../assets/icons/AccountIcon'

// import HamburgerIcon from '../assets/icons/HamburgerIcon'
// import SpinnerContext from '../store/spinnerContext'

function HomePage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const windowWidth = useWindowWidth()

	useEffect(() => {
		setActiveUser(user?.data)
		// if (!activeUser) getUserProfile()
	}, [user])

	const pageRef = useRef(null)

	return (
		<Fragment>
			<Head>
				<title>Bookhive</title>
				<meta
					name='description'
					content='Bookhive is an reading platform where you can access to thousands of free audiobooks, eBooks and magazines.'
				/>
			</Head>
			<div className='page-gradient pb-16 xl:pb-12' ref={pageRef}>
				<ScrollToTop pageRef={pageRef} />
				{windowWidth < 1280 && (
					<div className='block'>
						<PageHeader
							pageTitle={<Logo size={32} />}
							rightContainer={
								activeUser?.name ? (
									<Link href={'/user/account'}>
										{activeUser?.image ? (
											<img
												className='rounded-full w-7 h-7'
												src={activeUser.image}
												alt='user image'
											/>
										) : (
											<AccountIcon dimensions='h-7 w-7' />
										)}
									</Link>
								) : (
									<div className='transform scale-90'>
										<LoginButton />
									</div>
								)
							}
						/>
					</div>
				)}
				<div className='py-1 xl:py-4'>
					<ListSliderModal
						listTitle='Popular books'
						listLink='/books/category/bestsellers'
						books={props.bestsellers}
					/>
					<ListSliderModal
						listTitle='Featured Audiobooks'
						listLink='/books/category/audiobooks'
						books={props.audiobooks}
					/>
					<ListSliderModal
						listTitle='Latest arrivals'
						listLink='/books/category/latest'
						books={props.latestBooks}
					/>
					<ListSliderModal
						listTitle='Popular authors'
						listLink='/authors'
						authors={props.authors}
					/>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bestsellers = await getBestsellers({ limit: 15 })
	const audiobooks = await getTopAudiobooks({ limit: 15 })
	const latestBooks = await getLatestBooks({ limit: 15 })
	const authors = await getTopAuthors({ limit: 15 })

	if (!bestsellers.data)
		return {
			notFound: true,
		}

	return {
		props: {
			bestsellers: bestsellers.data,
			audiobooks: audiobooks.data,
			latestBooks: latestBooks.data,
			authors: authors.data,
		},
		revalidate: 600,
	}
}

export default HomePage
