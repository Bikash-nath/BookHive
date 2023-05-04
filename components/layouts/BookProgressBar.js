import { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import useWindowWidth from '../../hooks/useWindowWidth'
import BookContext from '../../store/bookContext'

function BookProgressBar() {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const activeBook = bookCtx.activeBook

	const bookbarRef = useRef(null)
	const windowWidth = useWindowWidth()
	const router = useRouter()
	const currentRoute = router.asPath
	const [showRoute, setShowRoute] = useState(false)

	useEffect(() => {
		router.events.on('routeChangeComplete', () => {
			const paths = ['login', 'signup', 'user/account/', 'user/uploads/']
			setShowRoute(!paths.find((path) => currentRoute.includes(path)))
		})

		return () => {
			router.events.off('routeChangeComplete', () => {})
		}
	}, [router.events, activeBook])

	const readBookHandler = () => {
		bookCtx.setActiveBook(false)
		router.push({
			pathname: `/books/${book.slug}/read`,
		})
	}

	return showRoute && activeBook && book.title ? (
		<div
			className={
				'fixed overflow-hidden m-2 xl:m-3 z-20 w-full xl:max-w-lg ' +
				(windowWidth < 1280 ? 'right-0 bottom-14' : 'right-0 bottom-0')
			}
			ref={bookbarRef}
			onClick={readBookHandler}>
			<div
				className='flex items-center justify-between w-full rounded-md bg-[#030b17] hover:bg-[#101621] ring-1 ring-slate-800 cursor-pointer select-none'
				vshow='show'>
				<div
					className='flex w-full font-medium gap-2 p-1 xl:p-1.5 cursor-pointer select-none text-white'
					role='menuitem'
					tabIndex='-1'>
					<div className='w-14 h-14 xl:w-16 xl:h-16'>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							alt={book.title}
							height={100}
							width={100}
							className='object-cover rounded-md w-full h-full'
						/>
					</div>
					<div className='flex flex-col justify-center w-full h-full px-1 overflow-hidden'>
						<p key='author' className='font-light text-xs tracking-wide truncate text-slate-200'>
							Continue reading
						</p>
						<p className='font-medium text-base leading-relaxed tracking-wide truncate text-white pt-[0.1rem]'>
							{book.title}
						</p>
					</div>
				</div>
				<div className='flex w-full mx-1 p-[0.1rem] box-border rounded-full cursor-pointer'>
					<ChevronUpIcon dimensions={'w-6 h-6'} />
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default BookProgressBar
