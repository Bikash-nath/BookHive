import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	return windowWidth
}
