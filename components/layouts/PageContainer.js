import { useState, useEffect, useContext, useRef } from 'react'

import { SpinnerContextProvider } from '../../store/spinnerContext'
import SpinnerContext from '../../store/spinnerContext'
import SearchToggleContext from '../../store/searchToggleContext'
import Spinner from '../ui/Spinner'
import SnackBar from '../notification/SnackBar'
import Navbar from './Navbar'
// import ScrollToTop from '../ScrollToTop'

function PageContainer(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	const { activeSpinner } = useContext(SpinnerContext)
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	const navbarRef = useRef()

	return (
		<SpinnerContextProvider>
			<Spinner headerRef={props.headerRef} />
			<div
				className={
					'flex-grow page-gradient relative h-full ' +
					(activeSearch || activeSpinner ? 'opacity-40' : '')
				}>
				{props.page}
				{/* <ScrollToTop /> */}
			</div>
			<SnackBar navbarRef={navbarRef} />
			{windowWidth < 1024 && <Navbar navbarRef={navbarRef} />}
		</SpinnerContextProvider>
	)
}

export default PageContainer
