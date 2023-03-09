import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function ScrollToTop({ pageRef }) {
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeStart', (url) => {
			if (typeof window !== 'undefined') {
				setTimeout(function () {
					window.scrollTo(0, 0)
					// window.scrollY(0)
				}, 200)
				// pageRef.current.scrollTo(0, 0)

				// window.focus();
				// window.scrollTo(0, 0)

				// document.body.scrollTop(0)
				// document.getElementById('root').scrollTo(0, 0)
				// document.querySelector('#dummy_element').scrollIntoView()
				// window.scrollTo({ top: 0, behavior: 'smooth' })
				console.log('ScrollTop on routeChangeStart⭐')
			}
		})

		return () => {
			router.events.off('routeChangeStart', () => {
				console.log('Unsuscribed routeChangeComplete')
			})
		}
	}, [router.asPath]) //router.events

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
