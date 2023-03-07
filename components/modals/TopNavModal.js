import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'

export default function TopNavModal({ rightIcon, pageTitle, coverRef }) {
	// const [windowWidth, setWindowWidth] = useState(null)
	const [scrollOpacity, setScrollOpacity] = useState(0)
	const [bgColor, setBgColor] = useState('')

	const handleScroll = () => {
		const position = Math.min(window.pageYOffset / 100, 50)
		setScrollOpacity(position)
		console.log('window.pageYOffset ', window.pageYOffset)
		console.log('coverRef.current\n', coverRef.current)
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && coverRef) {
			window.addEventListener('scroll', handleScroll)
			// coverRef.current.addEventListener('scroll', handleScroll, { passive: true })
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
				`fixed top-0 flex flex-grow xl:hidden w-full items-center justify-between px-1 sm:px-2 z-20 ` +
				`bg-opacity-80 ` +
				(bgColor ? `bg-${bgColor}` : 'bg-[#030b17]')
			}>
			<NavigateBackButton />
			<div className={`opacity-${2} truncate text-center`}>{pageTitle}</div>
			<div className='m-2'>{rightIcon}</div>
		</div>
	)
}
