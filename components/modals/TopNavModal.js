import { useState, useEffect, useRef } from 'react'
// import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'

export default function TopNavModal({ rightIcon, lastIcon, pageTitle, coverRef, pageRef }) {
	// const [windowWidth, setWindowWidth] = useState(null)
	const [opacity, setOpacity] = useState(0)
	const [bgColor, setBgColor] = useState('')

	const titleRef = useRef()

	useEffect(() => {
		titleRef.current.style.opacity = opacity
		if (coverRef?.current) coverRef.current.style.opacity = 1 - opacity
	}, [opacity])

	const handleScroll = () => {
		console.log('coverRef.height\n', coverRef.current.offsetHeight)
		console.log('coverRef🧿\n', coverRef.current.getBoundingClientRect())
		console.log('coverRef.top🧿\n', coverRef.current.getBoundingClientRect().top)
		console.log('pageRef.pageYOffset\n', pageRef.current.offsetHeight)
		console.log('pageRef.current🧿\n', pageRef.current.getBoundingClientRect())
		const coverHeight = coverRef.current.offsetHeight
		console.log('coverRef.current.height\n', coverHeight)
		const scrollPos = Math.min(coverHeight - pageRef.current.pageYOffset, coverHeight)
		const scrollOpacity = ((scrollPos / coverHeight + Number.EPSILON) * 100) / 100
		setOpacity(scrollOpacity)
	}

	useEffect(() => {
		if (pageRef.current) {
			pageRef.current.addEventListener('wheel', handleScroll)
			if (coverRef.current.className.includes('from-'))
				setBgColor(coverRef.current.className.split('from-')[1].split(' ')[0])
			return () => {
				pageRef.current?.removeEventListener('scroll', handleScroll)
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
