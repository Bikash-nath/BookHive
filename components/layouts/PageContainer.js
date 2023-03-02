import { useEffect, useContext } from 'react'

import SearchToggleContext from '../../store/searchToggleContext'
import SpinnerContext from '../../store/spinnerContext'
import Spinner from '../ui/Spinner'
import ScrollToTop from '../ScrollToTop'
import { SpinnerContextProvider } from '../../store/spinnerContext'

function PageContainer(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	const { activeSpinner } = useContext(SpinnerContext)

	return (
		<SpinnerContextProvider>
			<Spinner headerRef={props.headerRef} />
			<div
				className={
					'page-gradient relative h-screen ' +
					(activeSearch || activeSpinner ? 'opacity-40' : '')
				}>
				{props.page}
				{/* <ScrollToTop /> */}
			</div>
		</SpinnerContextProvider>
	)
}

export default PageContainer
