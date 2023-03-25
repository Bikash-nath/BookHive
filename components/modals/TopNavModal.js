import { useState, useEffect, useRef, useCallback } from 'react'
// import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'
import useWindowWidth from '../../hooks/useWindowWidth'

export default function TopNavModal({ rightIcon, lastIcon, pageTitle, pageRef, coverRef }) {
	const [opacity, setOpacity] = useState(0)
	const [navOpacity, setNavOpacity] = useState(0)
	const [bgColor, setBgColor] = useState('')
	const titleRef = useRef()
	const navRef = useRef()

	const windowWidth = useWindowWidth()

	useEffect(() => {
		navRef.current.style.backgroundOpacity = opacity
		if (opacity > 0.75) titleRef.current.style.opacity = opacity
		else titleRef.current.style.opacity = 0
		if (coverRef?.current) coverRef.current.style.opacity = 1 - opacity
	}, [opacity])

	const handleScroll = () => {
		const scrollYPos = -1 * coverRef.current.getBoundingClientRect().top
		const coverHeight = coverRef.current.offsetHeight
		const scrollPos = Math.min(scrollYPos, coverHeight)
		const scrollOpacity = Math.round((scrollPos / coverHeight + Number.EPSILON) * 100) / 100 //round to 2 decimal places
		setOpacity(scrollOpacity)
		setNavOpacity(Math.round(Math.round((scrollOpacity + Number.EPSILON) * 100) / 10) * 10)
	}

	let timerId
	const setDebouncedScroll = () => {
		if (timerId) clearTimeout(timerId)

		timerId = setTimeout(() => {
			handleScroll()
		}, 15)
	}

	// const debouncedScroll = useCallback(_.debounce(handleScroll, 500),[]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', setDebouncedScroll)

			// if ('ontouchstart' in window) {
			// pageRef.current.addEventListener('touchstart', setDebouncedScroll)
			// pageRef.current.addEventListener('touchmove', setDebouncedScroll)
			// pageRef.current.addEventListener('touchend', setDebouncedScroll)
			// } else {
			if (coverRef.current.className.includes('from-')) {
				setBgColor(coverRef.current.className.split('from-')[1].split('-')[0] + '-800')
			}
			return () => {
				window?.removeEventListener('scroll', setDebouncedScroll)
				// pageRef.current?.removeEventListener('touchstart', setDebouncedScroll)
				// pageRef.current?.removeEventListener('touchmove', setDebouncedScroll)
				// pageRef.current?.removeEventListener('touchend', setDebouncedScroll)
			}
		}
	}, [])

	return (
		<div
			className={
				`fixed top-0 flex flex-grow xl:hidden w-full items-center justify-between gap-2 md:gap-3 px-1 sm:px-2 z-20 bg-opacity-${navOpacity} ` +
				(bgColor ? `bg-${bgColor}` : 'bg-[#030b17]')
			}
			ref={navRef}>
			<NavigateBackButton />
			<div ref={titleRef} className={`opacity-0 truncate font-medium text-lg text-center`}>
				{pageTitle}
			</div>
			<div className='flex gap-4 sm:gap-6 m-2'>
				<div className=''>{rightIcon}</div>
				<div className=''>{lastIcon}</div>
			</div>
		</div>
	)
}
