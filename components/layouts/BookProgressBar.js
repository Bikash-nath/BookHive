import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import useWindowWidth from '../../hooks/useWindowWidth'
import BookContext from '../../store/bookContext'

function BookProgressBar() {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const activeBook = bookCtx.activeBook

	const router = useRouter()
	const windowWidth = useWindowWidth()

	// useEffect(() => {
	// 	if (activeBook) {
	// 	}
	// }, [activeBook])

	const readBookHandler = () => {
		bookCtx.setActiveBook(false)
		router.push({
			pathname: `/books/${book.slug}/read`,
		})
	}
	return activeBook && book.title ? (
		<div
			className={
				'fixed overflow-hidden m-2 xl:m-3 z-20 w-full max-w-lg ' +
				(windowWidth < 1280 ? 'right-0 bottom-14' : 'right-0 bottom-0')
			}>
			<div
				className='inline-flex items-center justify-between w-full rounded-md bg-[#030b17] border-b-[1px] border-b-gray-800 select-none'
				vshow='show'>
				<div className='flex gap-2 p-2 xl:p-2.5'>
					<div
						className={
							'flex font-medium gap-2 px-2 py-1 cursor-pointer select-none hover:bg-[#101621] text-white'
						}
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
						<div className='flex flex-col justify-center w-2/4 h-full px-1 overflow-hidden'>
							<p key='author' className='font-light text-xs tracking-wide truncate text-slate-200'>
								Continue reading
							</p>
							<p className='font-medium text-base leading-relaxed tracking-wide truncate text-white pt-[0.1rem]'>
								{book.title}
							</p>
						</div>
					</div>
				</div>
				<div
					className='flex w-full mx-1 p-[0.1rem] box-border rounded-full cursor-pointer'
					onClick={readBookHandler}>
					<ChevronUpIcon dimensions={'w-7 h-7'} />
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default BookProgressBar
