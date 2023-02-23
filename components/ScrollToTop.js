const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
	if (!isBrowser()) return
	window.scrollTo(0, 0)
	// window.scrollTo({ top: 0, behavior: 'smooth' });
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

export default withRouter(ScrollToTop)
