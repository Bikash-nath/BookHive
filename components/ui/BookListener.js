import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

import { addReadHistory } from '../../API/userLibrary'
import BookContext from '../../store/bookContext'
import classes from './bookListener.module.css'
import BookReadIcon from '../../assets/icons/BookReadIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'
import EllipsisIcon from '../../assets/icons/EllipsisIcon'
import PlayTrackIcon from '../../assets/icons/PlayTrackIcon'
import PauseTrackIcon from '../../assets/icons/PauseTrackIcon'
import NextTrackIcon from '../../assets/icons/NextTrackIcon'
import PrevTrackIcon from '../../assets/icons/PrevTrackIcon'
import SkipForwardIcon from '../../assets/icons/SkipForwardIcon'
import SkipBackwardIcon from '../../assets/icons/SkipBackwardIcon'
import VolumeMuteIcon from '../../assets/icons/VolumeMuteIcon'
import VolumeFullIcon from '../../assets/icons/VolumeFullIcon'

function BookListener({ bgColor }) {
	const router = useRouter()
	const bookCtx = useContext(BookContext)
	const book = bookCtx.book
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')

	const [audioBookSrc, setAudioBookSrc] = useState('')
	const [trackIndex, setTrackIndex] = useState(0)
	const [trackProgress, setTrackProgress] = useState(0)
	const [trackVol, setTrackVol] = useState(50)

	const audioSrc = book.format?.audiobook?.chapters.length
		? 'http://127.0.0.1:5000/audio-books/' + book.format?.audiobook?.chapters[0].link
		: '/audiobook.mp3'
	const audioRef = useRef(new Audio(audioSrc))
	const intervalRef = useRef()
	const isReady = useRef(false)
	const { duration } = audioRef.current

	// const volumeSlider = useRef()

	useEffect(() => {
		if (book.title) {
			setTitle(book.title)
			setAuthor(book.author?.name)
			// if (book.format?.audiobook?.chapters.length) {
			// 	console.log('audiobook?.chapters', book.format?.audiobook?.chapters[0].link)
			// 	setAudioBookSrc('http://127.0.0.1:5000/audio-books/' + book.format?.audiobook?.chapters[0].link)
			// } else {
			// 	// doesn't update useRef initial value
			// 	console.log('audiobook?', '/audiobook.mp3')
			// 	setAudioBookSrc('/audiobook.mp3')
			// }
		}
		// Pause and clean up on unmount
		return () => {
			if (audioRef.current.src) audioRef.current.pause()
			clearInterval(intervalRef.current)
		}
	}, [book, router.asPath])

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextTrack()
			} else {
				setTrackProgress(Math.floor(audioRef.current.currentTime))
			}
		}, [500])
	}

	useEffect(() => {
		if (bookCtx.isPlaying && audioRef.current.src) {
			audioRef.current.play()
			startTimer()
		} else if (audioRef.current.src) {
			clearInterval(intervalRef.current)
			audioRef.current.pause()
		}
	}, [audioRef.current, bookCtx.isPlaying])

	// Handle setup when changing tracks
	useEffect(() => {
		if (isReady.current && bookCtx.isPlaying) {
			audioRef.current.play()
			bookCtx.setPlaying(true)
			startTimer()
		} else if (audioBookSrc) {
			// Set the isReady ref as true for the next pass
			// audioRef.current = new Audio(audioBookSrc)	//two audio instance
			setTrackProgress(Math.floor(audioRef.current.currentTime))
			isReady.current = true
		}
	}, [audioBookSrc, isReady])

	const onScrub = (e) => {
		// Clear any timers already running
		clearInterval(intervalRef.current)
		audioRef.current.currentTime = e.target.value
		setTrackProgress(Math.floor(audioRef.current.currentTime))
	}

	const onScrubEnd = () => {
		// If not already playing, start
		if (!bookCtx.isPlaying) {
			bookCtx.setPlaying(true)
		}
		startTimer()
	}

	function toPrevTrack() {
		// if (trackIndex - 1 < 0) {
		// 	setTrackIndex(tracks.length - 1);
		// } else {
		setTrackIndex(trackIndex - 1)
		// loadTrack(trackIndex)
		// playTrack()
	}

	function toNextTrack() {
		// if (trackIndex < tracks.length - 1) {
		// 	setTrackIndex(trackIndex + 1);
		// } else {
		setTrackIndex(0)
	}

	function skipBackward() {
		audioRef.current.currentTime = audioRef.current.currentTime - 10
		setTrackProgress(Math.floor(audioRef.current.currentTime))
		// setCurrTrack(track)
	}

	function skipForward() {
		audioRef.current.currentTime = audioRef.current.currentTime + 10
		setTrackProgress(Math.floor(audioRef.current.currentTime))
	}

	const calcDuration = (currentTime) => {
		if (!currentTime) currentTime = 0
		// Add a zero to the single digit time values
		let durationSec = Math.floor(currentTime % 60)
		if (durationSec < 10) durationSec = '0' + durationSec
		let durationMin = Math.floor(currentTime / 60)
		if (durationMin < 10) durationMin = '0' + durationMin
		return durationMin + ':' + durationSec
	}

	// function seekTo() {
	// 	// Calculate the seek position
	// 	const seekTime = currTrack.duration * (seek_slider.value / 100)
	// 	// Set the current track position to the calculated seek position
	// 	audioRef.current.duration = seekTime
	// }

	// function setVolume() {
	// 	// Set the volume equal to the volume slider percentage
	// 	currTrack.volume = volume_slider.value / 100
	// }

	const [loadHistory, setLoadHistory] = useState(false)
	useEffect(() => {
		setLoadHistory(() => true)
		if (loadHistory) {
			setTimeout(async () => {
				await addReadHistory(bookCtx.book.slug)
			}, 1000)
		}
	}, [loadHistory])

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

	const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%'
	const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`

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
							className='object-cover rounded-md w-1/2 h-[36vh] xl:h-[35vh] shadow-lg shadow-[#0C111B]'
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center w-full h-full gap-2 px-6 pt-20 pb-10 xl:pb-12 bg-[#131828] text-white'>
					<div className='text-xl font-semibold text-center'>{title}</div>
					<div className='text-base font-medium text-gray-200 text-center'>By {author}</div>

					<div className='flex flex-col items-center w-full gap-2 mt-10 mb-4'>
						<input
							type='range'
							value={trackProgress}
							step='1'
							min='0'
							max={duration ? duration : `${duration}`}
							onChange={onScrub}
							onMouseUp={onScrubEnd}
							onKeyUp={onScrubEnd}
							className={classes.seekSlider + ' w-full'}
							style={{ background: trackStyling }}
						/>
						<div className='flex justify-between w-full text-gray-100'>
							<div className='p-1'>{calcDuration(trackProgress)}</div>
							<div className='p-1'>{calcDuration(duration)}</div>
						</div>
					</div>

					<div className='flex items-center justify-between w-full gap-4 text-white'>
						<div className='player-btn' onClick={toPrevTrack}>
							<PrevTrackIcon dimensions='h-7 w-7' />
						</div>
						<div className='player-btn' onClick={skipBackward}>
							<SkipBackwardIcon dimensions='h-8 w-8' />
						</div>
						{bookCtx.isPlaying ? (
							<div className='player-btn' onClick={() => bookCtx.setPlaying(false)}>
								<PauseTrackIcon dimensions='h-16 w-16' />
							</div>
						) : (
							<div className='player-btn' onClick={() => bookCtx.setPlaying(true)}>
								<PlayTrackIcon dimensions='h-16 w-16' />
							</div>
						)}
						<div className='player-btn' onClick={skipForward}>
							<SkipForwardIcon dimensions='h-8 w-8' />
						</div>
						<div className='player-btn' onClick={toNextTrack}>
							<NextTrackIcon dimensions='h-7 w-7' />
						</div>
					</div>

					<div className='flex justify-center items-center w-3/4 gap-2 mt-12 xl:mt-4'>
						<VolumeMuteIcon dimensions='h-6 w-6' />
						<input
							type='range'
							value={trackVol}
							step='1'
							min='0'
							max='100'
							className={classes.volumeSlider}
							onChange={() => {}}
						/>

						<VolumeFullIcon dimensions='h-6 w-6' />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default BookListener
