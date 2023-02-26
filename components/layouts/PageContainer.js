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

	console.log('activeSearch-PageContainer', activeSearch)
	return (
		<SpinnerContextProvider>
			<div
				className={
					'bg-gradient relative text-white h-full ' + (activeSearch ? 'opacity-25' : '')
				}>
				<Spinner />
				{props.page}
				<ScrollToTop />
			</div>
		</SpinnerContextProvider>
	)
}

export default PageContainer
