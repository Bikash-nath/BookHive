import { useState, useEffect } from 'react'

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			console.log('useEffect windowWidth()', windowWidth)

			if (!windowWidth) {
				setWindowWidth(window.innerWidth)
				console.log('set windowWidth()', windowWidth)
			}
			function handleResize() {
				setWindowWidth(window.innerWidth)
				console.log('addEventListener handleResize()')
			}
			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}
