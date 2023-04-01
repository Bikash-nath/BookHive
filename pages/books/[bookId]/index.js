import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getBookDetails, getBestsellers, getLatestBooks } from '../../../API/books'
import { favouriteBook, getLibraryBooks } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import BgCover from '../../../components/modals/BgCover'
import { pickBgColor } from '../../../utils/helpers/pickBgColor'
import TopNavModal from '../../../components/modals/TopNavModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import ReviewCard from '../../../components/cards/ReviewCard'
import ButtonSpinner from '../../../components/widgets/ButtonSpinner'
import HeadphoneIcon from '../../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../../assets/icons/BookReadIcon'
import LibraryIcon from '../../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon'
import StarIcon from '../../../assets/icons/StarIcon'
import ShareIcon from '../../../assets/icons/ShareIcon'
import ReportIcon from '../../../assets/icons/ReportIcon'
// import openInNewTab from '../../utils/helpers/openLink'
// import BookPdfReader from '../../../components/book/BookPdfReader'

function BookDetailPage(props) {
	const { book } = props
	const { user } = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const windowWidth = useWindowWidth()

	const [readMoreDesc, setReadMoreDesc] = useState(false)
	const [descLines, setDescLines] = useState(0)
	const [isFavourite, setFavourite] = useState(false)
	const [loadingFavourite, setLoadingFavourite] = useState(false)

	const descRef = useRef(null)
	const coverRef = useRef(null)

	const router = useRouter()

	useEffect(() => {
		if (typeof window !== 'undefined' && descRef) {
			readMoreDescHandler()
			window.addEventListener('orientationchange', readMoreDescHandler, false) // descLines incorrect value
		}
	}, [descRef?.current])

	const readMoreDescHandler = () => {
		const descEl = descRef.current
		if (descEl) {
			descEl.style.display = 'inline'
			setDescLines(descEl.getClientRects().length)
			descEl.style.display = '-webkit-box'
		}
	}

	useEffect(() => {
		if (!isFavourite && user?.data) {
			;(async () => {
				setLoadingFavourite(true)
				const library = await getLibraryBooks()
				if (!library.books) {
					snackbarCtx.addMessage({ title: library })
					setLoadingFavourite(false)
					return
				}
				if (library.books.find((b) => b.slug === book?.slug)) setFavourite(true)
				else setFavourite(false)
				setLoadingFavourite(false)
			})()
		}
	}, [])

	const favouriteBookHandler = async () => {
		if (!user?.data) snackbarCtx.addMessage({ title: 'Please login to save favourite books' })
		else {
			setLoadingFavourite(true)
			const library = await favouriteBook(book.slug)
			if (!library.books) {
				snackbarCtx.addMessage({ title: library })
				setLoadingFavourite(false)
				return
			}
			if (library.books.find((b) => b.slug === book.slug)) {
				setFavourite(true)
				snackbarCtx.addMessage({ title: 'Book saved in your library' })
			} else {
				setFavourite(false)
				snackbarCtx.addMessage({ title: 'Book removed from your library' })
			}
			setLoadingFavourite(false)
		}
	}

	const readBookHandler = () => {
		// 'https://bookhive-ebooks.s3.amazonaws.com/Never+Split+the+Difference_+Negotiating+as+if+Your+Life+Depended+on+It+by+Chris+Voss.epub'
		// 'https://drive.google.com/uc?id=1hm2Zd_UqBFKr9PZ5pxk8OwGgvJznCFXd&export=download'
		if (book.format?.ebook?.link) {
			router.push({
				pathname: `/books/${book.slug}/read`,
				query: {
					ebookLink: book.format.ebook.link,
					author: book.author.name,
				},
			})
		} else {
			snackbarCtx.addMessage({ title: 'Sorry, Book not avialabe' })
		}
	}

	const shareBookHandler = async () => {
		if (navigator?.share) {
			await navigator.share({
				title: book.title,
				url: window.location.origin + router.asPath,
			})
		} else {
			snackbarCtx.addMessage({
				title: 'Sorry! Web Share API is not supported in this browser',
			})
		}
	}

	return book ? (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>

			<div className='cover-page-bg relative pb-16 xl:pb-8'>
				{windowWidth < 1280 && (
					<TopNavModal
						rightIcon={
							<div onClick={shareBookHandler}>
								<ShareIcon dimensions='h-6 w-6' color='' />
							</div>
						}
						lastIcon={
							loadingFavourite ? (
								<ButtonSpinner dimensions='h-7 w-7' />
							) : (
								<div onClick={favouriteBookHandler}>
									{isFavourite ? (
										<BookmarkIcon dimensions='h-7 w-7' color='white' />
									) : (
										<BookmarkIcon dimensions='h-7 w-7' color='' />
									)}
								</div>
							)
						}
						pageTitle={book.title}
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
						<div className='flex items-center justify-center xl:items-start xl:justify-start max-w-lg min-w-[20rem]'>
							<p className='text-xl xl:text-2xl text-center xl:text-left font-medium'>{book.title}</p>
						</div>
						<Link href={`/authors/${book.author.slug}`}>
							<div className='text-md md:text-lg text-center xl:text-left '>
								By <p className='font-medium inline-block'>{book.author.name}</p>
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
					<div className='xl:min-w-[20rem]'>
						<div className='flex xl:flex-col items-end justify-center w-fit xl:px-10 space-x-8 xl:space-y-4 right-2'>
							<div
								onClick={shareBookHandler}
								className='hidden xl:flex absolute top-4 right-36 m-1 cursor-pointer'>
								<ShareIcon dimensions='h-7 w-7' color='' />
							</div>
							<button
								className={book.format?.ebook?.link ? 'btn-active' : 'btn-inactive'}
								onClick={readBookHandler}>
								<BookReadIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='btn-inactive'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<div className='hidden xl:flex w-full'>
								{isFavourite ? (
									<button className={'btn-inactive'} onClick={favouriteBookHandler}>
										{loadingFavourite ? (
											<ButtonSpinner dimensions='h-7 w-7' />
										) : (
											<>
												<LibraryIcon dimensions='h-7 w-7' />
												<span className='font-semibold'>Saved in Library</span>
											</>
										)}
									</button>
								) : (
									<button className={'btn-active'} onClick={favouriteBookHandler}>
										{loadingFavourite ? (
											<ButtonSpinner dimensions='h-7 w-7' />
										) : (
											<>
												<LibraryIcon dimensions='h-7 w-7' />
												<span className='font-semibold'>Add To Library</span>
											</>
										)}
									</button>
								)}
							</div>
						</div>
					</div>
				</BgCover>

				<GenreListModal genres={book.genres} />

				<div className='flex justify-start xs:justify-center items-center overflow-x-scroll p-3 hide-scrollbar'>
					<div className='flex items-center justify-center rounded-md divide-x divide-gray-600 space-x-2 p-1 md:p-2 xl:p-3 bg-[#030b17]'>
						{book.language && (
							<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
								<p className='px-2 text-md md:text-base font-medium'>{book.language}</p>
								<p className='text-sm font-light xl:text-md text-gray-300 py-1'>language</p>
							</div>
						)}
						{book.format?.ebook.pagesCount !== 0 && book.format?.ebook.pagesCount && (
							<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
								<p className='px-4 text-sm md:text-base font-medium'>{book.format.ebook.pagesCount}</p>
								<p className='text-sm font-light xl:text-md text-gray-300 py-1'>pages</p>
							</div>
						)}
						{book.publicationDate !== null && (
							<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 w-full'>
								<p className='px-4 text-sm md:text-base font-medium'>
									{book.publicationDate.split('-')[0]}
								</p>
								<p className='text-sm font-light xl:text-md text-gray-300 py-1'>published</p>
							</div>
						)}
						{book.publisher !== null && (
							<div className='flex flex-col justify-center items-center p-1 px-2 md:p-2 xl:p-3 h-full'>
								<p className='px-2 text-sm text-center font-medium leading-5 min-w-max min-h-full'>
									{book.publisher}
								</p>
								<p className='text-sm font-light xl:text-md text-gray-300 py-1'>publisher</p>
							</div>
						)}
					</div>
				</div>

				{book.description ? (
					<div className='p-4 md:p-8'>
						<h4 className='text-xl md:text-2xl font-semibold py-2'>Book description</h4>
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

				<div className='flex justify-start m-4 xl:m-8'>
					<button
						className='flex items-center rounded-lg w-fit p-3 gap-2 bg-[#151d3a]'
						onClick={() => router.push(`/books/${book.slug}/report/`)}>
						<ReportIcon dimensions='h-7 w-7' />
						<p className='text-base'>Report book</p>
					</button>
				</div>

				<div className='p-4 md:p-8'>
					<h4 className='text-xl md:text-2xl font-semibold my-4'>Reviews</h4>
					<div className='flex justify-between items-center w-full md:w-2/3 xl:w-2/5 gap-16 p-3 my-4 xl:my-8 rounded-md bg-[#192132]'>
						<button className='text-md font-semibold'>Write a review</button>
						<div className='inline-block px-[2px] py-[1px]'>
							<ChevronRightIcon dimensions='h-4 w-4' />
						</div>
					</div>
					{book.reviews?.length ? (
						<div className='w-full md:w-2/3 xl:w-1/2 p-3 my-4 xl:my-8'>
							{book.reviews.map((review) => (
								<ReviewCard review={review} />
							))}
						</div>
					) : (
						<div className='w-full md:w-2/3 xl:w-2/5 p-3 my-4 xl:my-8 rounded-md bg-[#192132]'>
							No reviews yet
						</div>
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
		revalidate: 100,
	}
}

export async function getStaticPaths() {
	const { data } = await getBestsellers()

	const bookParams = data?.map((book) => ({
		params: { bookId: book.slug.toString() },
	}))

	return {
		paths: bookParams,
		fallback: true,
	}
}

export default BookDetailPage
