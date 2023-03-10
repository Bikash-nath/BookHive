import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function ScrollToTop({ pageRef }) {
	const router = useRouter()

	useEffect(() => {
		// router.events.on('routeChangeStart', (url) => {
		// 	if (typeof window !== 'undefined') {
		// 		// setTimeout(function () {
		// 		// 	window.scrollTo(0, 0)
		// 		// }, 200)
		console.log(pageRef)

		if (pageRef?.current) {
			pageRef.current.scrollTo(0, 0)
			console.log('pageRef.current', pageRef.current.scrollTo)
		}

		// window.focus();
		// window.scrollTo(0, 0)

		// document.body.scrollTop(0)
		// document.getElementById('root').scrollTo(0, 0)
		// document.querySelector('#dummy_element').scrollIntoView()
		// window.scrollTo({ top: 0, behavior: 'smooth' })
		// 		console.log('ScrollTop on routeChangeStart⭐')
		// 	}
		// })

		// return () => {
		// 	router.events.off('routeChangeStart', () => {
		// 		console.log('Unsuscribed routeChangeComplete')
		// 	})
		// }
	}, [pageRef?.current]) //router.events

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
