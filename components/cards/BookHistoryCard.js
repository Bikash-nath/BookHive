import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import BookContext from '../../store/bookContext'
import { addReadHistory } from '../../API/userLibrary'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import PlayTrackIcon from '../../assets/icons/PlayTrackIcon'
import PauseTrackIcon from '../../assets/icons/PauseTrackIcon'

// backdrop-blur-sm animate-slideup
function BookHistoryCard({ book }) {
	const bookCtx = useContext(BookContext)
	const [bookState, setBookState] = useState(null)
	const router = useRouter()

	useEffect(() => {
		if (bookCtx.book._id === book._id) {
			bookCtx.activeBook === 'read' ? setBookState('read') : setBookState(bookCtx.isPlaying)
		} else {
			book.format?.ebook.link ? setBookState('read') : setBookState('listen')
		}
	}, [])

	const readBookHandler = () => {
		bookCtx.addBook(book)
		if (bookState === 'read') {
			bookCtx.setShowPlayer(false)
			router.replace({
				pathname: `/books/${book.slug}/read-book`,
			})
			setTimeout(() => {
				bookCtx.setActiveBook('read') //don't show progress-bar before read page is rendered
			}, 1000)
		} else if (!bookCtx.isPlaying) {
			bookCtx.setActiveBook('listen')
			// bookCtx.setPlaying(true)
			bookCtx.setShowPlayer(true)
			router.push('#listen')
		} else {
			bookCtx.setActiveBook('listen')
			if (bookState === 'pause') bookCtx.setPlaying(true)
			else bookCtx.setPlaying(false)
		}
		setTimeout(async () => {
			await addReadHistory(book.slug)
		}, 2000)
	}

	return (
		<div className='flex items-center justify-center w-full h-full xl:my-2 rounded-md select-none'>
			<div className='relative flex flex-col w-28 h-fit xl:w-40 rounded-md p-[0.1rem] xl:p-[0.2rem] bg-[#192132] xl:hover:bg-slate-800 cursor-pointer'>
				<div className='item rounded-lg group/item w-28 h-28 xl:w-40 xl:h-40' onClick={readBookHandler}>
					<div className='box-text z-10 group-hover/edit:opacity-100 xl:scale-110'>
						{bookState === 'read' ? (
							<BookReadIcon dimensions='h-12 w-12' />
						) : bookState === 'play' ? (
							<PauseTrackIcon dimensions='h-12 w-12' />
						) : (
							<PlayTrackIcon dimensions='h-12 w-12' />
						)}
					</div>
					<Image
						src={process.env.BOOKS_URL + book.image.path}
						alt={book.title}
						height={240}
						width={160}
						className='object-cover rounded-md opacity-60 group-hover/item:opacity-40 w-28 h-28 xl:w-40 xl:h-40 p-[.2rem] xl:p-1 z-20'
					/>
				</div>
				<div key='content' className='flex flex-col justify-center h-full p-1'>
					<p className='font-medium xl:font-semibold text-xs xl:text-sm xl:my-auto leading-[.85rem] xl:leading-4 truncate text-white '>
						{book.title}
					</p>
				</div>
			</div>
		</div>
	)
}

export default BookHistoryCard
