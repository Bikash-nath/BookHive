import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { getBestsellers, getLatestBooks, getTopAudiobooks } from '../API/books'
import { getTopAuthors } from '../API/authors'
import { getUserProfile } from '../API/userProfile'
import useWindowWidth from '../hooks/useWindowWidth'
import UserContext from '../store/userContext'
import PageHeader from '../components/layouts/PageHeader'
import ListSliderModal from '../components/modals/ListSliderModal'
import Logo from '../components/ui/Logo'
import LoginButton from '../components/ui/LoginButton'
import AccountIcon from '../assets/icons/AccountIcon'
import BellIcon from '../assets/icons/BellIcon'

function HomePage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const windowWidth = useWindowWidth()

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
					content='Bookhive is an evolving reading library with thousands of free audiobooks, eBooks and magazines.
					Now a comprehensive, seamless and personalized reading experience is at your fingertips, making reading more affordable and accessible than ever.'
				/>
			</Head>
			<div className='page-gradient pb-16 xl:pb-8'>
				{windowWidth < 1280 && (
					<div className='block'>
						<PageHeader
							pageTitle={<Logo size={32} />}
							rightContainer={
								activeUser ? (
									<>
										<div className='flex items-center gap-3 focus:bg-slate-800'>
											<BellIcon dimensions='h-7 w-7' />
											<Link href='/user/account/profile'>
												<AccountIcon dimensions='h-7 w-7' />
											</Link>
										</div>
									</>
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
						<div className='flex flex-col w-full xl:gap-2 p-3 md:p-4 xl:px-[5.6rem] xl:pt-10 xl:w-[89vw] my-1 xl:my-2'>
							<h3 className='text-md xl:text-lg font-medium mx-[.5px]'>
								{'Hi, ' + activeUser.name || 'User'}
							</h3>
							<h2 className='text-lg xl:text-xl font-semibold'>{getGreeting()}</h2>
						</div>
					</div>
				)}
				<div className='py-2 xl:py-6'>
					<ListSliderModal
						listTitle='Latest Arrivals'
						listLink='/books/category/latest'
						books={props.latestBooks}
					/>
					<ListSliderModal
						listTitle='Popular Books'
						listLink='/books/category/bestsellers'
						books={props.bestsellers}
					/>
					<ListSliderModal
						listTitle='Featured Audiobooks'
						listLink='/books/category/audiobooks'
						books={props.audiobooks}
					/>
					<ListSliderModal listTitle='Popular Authors' listLink='/authors' authors={props.authors} />
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bestsellers = await getBestsellers({ limit: 18 })
	const audiobooks = await getTopAudiobooks({ limit: 18 })
	const latestBooks = await getLatestBooks({ limit: 18 })
	const authors = await getTopAuthors({ limit: 18 })

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
