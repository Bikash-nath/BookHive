import { useRef, Fragment } from 'react'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Link from 'next/link'

import { getTopGenres } from '../API/genres'
import SearchBar from '../components/SearchBar'
import PageHeader from '../components/layouts/PageHeader'
import GenreCards from '../components/cards/GenreCards'
import colors from '../utils/constants/genreColors'
// import { images } from '../utils/constants/genrePics'
// import { genreList } from '../utils/constants/genreConstants'

function DiscoverPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Discover</title>
				<meta name='description' content='Discover section' />
			</Head>
			<div className='bg-[#0C111B] pb-20 xl:pb-10'>
				<div className='sticky top-0 z-10 bg-gradient-to-b from-[#101621] to-[#0C111B]'>
					<PageHeader pageTitle={<p className=''>Discover</p>} />
					<div className='p-1 pb-2 xl:p-2 xl:pb-3 sm:w-3/5 md:w-1/2'>
						<SearchBar />
					</div>
				</div>
				<div className={'mx-auto p-1 md:p-2 xl:p-4'}>
					<div className='item-container discover-grid gap-2 ms:gap-3 sm:gap-4 xl:gap-6'>
						<div className='flex justify-center w-full h-full'>
							<Link href={'/books/category/bestsellers'}>
								<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
									<div className='bg-gradient-to-b from-sky-900 to bg-sky-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
									<h5 className='box-text'>Popular books</h5>
								</div>
							</Link>
						</div>
						<div className='flex justify-center w-full h-full'>
							<Link href={'/books/category/audiobooks'}>
								<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
									<div className='bg-gradient-to-b from-purple-900 to bg-purple-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
									<h5 className='box-text'>Featured Audiobooks</h5>
								</div>
							</Link>
						</div>
						<div className='flex justify-center w-full h-full'>
							<Link href={'/books/category/latest'}>
								<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
									<div className='bg-gradient-to-b from-emerald-900 to bg-emerald-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
									<h5 className='box-text'>Latest arrivals</h5>
								</div>
							</Link>
						</div>
						<div className='flex justify-center w-full h-full'>
							<Link href={'/authors'}>
								<div className='group item rounded-lg w-[10.5rem] h-20 xl:w-60 xl:h-28'>
									<div className='bg-gradient-to-b from-rose-900 to bg-rose-400 bg-opacity-95 w-[10.5rem] h-20 xl:w-60 xl:h-28 items-center'></div>
									<h5 className='box-text'>Popular authors</h5>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<section>
					<div className='mx-auto p-1 md:p-2 xl:p-4 text-white'>
						<h2 className='text-2xl xl:text-3xl text-center xl:text-left pt-4 pb-3 lg:pt-8 lg:pb-6'>
							Popular Genres
						</h2>
						<GenreCards genreList={props.genreList} colors={colors} />
					</div>
				</section>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const topGenres = await getTopGenres()

	if (!topGenres.data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			genreList: topGenres.data,
		},
		revalidate: 600,
	}
}

export default DiscoverPage
