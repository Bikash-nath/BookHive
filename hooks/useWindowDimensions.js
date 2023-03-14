import { useState, useEffect } from 'react'

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
			function handleResize() {
				setWindowWidth(window.innerWidth)
			}
			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}
