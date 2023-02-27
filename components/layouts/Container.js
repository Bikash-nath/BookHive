import { useRef, useContext } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import SnackBar from '../notification/SnackBar'
import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Spinner from '../ui/Spinner'
import ScrollToTop from '../ScrollToTop'
import SearchToggleContext from '../../store/searchToggleContext'
import { SpinnerContextProvider } from '../../store/spinnerContext'
// import PageContainer from './PageContainer'

function Container(props) {
	const { activeSearch } = useContext(SearchToggleContext)
	const headerRef = useRef()
	const navbarRef = useRef()

	return (
		<SnackbarContextProvider>
			<div className='overflow-hidden'>
				<div className='flex h-screen relative'>
					<Sidebar />
					<SearchToggleContextProvider>
						<main className='flex-grow bg-[#121212] overflow-y-scroll select-none h-full'>
							<Header headerRef={headerRef} />
							<SpinnerContextProvider>
								<div
									className={
										'page-gradient relative ' +
										(activeSearch ? 'opacity-25' : '')
									}>
									<Spinner headerRef={headerRef} />
									{props.children}
									<ScrollToTop />
								</div>
							</SpinnerContextProvider>
						</main>
					</SearchToggleContextProvider>
					<SnackBar navbarRef={navbarRef} />
					<Navbar navbarRef={navbarRef} />
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
