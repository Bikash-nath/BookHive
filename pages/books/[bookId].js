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

function BookDetailPage(props) {
	const { book } = props
	const [readMoreDesc, setReadMoreDesc] = useState(false)

	return (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='bg-gradient text-white pb-20'>
				<div className='m-0'>
					<BgCover color={props.color}>
						<div className='flex items-center justify-between gap-1 md:gap-2'>
							<Image
								src={process.env.BOOKS_URL + book.image.path}
								alt={book.title}
								height={320}
								width={210}
								className='object-contain rounded-lg w-40 h-60 lg:w-48 lg:h-72 m-1'
							/>
							<div className='flex flex-col px-2 md:px-4 space-y-1 lg:space-y-2'>
								<p className='text-xl md:text-2xl lg:text-3xl font-medium'>
									{book.title}
								</p>
								<Link href={`/authors/${book.author.slug}`}>
									<div className='text-md md:text-lg'>
										By{' '}
										<p className='font-medium inline-block underline decoration-1 decoration-gray-300 underline-offset-2'>
											{book.author.name}
										</p>
									</div>
								</Link>
								<div className='text-md md:text-lg italic'>
									Language:{' '}
									<p className='font-medium inline-block mx-2'>{book.language}</p>
								</div>
								{book.ratingsAvg ? (
									<div className='text-md md:text-lg font-semibold'>
										{book.ratingsAvg} ⭐
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
						<div className='flex flex-col justify-center items-center space-y-2 md:space-y-4 text-white'>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-900 border border-black rounded-lg shadow-sm hover:bg-opacity-80 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<BookReadIcon dimensions='h-7 w-7' color='gray' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-900 border border-black rounded-lg shadow-sm hover:bg-opacity-80 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-900 border border-gray-800 rounded-lg shadow-sm hover:bg-opacity-80 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>
				</div>
				<div className='flex flex-col items-center justify-between bg-[#101010] space-y-2 divide-y divide-gray-700 rounded-md px-4 md:px-8 m-4 w-[90vw] md:w-[50vw] lg:w-[40vw]'>
					<h4 className='text-xl md:text-2xl p-2 font-semibold underline decoration-1 underline-offset-4 decoration-gray-400'>
						Book Details
					</h4>
					{book.publisher !== null && (
						<div className='flex justify-between items-center p-4 w-full text-sm md:text-base font-medium'>
							<p className='px-4'>Publisher:</p>
							<p className='px-4'>{book.publisher}</p>
						</div>
					)}
					{book.publicationDate !== null && (
						<div className='flex justify-between items-center p-4 w-full text-sm md:text-base font-medium'>
							<p className='px-4'>Publication date:</p>
							<p className='px-4'>{book.publicationDate}</p>
						</div>
					)}
					{book.format?.ebook.pagesCount !== 0 && book.format?.ebook.pagesCount && (
						<div className='flex justify-between items-center p-4 w-full text-md md:text-lg font-medium'>
							<p className='px-4'>Pages:</p>
							<p className='px-4'>{book.format.ebook.pagesCount}</p>
						</div>
					)}
				</div>
				<div className='flex items-center justify-start space-x-4 p-2 md:p-4'>
					{book.genres?.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<button className='rounded-md p-2 m-4 font-medium bg-gray-800 border-r-zinc-400'>
								{genre.title}
							</button>
						</Link>
					))}
				</div>
				{book.description ? (
					<div className='p-4 md:p-8'>
						<h4 className='text-xl md:text-2xl font-semibold py-2'>Book description</h4>
						{console.log('readMoreDesc--', readMoreDesc)}
						<p
							className={
								'text-md text-gray-200 font-medium inline-block ' + !readMoreDesc
									? 'line-clamp-4'
									: ''
							}>
							{book.description}
						</p>
						<button
							onClick={(e) => {
								setReadMoreDesc(!readMoreDesc)
								e.preventDefault()
							}}
							className={
								'cursor-pointer font-semibold text-blue-500 underline decoration-1 decoration-gray-300 underline-offset-4 ' +
								(book.description.length < 300 ? 'hidden' : '')
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
	const { data } = await getBestsellers()

	const params = data?.map((book) => ({
		params: { bookId: book.slug.toString() },
	}))

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default BookDetailPage
