import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function ScrollToTop() {
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeComplete', (url) => {
			if (typeof window !== 'undefined') {
				window.scrollTo(0, 0)
				// window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		})

		return () => {
			router.events.off('routeChangeComplete', () => {
				console.log('Unsuscribed routeChangeComplete')
			})
		}
	}, [router.events]) //router.asPath

	return <></>
}

// function ScrollToTop({ history }) {
// 	useEffect(() => {
// 		const unlisten = history.listen(() => {
// 			window.scrollTo(0, 0)
// 		})
// 		return () => unlisten()
// 	}, [history])

// 	return null
// }

export default ScrollToTop
