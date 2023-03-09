import { useState, useEffect, useRef } from 'react'
// import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'

export default function TopNavModal({ rightIcon, lastIcon, pageTitle, coverRef, pageRef }) {
	// const [windowWidth, setWindowWidth] = useState(null)
	const [opacity, setOpacity] = useState(0)
	const [bgColor, setBgColor] = useState('')

	const titleRef = useRef()

	const handleScroll = () => {
		const coverHeight = coverRef.current.offsetHeight
		console.log('coverRef.current.height\n', coverHeight, window.pageYOffset)
		const scrollPos = Math.min(coverHeight - window.pageYOffset, coverHeight)
		setOpacity(((scrollPos / coverHeight + Number.EPSILON) * 100) / 100)
	}

	useEffect(() => {
		titleRef.current.style.opacity = opacity
		if (coverRef?.current) coverRef.current.style.opacity = 1 - opacity
	}, [opacity])

	useEffect(() => {
		if (typeof window !== 'undefined' && coverRef) {
			window.addEventListener('scroll', handleScroll, false)
			//pageRef.current.addEventListener('scroll', handleScroll, { passive: true })
			// coverRef.current.addEventListener('scroll', handleScroll, { passive: true })
			//document.body.addEventListener
			console.log('EventListener add')

			setBgColor(coverRef?.current.className.split('from-')[1].split(' ')[0])
			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	return (
		<div
			className={
				'fixed top-0 flex flex-grow xl:hidden w-full items-center justify-between px-1 sm:px-2 z-20 ' +
				(opacity >= 1 ? (bgColor ? `bg-${bgColor}` : 'bg-[#030b17]') : 'bg-transparent')
			}>
			<NavigateBackButton />
			<div ref={titleRef} className={`opacity-${40} opacity-25 truncate text-center`}>
				{pageTitle}
			</div>
			<div className='flex gap-2 m-2'>
				<div className='mx-2'>{rightIcon}</div>
				<div className='mx-2'>{lastIcon}</div>
			</div>
		</div>
	)
}
