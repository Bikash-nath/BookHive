import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useWindowWidth from '../../../hooks/useWindowWidth'
import { getBookDetails, getBestsellers } from '../../../api/books'
import SnackbarContext from '../../../store/snackbarContext'
import BgCover from '../../../components/modals/BgCover'
import { pickBgColor } from '../../../utils/helpers/pickBgColor'
import TopNavModal from '../../../components/modals/TopNavModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import HeadphoneIcon from '../../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../../assets/icons/BookReadIcon'
import LibraryIcon from '../../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon'
import StarIcon from '../../../assets/icons/StarIcon'
import ShareIcon from '../../../assets/icons/ShareIcon'
import ScrollToTop from '../../../components/ScrollToTop'

// import openInNewTab from '../../utils/helpers/openLink'
// import BookPdfReader from '../../../components/book/BookPdfReader'
// import BookEpubReader from '../../../components/book/BookEpubReader'

function BookDetailPage(props) {
	const { book } = props
	const snackbarCtx = useContext(SnackbarContext)

	const [readMoreDesc, setReadMoreDesc] = useState(false)
	const [descLines, setDescLines] = useState(0)
	const windowWidth = useWindowWidth()

	const descRef = useRef(null)
	const coverRef = useRef(null)
	const pageRef = useRef(null)

	const router = useRouter()

	const readBookHandler = () => {
		// if (book.format.ebook?.link) {
		// 'https://bookhive-ebooks.s3.amazonaws.com/Never+Split+the+Difference_+Negotiating+as+if+Your+Life+Depended+on+It+by+Chris+Voss.epub'
		// 'https://drive.google.com/uc?id=1hm2Zd_UqBFKr9PZ5pxk8OwGgvJznCFXd&export=download'

		router.push({
			pathname: `/books/${book.slug}/read`,
			query: {
				title: book.title,
				ebookLink: '/ebooks/The-Psychology-of Money.epub',
				author: book.author.name,
			},
		})
		// } else {
		// 	snackbarCtx.addMessage({ title: 'Sorry, Book not avialabe' })
		// }
	}

	const readMoreDescHandler = () => {
		const descEl = descRef.current
		if (descEl) {
			descEl.style.display = 'inline'
			setDescLines(descEl.getClientRects().length)
			descEl.style.display = '-webkit-box'
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && descRef) {
			readMoreDescHandler()
			window.addEventListener('orientationchange', readMoreDescHandler, false) // descLines incorrect value
		}
	}, [descRef?.current])

	return book ? (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>

			<div className='cover-page-bg relative' ref={pageRef}>
				<ScrollToTop pageRef={pageRef} />
				<div className='pb-16 xl:pb-12'>
					{windowWidth < 1280 && (
						<TopNavModal
							rightIcon={<ShareIcon dimensions='h-6 w-6' color='' />}
							lastIcon={<BookmarkIcon dimensions='h-7 w-7' color='' />}
							pageTitle={book.title}
							pageRef={pageRef}
							coverRef={coverRef}
						/>
					)}
					<BgCover color={props.color} coverRef={coverRef}>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							alt={book.title}
							height={360}
							width={220}
							className='object-contain rounded-lg w-36 h-[13.5rem] xl:w-44 xl:h-64 m-1'
						/>
						<div className='flex flex-col px-2 md:px-4 space-y-1 xl:space-y-2'>
							<div className='flex items-center justify-center xl:items-start xl:justify-start max-w-[30rem] min-w-[20rem]'>
								<p className='text-xl xl:text-2xl text-center xl:text-left font-medium'>
									{book.title}
								</p>
							</div>
							<Link href={`/authors/${book.author.slug}`}>
								<div className='text-md md:text-lg text-center xl:text-left '>
									By{' '}
									<p className='font-medium inline-block'>{book.author.name}</p>
									<div className='inline-block px-[2px] py-[1px]'>
										<ChevronRightIcon dimensions='h-4 w-4' />
									</div>
								</div>
							</Link>
							<div className='text-center xl:text-left'>
								{book.ratingsAvg ? (
									<div className='flex items-center justify-center xl:justify-start text-md md:text-lg text-xl w-full font-medium'>
										<div className='mr-1 xl:mr-2'>
											<StarIcon dimensions='h-6 w-6' />
										</div>
										{book.ratingsAvg}
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
						{/* bg-[#AA14F0] 'bg-slate-900 border-gray-800 shadow-gray-700' */}
						<div className='flex xl:flex-col items-end xl:px-10 space-x-8 xl:space-y-4 right-2'>
							<button
								className={
									'flex items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 bg-[#8C6AFF] rounded-3xl shadow-sm border-[0.5px] border-[#8C6AFF] shadow-purple-500 transition hover:-translate-y-0.5 duration-150 ' +
									(book.format?.ebook?.link ? 'text-white' : 'text-[#c6c6c6]')
								}
								onClick={readBookHandler}>
								<BookReadIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-[1px] xl:border-2 shadow-purple-400'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='xl:flex hidden items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 rounded-3xl max-sm: p-2 font-bold shadow-sm hover:bg-opacity-90 border-[#8C6AFF] border-[1px] xl:border-2 shadow-purple-400'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>

					<GenreListModal genres={book.genres} />

					<div className='flex justify-center items-center w-full'>
						<div className='flex items-center justify-center rounded-md divide-x divide-gray-600 space-x-2 p-1 md:p-2 xl:p-3 bg-[#030b17]'>
							{book.language && (
								<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
									<p className='px-2 text-md md:text-base font-medium'>
										{book.language}
									</p>
									<p className='text-sm font-light xl:text-md text-gray-300 py-1'>
										language
									</p>
								</div>
							)}
							{book.format?.ebook.pagesCount !== 0 &&
								book.format?.ebook.pagesCount && (
									<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
										<p className='px-4 text-sm md:text-base font-medium'>
											{book.format.ebook.pagesCount}
										</p>
										<p className='text-sm font-light xl:text-md text-gray-300 py-1'>
											pages
										</p>
									</div>
								)}
							{book.publicationDate !== null && (
								<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
									<p className='px-4 text-sm md:text-base font-medium'>
										{book.publicationDate.split('-')[0]}
									</p>
									<p className='text-sm font-light xl:text-md text-gray-300 py-1'>
										published
									</p>
								</div>
							)}
							{book.publisher !== null && (
								<div className='hidden md:flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 h-full'>
									<p className='px-2 text-sm text-center font-medium leading-5 min-w-max min-h-full'>
										{book.publisher}
									</p>
									<p className='text-sm font-light xl:text-md text-gray-300 py-1'>
										publisher
									</p>
								</div>
							)}
						</div>
					</div>

					{book.description ? (
						<div className='p-4 md:p-8'>
							<h4 className='text-xl md:text-2xl font-semibold py-2'>
								Book description
							</h4>
							<p
								ref={descRef}
								className={
									'text-md text-gray-200 font-medium sm:leading-snug leading-normal ' +
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
									'cursor-pointer text-sm xl:text-sm font-semibold text-[#8C6AFF] underline decoration-1 decoration-gray-300 underline-offset-4 ' +
									(descLines <= 4 ? 'hidden' : '')
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
