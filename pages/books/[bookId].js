import { useState, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getBookDetails, getBestsellers } from '../../api/books'
import BookReader from '../../components/book/BookReader'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import NavigateBackButtton from '../../components/ui/NavigateBackButtton'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
// import openInNewTab from '../../utils/helpers/openLink'

function BookDetailPage(props) {
	const { book } = props
	const [readMoreDesc, setReadMoreDesc] = useState(false)
	const [readBook, setReadBook] = useState(false)

	return book ? (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			{readBook ? (
				<BookReader ebookLink={book.format.ebook?.link} closeReadBook={setReadBook} />
			) : (
				<div className='relative flex-auto'>
					<NavigateBackButtton />
					<div className='pb-16 lg:pb-12'>
						<BgCover color={props.color}>
							<div className='absolute lg:hidden top-4 right-4'>
								<BookmarkIcon dimensions='h-7 w-7' color='' />
							</div>
							<Image
								src={process.env.BOOKS_URL + book.image.path}
								alt={book.title}
								height={360}
								width={220}
								className='object-contain rounded-lg w-40 h-60 lg:w-48 lg:h-72 lg:m-2'
							/>
							<div className='flex flex-col px-2 md:px-4 space-y-1 lg:space-y-2'>
								<p className='text-xl md:text-2xl lg:text-3xl text-center lg:text-left font-medium'>
									{book.title}
								</p>
								<Link href={`/authors/${book.author.slug}`}>
									<div className='text-md md:text-lg text-center lg:text-left '>
										By{' '}
										<p className='font-medium inline-block'>
											{book.author.name}
										</p>
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
										<div className='text-md md:text-lg font-medium pl-6'>
											{book.ratingsAvg} ⭐
										</div>
									) : (
										<></>
									)}
								</div>
							</div>
							{/* bg-[#AA14F0] 'bg-slate-900 border-gray-800 shadow-gray-700' */}
							<div
								className={
									'flex lg:flex-col items-end lg:px-20 space-x-8 lg:space-y-4 right-2'
								}>
								<button
									className={
										'flex items-center justify-center px-3 py-1 lg:p-2 w-full space-x-2 bg-[#8C6AFF] rounded-3xl shadow-sm border-[0.5px] border-[#8C6AFF] shadow-purple-500 transition hover:-translate-y-0.5 duration-150 ' +
										(book.format?.ebook?.link ? 'text-white' : 'text-[#c6c6c6]')
									}
									onClick={() => book.format.ebook?.link && setReadBook(true)}>
									<BookReadIcon dimensions='h-7 w-7' />
									<span className='font-semibold'>Read</span>
								</button>
								<button className='flex items-center justify-center px-3 py-1 lg:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-2 shadow-purple-400'>
									<HeadphoneIcon dimensions='h-7 w-7' />
									<span className='font-semibold'>Listen</span>
								</button>
								<button className='lg:flex hidden items-center justify-center px-3 py-1 lg:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-2 shadow-purple-400'>
									<LibraryIcon dimensions='h-7 w-7' />
									<span className='font-semibold'>Add To Library</span>
								</button>
							</div>
						</BgCover>

						{/* <div className='text-xl font-semibold w-full px-2 md:px-4'>Genres</div> */}
						<div className='flex flex-wrap items-center justify-start space-x-4 p-4 lg:p-8'>
							{book.genres?.map((genre, i) => (
								<Link href={`/books/genre/${genre.slug}`} key={i}>
									<button className='rounded-full py-1 px-2 lg:p-2 lg:px-3 m-2 lg:m-3 font-medium bg-[#334366] text-white'>
										{genre.title}
									</button>
								</Link>
							))}
						</div>

						<div className='flex lg:hidden items-center lg:items-start justify-between bg-[#030b17] space-x-2 divide-x divide-gray-400 rounded-md lg:px-8 py-2 lg:py-4 mx-2 sm:w-[80vw] md:w-[60vw] lg:w-[40vw]'>
							{book.publisher !== null && (
								<div className='flex justify-center items-center p-1 px-2 sm:p-2 w-full'>
									<BookReadIcon dimensions='h-7 w-7' color='#e1e1e1' />
									<p className='px-4 text-sm md:text-base font-medium'>
										{book.publisher}
									</p>
								</div>
							)}
							{book.publicationDate !== null && (
								<div className='flex justify-center items-center p-1 sm:p-3 w-full'>
									<BookReadIcon dimensions='h-7 w-7' color='#e1e1e1' />
									<p className='px-4 text-sm md:text-base font-medium'>
										{book.publicationDate.split('-')[0]}
									</p>
								</div>
							)}
							{book.format?.ebook.pagesCount !== 0 &&
								book.format?.ebook.pagesCount && (
									<div className='flex justify-center items-center p-1 px-2 sm:p-2 w-full'>
										<BookReadIcon dimensions='h-7 w-7' color='#e1e1e1' />
										<p className='px-4 text-sm md:text-base font-medium'>
											{book.format.ebook.pagesCount} pages
										</p>
									</div>
								)}
						</div>

						<div className='hidden lg:flex lg:flex-col items-center justify-between bg-[#030b17] space-y-1 md:space-y-2 divide-y divide-gray-700 rounded-md px-4 lg:px-8 py-2 lg:py-4 mx-4 w-[90vw] md:w-[50vw] lg:w-[40vw]'>
							<h4 className='text-lg md:text-xl font-semibold underline decoration-1 underline-offset-4 decoration-gray-400'>
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
							{book.format?.ebook.pagesCount !== 0 &&
								book.format?.ebook.pagesCount && (
									<div className='flex justify-between items-center p-1 md:p-2 w-full text-sm md:text-base font-medium'>
										<p className='px-4'>Pages:</p>
										<p className='px-4'>{book.format.ebook.pagesCount}</p>
									</div>
								)}
						</div>

						{book.description ? (
							<div className='p-4 md:p-8'>
								<h4 className='text-xl md:text-2xl font-semibold py-2'>
									Book description
								</h4>
								<p
									className={
										'text-md text-gray-200 font-medium inline-block ' +
										(!readMoreDesc ? 'line-clamp-4' : '')
									}>
									{book.description}
								</p>
								<button
									onClick={(e) => {
										setReadMoreDesc(!readMoreDesc)
										e.preventDefault()
									}}
									className={
										'cursor-pointer text-sm lg:text-base font-semibold text-blue-500 underline decoration-1 decoration-gray-300 underline-offset-4 ' +
										(book.description.length < 400 ? 'hidden' : '')
									}>
									{readMoreDesc ? (
										<div className='flex'>
											Read less <ChevronUpIcon dimensions='h-5 w-5' />
										</div>
									) : (
										<div className='flex'>
											Read more{' '}
											<div className='py-[.1rem]'>
												<ChevronDownIcon dimensions='h-5 w-5' />
											</div>
										</div>
									)}
								</button>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			)}
		</Fragment>
	) : (
		<></>
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

	const bookParams = data.map((book) => ({
		params: { bookId: book.slug.toString() },
	}))

	return {
		paths: bookParams,
		fallback: true,
	}
}

export default BookDetailPage
