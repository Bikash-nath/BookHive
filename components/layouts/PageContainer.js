import { useContext } from 'react'

import Spinner from '../ui/Spinner'
import ScrollToTop from '../ScrollToTop'
import SearchToggleContext from '../../store/searchToggleContext'
import { SpinnerContextProvider } from '../../store/spinnerContext'

function PageContainer(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	//'pb-24' //book,discover
	//'pt-4 lg:pt-6' //home
	//'h-[93vh]' //library

	return (
		<SpinnerContextProvider>
			<div className={'page-gradient relative ' + (activeSearch ? 'opacity-25' : '')}>
				<Spinner headerRef={props.headerRef} />
				{props.page}
				<ScrollToTop />
			</div>
		</SpinnerContextProvider>
	)
}

export default PageContainer
