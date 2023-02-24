import { useState, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getBookDetails, getBestsellers } from '../../api/books'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import openInNewTab from '../../utils/helpers/openLink'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

function BookDetailPage(props) {
	const { book } = props
	const [readMoreDesc, setReadMoreDesc] = useState(false)

	const descClassHandler = () => {
		if (readMoreDesc) return 'text-md text-gray-200 font-medium inline-block'
		else return 'text-md text-gray-200 font-medium inline-block line-clamp-4'
	}

	return (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='bg-gradient text-white pb-20'>
				<div className='m-0'>
					<BgCover color={props.color}>
						<div className='absolute lg:hidden top-4 right-4'>
							<BookmarkIcon dimensions='h-7 w-7' color='' />
						</div>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							alt={book.title}
							height={320}
							width={210}
							className='object-contain rounded-lg w-40 h-60 lg:w-48 lg:h-72'
						/>
						<div className='flex flex-col px-2 md:px-4 space-y-1 lg:space-y-2'>
							<p className='text-xl md:text-2xl lg:text-3xl text-center lg:text-left font-medium'>
								{book.title}
							</p>
							<Link href={`/authors/${book.author.slug}`}>
								<div className='text-md md:text-lg text-center lg:text-left '>
									By{' '}
									<p className='font-medium inline-block'>{book.author.name}</p>
									<div className='inline-block px-[2px]'>
										<ChevronRightIcon dimensions='h-4 w-4' />
									</div>
								</div>
							</Link>
							<div className='flex items-center justify-center lg:justify-start divide-x divide-gray-400 py-0'>
								<p className='text-md md:text-lg italic font-medium pr-6'>
									{book.language}
								</p>
								{book.ratingsAvg ? (
									<div className='text-md md:text-lg font-semibold pl-6'>
										{book.ratingsAvg} ⭐
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
						<div className='flex lg:flex-col items-end lg:px-20 space-x-8 lg:space-y-4 right-2 text-gray-400'>
							<button className='flex items-center justify-center px-3 py-1 md:p-2 w-full space-x-2 bg-purple-900 rounded-3xl shadow-sm border-[0.5px] border-purple-600 border-1 hover:border-1 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
								<BookReadIcon dimensions='h-7 w-7' color='gray' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center px-3 py-1 md:p-2 w-full space-x-2 bg-purple-900 rounded-3xl shadow-sm border-[0.5px] border-purple-600 border-1 hover:border-1 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='hidden lg:flex items-center justify-center px-3 py-1 md:p-2 w-full space-x-2 bg-purple-900 rounded-3xl shadow-sm border-[0.5px] border-purple-600 border-1 hover:border-1 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>
				</div>

				{/* <div className='text-xl font-semibold w-full px-2 md:px-4'>Genres</div> */}
				<div className='flex flex-wrap items-center justify-start space-x-4 p-2 md:p-4'>
					{book.genres?.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<button className='rounded-full py-1 px-2 lg:p-2 m-2 lg:m-4 font-medium bg-yellow-500 text-black'>
								{genre.title}
							</button>
						</Link>
					))}
				</div>

				<div className='flex flex-col items-center justify-between bg-black space-y-1 md:space-y-2 divide-y divide-gray-700 rounded-md px-4 md:px-8 mx-4 w-[90vw] md:w-[50vw] lg:w-[40vw]'>
					<h4 className='text-lg md:text-xl p-2 font-semibold underline decoration-1 underline-offset-4 decoration-gray-400'>
						Book Details
					</h4>
					{book.publisher !== null && (
						<div className='flex justify-between items-center p-1 md:p-2 w-full text-sm md:text-base font-medium'>
							<p className='px-4'>Publisher:</p>
							<p className='px-4'>{book.publisher}</p>
						</div>
					)}
					{book.publicationDate !== null && (
						<div className='flex justify-between items-center p-1 md:p-2 w-full text-sm md:text-base font-medium'>
							<p className='px-4'>Publication date:</p>
							<p className='px-4'>{book.publicationDate}</p>
						</div>
					)}
					{book.format?.ebook.pagesCount !== 0 && book.format?.ebook.pagesCount && (
						<div className='flex justify-between items-center p-1 md:p-2 w-full text-md md:text-lg font-medium'>
							<p className='px-4'>Pages:</p>
							<p className='px-4'>{book.format.ebook.pagesCount}</p>
						</div>
					)}
				</div>

				{book.description ? (
					<div className='p-4 md:p-8'>
						<h4 className='text-xl md:text-2xl font-semibold py-2'>Book description</h4>
						<p className={descClassHandler()}>{book.description}</p>
						<button
							onClick={(e) => {
								setReadMoreDesc(!readMoreDesc)
								e.preventDefault()
							}}
							className={
								'cursor-pointer font-semibold text-blue-500 underline decoration-1 decoration-gray-300 underline-offset-4 ' +
								(book.description.length < 400 ? 'hidden' : '')
							}>
							{readMoreDesc ? 'Read less' : 'Read more'}
						</button>
					</div>
				) : (
					<></>
				)}
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const book = await getBookDetails(params.bookId)

	if (!book.data) {
		return { notFound: true }
	}

	const bgColor = pickBgColor(book.data.slug)

	return {
		props: {
			book: book.data,
			color: bgColor,
		},
		revalidate: 30,
	}
}

export async function getStaticPaths() {
	const books = await getBestsellers()

	const params = data.books.map((book) => ({
		params: { bookId: book.slug.toString() },
	}))

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default BookDetailPage
