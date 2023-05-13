import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import { addReadHistory } from '../../API/userLibrary'
import classes from './bookListener.module.css'
import PlayTrackIcon from '../../assets/icons/PlayTrackIcon'
import PauseTrackIcon from '../../assets/icons/PauseTrackIcon'
import ForwardTrackIcon from '../../assets/icons/ForwardTrackIcon'
import BackwardTrackIcon from '../../assets/icons/BackwardTrackIcon'
import VolumeMuteIcon from '../../assets/icons/VolumeMuteIcon'
import VolumeFullIcon from '../../assets/icons/VolumeFullIcon'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import EllipsisIcon from '../../assets/icons/EllipsisIcon'

function BookListener({ book, activeListenHandler, activeBookHandler, bgColor }) {
	const router = useRouter()
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [audioBookLink, setAudioBookLink] = useState('')
	const [size, setSize] = useState(100)

	useEffect(() => {
		if (book.title) {
			setTitle(book.title)
			setAuthor(book.author?.name)
			setAudioBookLink(process.env.EBOOK_URL + book.format?.ebook.link)
			setTimeout(() => {
				addReadHistory(book.slug)
			}, 500)
		}
	}, [book, router.asPath])

	const readBookHandler = () => {
		activeListenHandler(false)
		router.push({
			pathname: `/books/${book.slug}/read-book`,
		})
		setTimeout(() => {
			activeBookHandler('read') //don't show progress-bar before read page is rendered
		}, 1000)
	}

	const bookCloseHandler = () => {
		activeListenHandler(false)
		router.back()
	}

	function playpauseTrack() {}
	function playTrack() {}
	function pauseTrack() {}
	function nextTrack() {}
	function prevTrack() {}
	function seekTo() {}
	function setVolume() {}
	function seekUpdate() {}

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div
				className='flex flex-col items-center justify-center w-full h-screen xl:h-fit xl:rounded-md text-white'
				vshow='show'>
				<div
					className={`flex items-start justify-between w-full relative h-[50vh] xl:h-72 p-4 opacity-80 bg-${bgColor}-800`}>
					<div
						className='group p-1 xl:scale-110 bg-gray-400 bg-opacity-10 rounded-full cursor-pointer'
						onClick={bookCloseHandler}>
						<ChevronDownIcon dimensions='h-5 w-5' stroke='white' />
					</div>
					<div className='flex gap-4 sm:gap-6'>
						{book.format?.ebook?.link && (
							<div className='cursor-pointer' onClick={readBookHandler}>
								<BookReadIcon dimensions='h-7 w-7' color='white' />
							</div>
						)}
						<div className='cursor-pointer'>
							<EllipsisIcon dimensions='h-6 w-6' />
						</div>
					</div>
					<div className='absolute top-16 flex items-center justify-center w-full z-20'>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							height={300}
							width={300}
							alt={book.title}
							className={`object-cover rounded-md w-1/2 h-[35vh] shadow-md shadow-${bgColor}-600`}
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center w-full h-full gap-2 px-4 pt-24 pb-12 bg-[#131828] text-white'>
					<div className='text-xl font-semibold'>{title}</div>
					<div className='text-base font-medium text-gray-300'>By {author}</div>

					<div className='flex flex-col items-center w-full gap-2 mt-10 mb-6'>
						<input
							type='range'
							min='1'
							max='100'
							value='0'
							className={classes.seek_slider}
							onChange={seekTo}
						/>
						<div className='flex justify-between w-full text-sm text-gray-300'>
							<div className='p-1'>00:00</div>
							<div className='p-1'>00:00</div>
						</div>
					</div>

					<div className='flex items-center justify-center gap-4 opacity-80 transition-opacity duration-1000'>
						<div className='m-2 hover:opacity-100 cursor-pointer' onclick={prevTrack}>
							<BackwardTrackIcon dimensions='h-7 w-7' />
						</div>
						<Image
							src='/images/SkipBackward.png'
							height={300}
							width={300}
							alt={book.title}
							className='object-contain rounded-full w-10 h-10 m-2 hover:opacity-100 cursor-pointer'
						/>
						<div className='m-2 hover:opacity-100 cursor-pointer' onclick={playpauseTrack}>
							<PlayTrackIcon dimensions='h-16 w-16' />
						</div>
						<Image
							src='/images/SkipForward.png'
							height={300}
							width={300}
							alt={book.title}
							className='object-contain rounded-full w-10 h-10 m-2 hover:opacity-100 cursor-pointer'
						/>
						<div className='m-2 hover:opacity-100 cursor-pointer' onclick={nextTrack}>
							<ForwardTrackIcon dimensions='h-7 w-7' />
						</div>
					</div>

					<div className='flex justify-center items-center w-3/4 gap-2 mt-2'>
						<VolumeMuteIcon dimensions='h-5 w-5' />
						<input
							type='range'
							min='1'
							max='100'
							value='99'
							className={classes.volume_slider}
							onChange={setVolume}
						/>
						<VolumeFullIcon dimensions='h-5 w-5' />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default BookListener
