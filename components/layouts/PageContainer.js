import { useState, useEffect, useContext, useRef } from 'react'

import { SpinnerContextProvider } from '../../store/spinnerContext'
import SpinnerContext from '../../store/spinnerContext'
import SearchToggleContext from '../../store/searchToggleContext'
import Spinner from '../widgets/Spinner'
import SnackBar from '../notification/SnackBar'
import Navbar from './Navbar'
// import ScrollToTop from '../ScrollToTop'

function PageContainer(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	const { activeSpinner } = useContext(SpinnerContext)

	const navbarRef = useRef()

	return (
		<SpinnerContextProvider>
			<Spinner headerRef={props.headerRef} />
			<div
				className={
					'relative h-full ' + (activeSearch || activeSpinner ? 'opacity-40' : '')
				}>
				{props.page}
				{/* <ScrollToTop /> */}
			</div>
			<SnackBar navbarRef={navbarRef} />
			<Navbar navbarRef={navbarRef} />
		</SpinnerContextProvider>
	)
}

export default PageContainer
