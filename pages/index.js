import { useState, useEffect, useContext, useRef, Fragment, React } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import useWindowWidth from '../hooks/useWindowWidth'
import { getBestsellers, getLatestBooks, getTopAudiobooks } from '../API/books'
import { getTopAuthors } from '../API/authors'
import { getUserProfile } from '../API/userProfile'
import UserContext from '../store/userContext'
import PageHeader from '../components/layouts/PageHeader'
import ListSliderModal from '../components/modals/ListSliderModal'
import Logo from '../components/ui/Logo'
import LoginButton from '../components/ui/LoginButton'
import AccountIcon from '../assets/icons/AccountIcon'

// import ScrollToTop from '../components/ScrollToTop'
// import HamburgerIcon from '../assets/icons/HamburgerIcon'
// import SpinnerContext from '../store/spinnerContext'

function HomePage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const windowWidth = useWindowWidth()
	const pageRef = useRef(null)

	useEffect(() => {
		if (!activeUser) getUserProfile()
		setActiveUser(user?.data)
	}, [user])

	const getGreeting = () => {
		const timeNow = new Date().getHours()
		return timeNow >= 5 && timeNow < 12
			? 'Good Morning'
			: timeNow >= 12 && timeNow < 18
			? 'Good Afternoon'
			: 'Good Evening'
	}

	return (
		<Fragment>
			<Head>
				<title>Bookhive</title>
				<meta
					name='description'
					content='Bookhive is an extensive reading library with thousands of free audiobooks, eBooks and magazines.
					Now a comprehensive, seamless and personalized reading experience is at your fingertips, making reading more affordable and accessible than ever.'
				/>
			</Head>
			<div className='page-gradient pb-16 xl:pb-12' ref={pageRef}>
				{/* <ScrollToTop pageRef={pageRef} /> */}
				{windowWidth < 1280 && (
					<div className='block'>
						<PageHeader
							pageTitle={<Logo size={32} />}
							rightContainer={
								activeUser?.name ? (
									<Link href={'/user/account/profile'}>
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
				{activeUser && (
					<div className='flex w-full items-center justify-center'>
						<div className='flex flex-col w-full xl:gap-2 p-3 md:p-4 xl:px-[5.6rem] xl:pt-10 xl:w-[84vw] my-1 xl:my-2'>
							<h3 className='text-md xl:text-lg font-medium mx-[.5px]'>
								{'Hi, ' + activeUser.name || 'User'}
							</h3>
							<h2 className='text-lg xl:text-xl font-semibold'>{getGreeting()}</h2>
						</div>
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
