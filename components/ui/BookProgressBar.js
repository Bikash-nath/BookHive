import { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { pickBgColor } from '../../utils/helpers/pickBgColor'
import BookContext from '../../store/bookContext'
import BookListener from './BookListener'
import useWindowWidth from '../../hooks/useWindowWidth'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import PlayTrackIcon from '../../assets/icons/PlayTrackIcon'
import PauseTrackIcon from '../../assets/icons/PauseTrackIcon'

function BookProgressBar() {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const bgColor = book.slug && pickBgColor(book.slug)
	const [showRoute, setShowRoute] = useState(false)

	const router = useRouter()
	const windowWidth = useWindowWidth()

	const showRouteHandler = () => {
		const paths = ['/read-book', 'user/login', 'user/signup', '/account/update', '/edit', 'user/uploads/']
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
			bookCtx.setShowPlayer(true)
			if (bookCtx.bookformat?.audiobook?.chapters.link) {
				bookCtx.setPlaying(true)
			}
		}
		showRouteHandler()
	}, [bookCtx.activeBook])

	const readBookHandler = (e) => {
		// console.log('dataset', e.target.dataset)
		if (bookCtx.activeBook === 'listen') {
			bookCtx.setShowPlayer(true)
			// bookCtx.setPlaying(true)
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
				(windowWidth < 1280 && !bookCtx.showPlayer ? 'right-0 bottom-14' : 'right-0 bottom-0')
			}>
			{bookCtx.showPlayer && bookCtx.activeBook === 'listen' && router.asPath.includes('#listen') ? (
				<BookListener bgColor={bgColor} />
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
							<p className='font-normal text-xs mt-0.5 xl:mt-1 tracking-wide truncate text-slate-100'>
								Continue {bookCtx.activeBook === 'read' ? 'reading' : 'listening'}
							</p>
							<p className='font-medium text-base leading-relaxed tracking-wide truncate text-white pt-[.20rem] xl:pt-1.5'>
								{book.title}
							</p>
						</div>
						<div
							data-user='playBtn'
							className='flex w-fit items-start text-gray-200 mx-1 box-border rounded-full cursor-pointer'>
							{bookCtx.activeBook === 'read' ? (
								<ChevronUpIcon dimensions={'w-6 h-6'} />
							) : bookCtx.isPlaying ? (
								<div
									className='m-2 opacity-80 hover:opacity-100 transition-opacity duration-1000 cursor-pointer'
									onClick={() => bookCtx.setPlaying(false)}>
									<PauseTrackIcon dimensions='h-8 w-8' />
								</div>
							) : (
								<div
									className='m-2 opacity-80 hover:opacity-100 transition-opacity duration-1000 cursor-pointer'
									onClick={() => bookCtx.setPlaying(true)}>
									<PlayTrackIcon dimensions='h-8 w-8' />
								</div>
							)}
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
