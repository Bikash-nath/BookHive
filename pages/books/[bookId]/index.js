import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getBookDetails, getBestsellers, getLatestBooks, createBookReview, updateBookReview } from '../../../API/books'
import { favouriteBook, getLibraryBooks } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import BookContext from '../../../store/bookContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import BgCover from '../../../components/modals/BgCover'
import { pickBgColor } from '../../../utils/helpers/pickBgColor'
import TopNavModal from '../../../components/modals/TopNavModal'
import GenreListModal from '../../../components/modals/GenreListModal'
import ReviewCard from '../../../components/cards/ReviewCard'
import ReviewEditModal from '../../../components/modals/ReviewEditModal'
import DialogBox from '../../../components/notification/DialogBox'
import ShareButton from '../../../components/buttons/ShareButton'
import HeadphoneIcon from '../../../assets/icons/HeadphoneIcon'
import BookReadIcon from '../../../assets/icons/BookReadIcon'
import LibraryIcon from '../../../assets/icons/LibraryIcon'
import BookmarkIcon from '../../../assets/icons/BookmarkIcon'
import ChevronRightIcon from '../../../assets/icons/ChevronRightIcon'
import ChevronUpIcon from '../../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon'
import StarIcon from '../../../assets/icons/StarIcon'
import ReportIcon from '../../../assets/icons/ReportIcon'

// import openInNewTab from '../../utils/helpers/openLink'
// import BookPdfReader from '../../../components/book/BookPdfReader'

function BookDetailPage(props) {
	const { book } = props
	const { user } = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const bookCtx = useContext(BookContext)
	const windowWidth = useWindowWidth()

	const [readMoreDesc, setReadMoreDesc] = useState(false)
	const [descLines, setDescLines] = useState(0)
	const [isFavourite, setFavourite] = useState(false)
	const [loadingFavourite, setLoadingFavourite] = useState(false)
	const [addReview, setAddReview] = useState(false)
	const [editReview, setEditReview] = useState(null)
	const [reviewDialog, setReviewDialog] = useState(false)
	const [reviewSubmitted, setReviewSubmitted] = useState(false)
	const [activeUser, setActiveUser] = useState(null)

	const descRef = useRef(null)
	const coverRef = useRef(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
	}, [activeUser])

	useEffect(() => {
		if (typeof window !== 'undefined' && descRef) {
			readMoreDescHandler()
			window.addEventListener('orientationchange', readMoreDescHandler, false) // descLines incorrect value
		}
	}, [descRef?.current])

	useEffect(() => {
		if (addReview || editReview) bookCtx.setActiveBook(false)
		else bookCtx.setActiveBook(true)
	}, [addReview, editReview])

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
				if (!library.books) snackbarCtx.addMessage({ title: library, status: 'invalid' })
				else {
					if (library.books.find((b) => b.slug === book?.slug)) setFavourite(true)
					else setFavourite(false)
				}
				setLoadingFavourite(false)
			})()
		}
	}, [])

	const favouriteBookHandler = async () => {
		if (!user?.data) {
			snackbarCtx.addMessage({ title: 'Please login to save favourite books', status: 'invalid' })
			return
		}
		if (loadingFavourite) return
		setFavourite(!isFavourite)
		setLoadingFavourite(true)

		const library = await favouriteBook(book.slug)
		if (!library.book) {
			snackbarCtx.addMessage({ title: library, status: 'fail' })
			setFavourite((isFavourite) => !isFavourite)
			setLoadingFavourite(false)
			return
		}
		if (library.book === 'saved') snackbarCtx.addMessage({ title: 'Book saved in your library', status: 'success' })
		else snackbarCtx.addMessage({ title: 'Book removed from your library', status: 'success' })

		setLoadingFavourite(false)
	}

	const isReviewAllowed = () => {
		if (reviewSubmitted || !activeUser) return false
		else if (!book.reviews?.length) return true
		return !book.reviews.some((review) => review.user._id === user?.data?._id)
	}

	const editReviewHandler = (review) => {
		if (!user?.data) {
			snackbarCtx.addMessage({ title: 'Please login to give book review', status: 'invalid' })
		} else {
			setEditReview(review)
		}
	}

	const reviewSubmitHandler = async (rating, title, description, reviewId) => {
		let review
		if (reviewId) {
			review = await updateBookReview({ book: book._id, reviewId, rating, title, description })
		} else {
			review = await createBookReview({ book: book._id, rating, title, description })
		}
		if (review.data) {
			setReviewDialog(true)
			setReviewSubmitted(true)
			setEditReview(null)
			setAddReview(false)
		} else {
			snackbarCtx.addMessage({ title: review, status: 'fail' })
		}
	}

	const readBookHandler = () => {
		// 'https://bookhive-ebooks.s3.amazonaws.com/Never+Split+the+Difference_+Negotiating+as+if+Your+Life+Depended+on+It+by+Chris+Voss.epub'
		// 'https://drive.google.com/uc?id=1hm2Zd_UqBFKr9PZ5pxk8OwGgvJznCFXd&export=download'
		if (book.format?.ebook?.link) {
			bookCtx.addBook(book)
			router.push({
				pathname: `/books/${book.slug}/read`,
			})
		} else {
			snackbarCtx.addMessage({ title: 'Sorry, Book not avialabe!', status: 'fail' })
		}
	}

	const audioBookHandler = () => {
		if (!book.format?.audiobook?.fileType) {
			snackbarCtx.addMessage({ title: 'Sorry, Audiobook not avialabe!', status: 'fail' })
		}
	}

	return book ? (
		<Fragment>
			<Head>
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>

			<div className='cover-page-bg pb-16 xl:pb-8'>
				{windowWidth < 1280 && (
					<TopNavModal
						rightIcon={<ShareButton title={book.title} />}
						lastIcon={
							<div onClick={favouriteBookHandler}>
								{isFavourite ? (
									<BookmarkIcon dimensions='h-7 w-7' color='white' />
								) : (
									<BookmarkIcon dimensions='h-7 w-7' color='' />
								)}
							</div>
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
						<div className='text-md md:text-lg text-center xl:text-left '>
							<Link href={`/authors/${book.author.slug}`}>
								By <p className='font-medium inline-block'>{book.author.name}</p>
								<div className='inline-block px-[2px] py-[1px]'>
									<ChevronRightIcon dimensions='h-4 w-4' />
								</div>
							</Link>
						</div>
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

					<div className='xl:min-w-[20rem]'>
						<div className='flex xl:flex-col items-end justify-center w-fit xl:px-10 space-x-8 xl:space-y-4 right-2'>
							<div className='hidden xl:flex absolute top-4 right-36 m-1 cursor-pointer'>
								<ShareButton title={book.title} />
							</div>
							<button
								className={book.format?.ebook?.link ? 'btn-active' : 'btn-inactive'}
								onClick={readBookHandler}>
								<BookReadIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='btn-inactive' onClick={audioBookHandler}>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<div className='hidden xl:flex w-full'>
								{isFavourite ? (
									<button className={'btn-inactive'} onClick={favouriteBookHandler}>
										<LibraryIcon dimensions='h-7 w-7' />
										<span className='font-semibold'>Saved in Library</span>
									</button>
								) : (
									<button className={'btn-active'} onClick={favouriteBookHandler}>
										<LibraryIcon dimensions='h-7 w-7' />
										<span className='font-semibold'>Add To Library</span>
									</button>
								)}
							</div>
						</div>
					</div>
				</BgCover>

				{!addReview && !editReview ? (
					<>
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
										<p className='px-4 text-sm md:text-base font-medium'>
											{book.format.ebook.pagesCount}
										</p>
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
										(!readMoreDesc ? 'line-clamp-3' : '')
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

						{activeUser && (
							<div className='flex justify-start m-4 xl:m-8'>
								<button
									className='flex items-center rounded-lg w-fit p-3 gap-2 bg-[#152338]'
									onClick={() => {
										bookCtx.addBook(book)
										router.push(`/books/${book.slug}/report/`)
									}}>
									<ReportIcon dimensions='h-7 w-7' />
									<p className='text-base'>Report book</p>
								</button>
							</div>
						)}

						<div className='w-full md:w-2/3 xl:w-1/2 p-4 md:p-8'>
							<h4 className='text-xl md:text-2xl font-semibold my-4'>Reviews</h4>
							<div className='flex flex-col gap-4 xl:gap-6'>
								{book.reviews?.length ? (
									book.reviews.map((review, i) => (
										<ReviewCard
											key={i}
											review={review}
											user={user?.data}
											editReviewHandler={editReviewHandler}
										/>
									))
								) : (
									<div className='rounded-md bg-[#152338] p-4'>No reviews yet</div>
								)}
								{isReviewAllowed() && ( //this is causing Hydration error (value returned in server!=client)
									<button
										className='flex justify-between items-center gap-16 p-4 rounded-md bg-[#152338]'
										onClick={() => {
											setAddReview(true)
										}}>
										<p className='text-md font-semibold'>
											{book.reviews.length
												? 'Write a review'
												: 'Be the first one to write review'}
										</p>
										<p className='inline-block px-[2px] py-[1px]'>
											<ChevronRightIcon dimensions='h-4 w-4' />
										</p>
									</button>
								)}
							</div>
						</div>
					</>
				) : (
					<ReviewEditModal
						review={editReview}
						reviewSubmitHandler={reviewSubmitHandler}
						addReviewHandler={setAddReview}
						editReviewHandler={setEditReview}
					/>
				)}
				{reviewDialog && (
					<DialogBox
						title='Thanks for reviewing!'
						description='If approved, your review should be posted soon (typically within few minutes)'
						message='OK'
						setDialogHandler={setReviewDialog}
					/>
				)}
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
