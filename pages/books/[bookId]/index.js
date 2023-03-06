import { useState, useContext, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getBookDetails, getBestsellers } from '../../../api/books'
import SnackbarContext from '../../../store/snackbarContext'
import BgCover from '../../../components/modals/BgCover'
import { pickBgColor } from '../../../utils/helpers/pickBgColor'
import TopNavModal from '../../../components/modals/TopNavModal'
import HeadphoneIcon from '../../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../../assets/icons/BookReadIcon'
import LibraryIcon from '../../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon'
import GenreListModal from '../../../components/modals/GenreListModal'
import StarIcon from '../../../assets/icons/StarIcon'
// import openInNewTab from '../../utils/helpers/openLink'
// import BookPdfReader from '../../../components/book/BookPdfReader'
// import BookEpubReader from '../../../components/book/BookEpubReader'

function BookDetailPage(props) {
	const { book } = props
	const [readMoreDesc, setReadMoreDesc] = useState(false)
	const router = useRouter()

	const snackbarCtx = useContext(SnackbarContext)

	const readBookHandler = () => {
		if (book.format.ebook?.link) {
			// 'https://bookhive-ebooks.s3.amazonaws.com/Never+Split+the+Difference_+Negotiating+as+if+Your+Life+Depended+on+It+by+Chris+Voss.epub'
			// 'https://drive.google.com/uc?id=1hm2Zd_UqBFKr9PZ5pxk8OwGgvJznCFXd&export=download'

			router.push({
				pathname: `/books/${book.slug}/read`,
				query: {
					title: book.title,
					ebookLink: book.format.ebook?.link,
					author: book.author.name,
				},
			})
		} else {
			snackbarCtx.addMessage({ title: 'Sorry, Book not avialabe' })
		}
	}

	const descCountLines = () => {
		if (typeof window !== 'undefined') {
			const descEl = window.document.getElementById('book-desc')
			const divHeight = descEl.offsetHeight
			const lineHeight = parseInt(descEl.style.lineHeight)
			return divHeight / lineHeight
		} else return 0
	}

	return book ? (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>

			<div className='bg-[#0C111B] relative'>
				<div className='pb-16 xl:pb-12'>
					<BgCover color={props.color}>
						<TopNavModal
							rightIcon={<BookmarkIcon dimensions='h-7 w-7' color='' />}
							color={props.color}
						/>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							alt={book.title}
							height={360}
							width={220}
							className='object-contain rounded-lg w-40 h-60 xl:w-48 xl:h-72 xl:m-2 z-30'
						/>
						<div className='flex flex-col px-2 md:px-4 space-y-1 xl:space-y-2'>
							<p className='text-xl md:text-2xl xl:text-3xl text-center xl:text-left font-medium'>
								{book.title}
							</p>
							<Link href={`/authors/${book.author.slug}`}>
								<div className='text-md md:text-lg text-center xl:text-left '>
									By{' '}
									<p className='font-medium inline-block'>{book.author.name}</p>
									<div className='inline-block px-[2px]'>
										<ChevronRightIcon dimensions='h-4 w-4' />
									</div>
								</div>
							</Link>
							<div className='text-center xl:text-left'>
								{book.ratingsAvg ? (
									<div className='flex justify-center text-md md:text-lg text-xl xl:text-2xl w-full font-medium'>
										{book.ratingsAvg}
										<StarIcon dimensions='h-7 w-7' />
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
						{/* bg-[#AA14F0] 'bg-slate-900 border-gray-800 shadow-gray-700' */}
						<div
							className={
								'flex xl:flex-col items-end xl:px-20 space-x-8 xl:space-y-4 right-2'
							}>
							<button
								className={
									'flex items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 bg-[#8C6AFF] rounded-3xl shadow-sm border-[0.5px] border-[#8C6AFF] shadow-purple-500 transition hover:-translate-y-0.5 duration-150 ' +
									(book.format?.ebook?.link ? 'text-white' : 'text-[#c6c6c6]')
								}
								onClick={readBookHandler}>
								<BookReadIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-2 shadow-purple-400'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='xl:flex hidden items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-2 shadow-purple-400'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>

					<GenreListModal genres={book.genres} />
					<div className='flex justify-center w-full'>
						<div className='flex xl:hidden items-center justify-center bg-[#030b17] space-x-2 divide-x divide-gray-400 rounded-md xs:w-[60vw] md:w-[50vw] lg:w-[40vw]'>
							{book.publicationDate !== null && (
								<div className='flex flex-col justify-center items-cent2 px-4 xs: -3 sm:p-4 w-full'>
									<p className='px-4 text-sm md:text-base font-medium'>
										{book.publicationDate.split('-')[0]}
									</p>
									<p className='text-xs font-light xl:text-sm text-gray-200 py-1'>
										published
									</p>
								</div>
							)}
							{book.language && (
								<div className='flex flex-col justify-center items-center p-2 px-4 xs:p-3 sm:p-4 w-full'>
									<p className='text-md md:text-lg italic font-medium'>
										{book.language}
									</p>
									<p className='text-xs font-light xl:text-sm text-gray-200 py-1'>
										language
									</p>
								</div>
							)}
							{book.format?.ebook.pagesCount !== 0 &&
								book.format?.ebook.pagesCount && (
									<div className='flex flex-col justify-center items-center p-2 px-4 xs:p-3 w-full'>
										<p className='px-4 text-sm md:text-base font-medium'>
											{book.format.ebook.pagesCount}
										</p>
										<p className='text-xs font-light xl:text-sm text-gray-200 py-1'>
											pages
										</p>
									</div>
								)}
						</div>
					</div>

					<div className='hidden xl:flex xl:flex-col items-center justify-between bg-[#030b17] space-y-1 md:space-y-2 divide-y divide-gray-700 rounded-md px-4 xl:px-8 py-2 xl:py-4 mx-4 w-[90vw] md:w-[50vw] xl:w-[40vw]'>
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
						{book.language && (
							<div className='flex justify-between items-center p-1 md:p-2 w-full text-sm md:text-base font-medium'>
								<p className='px-4'>Language:</p>
								<p className='px-4'>{book.language}</p>
							</div>
						)}
						{book.format?.ebook.pagesCount !== 0 && book.format?.ebook.pagesCount && (
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
								id='book-desc'
								className={
									'text-md text-gray-200 font-medium inline-block sm:leading-snug leading-normal ' +
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
									'cursor-pointer text-sm xl:text-base font-semibold text-[#8C6AFF] underline decoration-1 decoration-gray-300 underline-offset-4 ' +
									(book.description.length < 300 ? 'hidden' : '')
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
