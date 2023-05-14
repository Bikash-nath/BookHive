import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import { addReadHistory } from '../../API/userLibrary'
import BookContext from '../../store/bookContext'
import classes from './bookListener.module.css'
import PlayTrackIcon from '../../assets/icons/PlayTrackIcon'
import PauseTrackIcon from '../../assets/icons/PauseTrackIcon'
import NextTrackIcon from '../../assets/icons/NextTrackIcon'
import PrevTrackIcon from '../../assets/icons/PrevTrackIcon'
import SkipForwardIcon from '../../assets/icons/SkipForwardIcon'
import SkipBackwardIcon from '../../assets/icons/SkipBackwardIcon'
import VolumeMuteIcon from '../../assets/icons/VolumeMuteIcon'
import VolumeFullIcon from '../../assets/icons/VolumeFullIcon'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import EllipsisIcon from '../../assets/icons/EllipsisIcon'

function BookListener({ bgColor }) {
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [currTrack, setCurrTrack] = useState({})
	const [audioBookLink, setAudioBookLink] = useState('')
	const [trackIndex, setTrackIndex] = useState(0)
	const [loadHistory, setLoadHistory] = useState(false)

	const router = useRouter()
	const playBtn = useRef()
	const pauseBtn = useRef()
	const prevBtn = useRef()
	const nextBtn = useRef()

	const seekSlider = useRef()
	const volumeSlider = useRef()
	const currTime = useRef()
	const totalDuration = useRef()

	useEffect(() => {
		if (book.title) {
			setTitle(book.title)
			setAuthor(book.author?.name)
		}
	}, [book, router.asPath])

	useEffect(() => {
		setLoadHistory(() => true)
		if (loadHistory) {
			setTimeout(async () => {
				await addReadHistory(bookCtx.book.slug)
			}, 1000)
		}
		// setAudioBookLink(process.env.AUDIOBOOK_URL + book.format?.audiobook?.chapters.link)
		setAudioBookLink('/audiobook.mp3')
		if (!currTrack.src) {
			setCurrTrack(document.createElement('audio'))
			currTrack.src = audioBookLink
		} else loadTrack()
	}, [loadHistory])

	let updateTimer

	function resetValues() {
		currTime.current.textContent = '00:00'
		totalDuration.current.textContent = '00:00'
		seekSlider.current.value = 0
	}

	function seekUpdate() {
		let seekPosition = 0

		// Check if the current track duration is a legible number
		if (!isNaN(currTrack.duration)) {
			seekPosition = currTrack.currentTime * (100 / currTrack.duration)
			seekSlider.value = seekPosition

			// Calculate the time left and the total duration
			let currentMinutes = Math.floor(currTrack.currentTime / 60)
			let currentSeconds = Math.floor(currTrack.currentTime - currentMinutes * 60)
			let durationMinutes = Math.floor(currTrack.duration / 60)
			let durationSeconds = Math.floor(currTrack.duration - durationMinutes * 60)

			// Add a zero to the single digit time values
			if (currentSeconds < 10) currentSeconds = '0' + currentSeconds
			if (durationSeconds < 10) durationSeconds = '0' + durationSeconds
			if (currentMinutes < 10) currentMinutes = '0' + currentMinutes
			if (durationMinutes < 10) durationMinutes = '0' + durationMinutes

			// Display the updated duration
			currTime.textContent = currentMinutes + ':' + currentSeconds
			totalDuration.textContent = durationMinutes + ':' + durationSeconds
		}
	}

	function loadTrack(track_index) {
		// Clear the previous seek timer
		clearInterval(updateTimer)
		resetValues()

		// Load a new track
		currTrack.src = audioBookLink
		currTrack.load()
		console.log('currTrack:-', currTrack)

		// Set an interval of 500 ms for updating the seek slider
		if (updateTimer) clearInterval(updateTimer)
		updateTimer = setInterval(seekUpdate, 500)

		// Move to the next track if the current finishes playing
		currTrack.addEventListener('ended', nextTrack)
	}

	function playTrack() {
		currTrack.play()
		bookCtx.setPlaying(true)
	}

	function pauseTrack() {
		currTrack.pause()
		bookCtx.setPlaying(false)
	}

	function nextTrack() {
		// loadTrack(trackIndex)
		// playTrack()
	}

	function prevTrack() {
		// loadTrack(trackIndex)
		// playTrack()
	}

	function skipBackward() {
		currTrack.currentTime = currTrack.currentTime - 10
	}

	function skipForward() {
		currTrack.currentTime = currTrack.currentTime + 10
	}

	const readBookHandler = () => {
		bookCtx.setShowPlayer(false)
		bookCtx.setActiveBook('read')
		router.push({
			pathname: `/books/${book.slug}/read-book`,
		})
	}

	const bookCloseHandler = () => {
		bookCtx.setShowPlayer(false)
		router.back()
	}

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div
				className='flex flex-col items-center justify-center w-full h-screen xl:h-fit xl:rounded-md text-white select-none'
				vshow='show'>
				<div
					className={`flex items-start justify-between w-full relative h-[50vh] xl:h-72 p-4 opacity-90 bg-${bgColor}-800`}>
					<div className='group p-1 xl:scale-110 rounded-full cursor-pointer' onClick={bookCloseHandler}>
						<ChevronDownIcon dimensions='h-7 w-7' stroke='white' />
					</div>
					<div className='flex gap-4 sm:gap-6'>
						{book.format?.ebook?.link && (
							<div className='cursor-pointer' onClick={readBookHandler}>
								<BookReadIcon dimensions='h-8 w-8' color='white' />
							</div>
						)}
						<div className='cursor-pointer'>
							<EllipsisIcon dimensions='h-7 w-7' />
						</div>
					</div>
					<div className='absolute top-16 flex items-center justify-center w-full z-20'>
						<Image
							src={process.env.BOOKS_URL + book.image.path}
							height={300}
							width={300}
							alt={book.title}
							className='object-cover rounded-md w-1/2 h-[36vh] xl:h-[35vh]'
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center w-full h-full gap-2 px-6 pt-20 pb-10 xl:pb-12 bg-[#131828] text-white'>
					<div className='text-xl font-semibold text-center'>{title}</div>
					<div className='text-base font-medium text-gray-200 text-center'>By {author}</div>

					<div className='flex flex-col items-center w-full gap-2 mt-10 mb-4'>
						<input
							type='range'
							min='1'
							max='100'
							value='0'
							ref={seekSlider}
							className={classes.seekSlider + ' w-full'}
						/>
						<div className='flex justify-between w-full text-gray-200'>
							<div ref={currTime} className='p-1'>
								00:00
							</div>
							<div ref={totalDuration} className='p-1'>
								00:00
							</div>
						</div>
					</div>

					<div className='flex items-center justify-between w-full gap-4 text-white'>
						<div className='player-btn' ref={prevBtn} onClick={prevTrack}>
							<PrevTrackIcon dimensions='h-7 w-7' />
						</div>
						<div className='player-btn' ref={prevBtn} onClick={skipBackward}>
							<SkipBackwardIcon dimensions='h-8 w-8' />
						</div>
						{bookCtx.isPlaying ? (
							<div className='player-btn' ref={pauseBtn} onClick={pauseTrack}>
								<PauseTrackIcon dimensions='h-16 w-16' />
							</div>
						) : (
							<div className='player-btn' ref={playBtn} onClick={playTrack}>
								<PlayTrackIcon dimensions='h-16 w-16' />
							</div>
						)}
						<div className='player-btn' ref={nextBtn} onClick={skipForward}>
							<SkipForwardIcon dimensions='h-8 w-8' />
						</div>
						<div className='player-btn' ref={nextBtn} onClick={nextTrack}>
							<NextTrackIcon dimensions='h-7 w-7' />
						</div>
					</div>

					<div className='flex justify-center items-center w-3/4 gap-2 mt-12 xl:mt-4'>
						<VolumeMuteIcon dimensions='h-5 w-5' />
						<input
							type='range'
							min='1'
							max='100'
							value='99'
							ref={volumeSlider}
							className={classes.volumeSlider}
						/>
						<VolumeFullIcon dimensions='h-5 w-5' />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default BookListener
