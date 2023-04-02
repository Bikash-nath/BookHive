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
			? 'Good Morning, '
			: timeNow >= 12 && timeNow < 18
			? 'Good Afternoon, '
			: 'Good Evening, '
	}
	{
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
						<div className='flex flex-col w-full xl:gap-2 p-3 md:p-4 xl:px-[5.5rem] xl:pt-10 xl:w-[89vw] my-1 xl:my-2'>
							<h2 className='text-lg xl:text-xl font-semibold'>
								{getGreeting() + activeUser.name.split(' ')[0]}
							</h2>
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
						listTitle='Popular Book Summary'
						listLink='/books/category/bestsellers'
						books={props.bestsellers}
					/>
					<ListSliderModal
						listTitle='Short Audiobooks'
						listLink='/books/category/audiobooks'
						books={props.audiobooks}
					/>
					<ListSliderModal listTitle='Popular Authors' listLink='/authors' authors={props.authors} />

					<div className='mx-auto p-1 md:p-2 xl:py-6 xl:px-8'>
						<h2 className='text-2xl xl:text-3xl text-center m-4 xl:my-4 xl:mx-12 xl:text-left'>
							Featured categories
						</h2>
						<div className='item-container categories-grid gap-2 ms:gap-3 sm:gap-4 xl:gap-6 xl:mx-8'>
							<div className='flex justify-center w-full h-full'>
								<Link href=''>
									<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
										<div className='bg-gradient-to-b from-slate-900 to bg-slate-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Blogs</h5>
									</div>
								</Link>
							</div>

							<div className='flex justify-center w-full h-full'>
								<Link href=''>
									<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
										<div className='bg-gradient-to-b from-gray-900 to bg-gray-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Podcasts</h5>
									</div>
								</Link>
							</div>

							<div className='flex justify-center w-full h-full'>
								<Link href=''>
									<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
										<div className='bg-gradient-to-b from-zinc-900 to bg-zinc-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Short Stories</h5>
									</div>
								</Link>
							</div>

							<div className='flex justify-center w-full h-full'>
								<Link href=''>
									<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
										<div className='bg-gradient-to-b from-stone-900 to bg-stone-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
										<h5 className='box-text'>Poems</h5>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const latestBooks = await getLatestBooks({ limit: 18 })
	const bestsellers = await getBestsellers({ limit: 18 })
	const audiobooks = await getTopAudiobooks({ limit: 18 })
	const authors = await getTopAuthors({ limit: 18 })

	if (!bestsellers.data)
		return {
			notFound: true,
		}

	return {
		props: {
			// getTopFree: topFreeBooks.data,
			bestsellers: bestsellers.data,
			audiobooks: audiobooks.data,
			latestBooks: latestBooks.data,
			authors: authors.data,
		},
		revalidate: 600,
	}
}

export default HomePage
