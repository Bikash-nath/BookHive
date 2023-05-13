import { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { pickBgColor } from '../../utils/helpers/pickBgColor'
import BookContext from '../../store/bookContext'
import BookListener from './BookListener'
import useWindowWidth from '../../hooks/useWindowWidth'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'

function BookProgressBar() {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const bgColor = book.slug && pickBgColor(book.slug)
	const [showRoute, setShowRoute] = useState(false)

	const router = useRouter()
	const windowWidth = useWindowWidth()

	const showRouteHandler = () => {
		const paths = ['/read', 'user/login', 'user/signup', '/account/update', '/edit', 'user/uploads/']
		setShowRoute(!paths.find((path) => router.asPath.includes(path)))
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', showRouteHandler)
		return () => {
			router.events.off('routeChangeComplete', showRouteHandler)
		}
	}, [router.asPath])

	useEffect(() => {
		if (bookCtx.activeBook === 'listen') {
			console.log('2.BPBar', bookCtx.activeBook, '  activeListen:', bookCtx.activeListen)
			bookCtx.setActiveListen(true)
		}
		showRouteHandler()
		// console.log('1.BookProgressBar', bookCtx.activeBook, '  activeListen:', bookCtx.activeListen)
		// console.log('cond:', showRoute, bookCtx.activeBook, book.title)
	}, [bookCtx.activeBook])

	const readBookHandler = () => {
		if (bookCtx.activeBook === 'listen') {
			bookCtx.setActiveListen(true)
			router.push('#listen')
		} else
			router.push({
				pathname: `/books/${book.slug}/read-book`,
			})
	}

	return showRoute && bookCtx.activeBook && book.title ? (
		<div
			className={
				'fixed overflow-hidden rounded-md z-20 xl:m-1 w-full md:max-w-sm bg-black select-none ' +
				(windowWidth < 1280 && !bookCtx.activeListen ? 'right-0 bottom-14' : 'right-0 bottom-0')
			}>
			{/* {console.log('BPB', bookCtx.activeBook, '  activeListen:', bookCtx.activeListen)} */}
			{bookCtx.activeListen && bookCtx.activeBook === 'listen' && router.asPath.includes('#listen') ? (
				<BookListener
					book={book}
					activeListenHandler={bookCtx.setActiveListen}
					activeBookHandler={bookCtx.setActiveBook}
					bgColor={bgColor}
				/>
			) : (
				<div
					className={`flex items-center justify-between w-full rounded-md opacity-95 hover:bg-opacity-90 ring-1 ring-slate-800 cursor-pointer bg-${bgColor}-800`}
					onClick={readBookHandler}
					vshow='show'>
					<div className='flex w-full font-medium gap-2 p-1 xl:p-1.5 cursor-pointer text-white'>
						<div className='w-12 h-12 xl:w-14 xl:h-14'>
							<Image
								src={process.env.BOOKS_URL + book.image.path}
								alt={book.title}
								height={100}
								width={100}
								className='object-cover rounded-md w-full h-full'
							/>
						</div>
						<div className='flex flex-col justify-center w-full h-full px-1 overflow-hidden'>
							<p className='font-normal text-xs mt-0.5 xl:mt-1 tracking-wide truncate text-slate-200'>
								Continue {bookCtx.activeListen === 'read' ? 'reading' : 'listening'}
							</p>
							<p className='font-medium text-base leading-relaxed tracking-wide truncate text-white pt-[.20rem] xl:pt-1.5'>
								{book.title}
							</p>
						</div>
						<div className='flex w-fit items-start text-gray-200 p-1 mx-1 box-border rounded-full cursor-pointer'>
							<ChevronUpIcon dimensions={'w-5 h-5'} st />
						</div>
					</div>
				</div>
			)}
		</div>
	) : (
		<></>
	)
}

export default BookProgressBar
