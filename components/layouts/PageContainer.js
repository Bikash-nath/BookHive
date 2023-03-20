import { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'

import useWindowWidth from '../../hooks/useWindowWidth'
import { SpinnerContextProvider } from '../../store/spinnerContext'
import SpinnerContext from '../../store/spinnerContext'
import SearchToggleContext from '../../store/searchToggleContext'
import Spinner from '../widgets/Spinner'
import SnackBar from '../notification/SnackBar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

// import useScrollToTop from '../../hooks/useScrollToTop'

function PageContainer(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	const { activeSpinner } = useContext(SpinnerContext)
	const windowWidth = useWindowWidth()
	const navbarRef = useRef()
	const router = useRouter()

	// useEffect(() => {
	// 	console.log('pageContainer', props.page[1])
	// 	// console.log('pageContainer.current', props.page[1].current)
	// 	if (props.page[1]) {
	// 		// props.page[1].current.scrollTo(0, 0)
	// 		props.page[1].scrollIntoView()
	// 		console.log('props.page.scroll', props.page[1].current.scrollTo)
	// 	}
	// }, [router.asPath])

	return (
		<SpinnerContextProvider>
			<Spinner headerRef={props.headerRef} />
			<div
				className={
					'relative h-full ' + (activeSearch || activeSpinner ? 'opacity-25' : '')
				}>
				{/* xl:flex  */}
				{/* {windowWidth > 1280 && <Sidebar />} */}
				{props.page}
			</div>
			<SnackBar navbarRef={navbarRef} />
			{windowWidth < 1280 && <Navbar navbarRef={navbarRef} />}
		</SpinnerContextProvider>
	)
}

export default PageContainer
