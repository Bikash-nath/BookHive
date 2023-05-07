import { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { pickBgColor } from '../../utils/helpers/pickBgColor'
import BookContext from '../../store/bookContext'
import useWindowWidth from '../../hooks/useWindowWidth'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'

function BookProgressBar() {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const bgColor = book.slug && pickBgColor(book.slug)

	const bookbarRef = useRef(null)
	const windowWidth = useWindowWidth()
	const router = useRouter()
	const [showRoute, setShowRoute] = useState(false)

	const showRouteHandler = () => {
		const paths = ['/read', 'user/login', 'user/signup', 'user/account/', 'user/uploads/']
		setShowRoute(!paths.find((path) => router.asPath.includes(path)))
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', showRouteHandler)
		return () => {
			router.events.off('routeChangeComplete', showRouteHandler)
		}
	}, [router.asPath, bookCtx.activeBook])

	const readBookHandler = () => {
		router.push({
			pathname: `/books/${book.slug}/read`,
		})
	}

	return showRoute && bookCtx.activeBook && book.title ? (
		<div
			className={
				'fixed overflow-hidden rounded-md z-20 w-full xl:m-1 md:max-w-md bg-black select-none ' +
				(windowWidth < 1280 ? 'right-0 bottom-14' : 'right-0 bottom-0')
			}
			ref={bookbarRef}
			onClick={readBookHandler}>
			<div
				className={`flex items-center justify-between w-full rounded-md opacity-95 hover:bg-opacity-90 ring-1 ring-slate-800 cursor-pointer bg-${bgColor}-800`}
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
							Continue reading
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
		</div>
	) : (
		<></>
	)
}

export default BookProgressBar
