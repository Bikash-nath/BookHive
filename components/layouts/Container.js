import { useRef, useContext, Fragment } from 'react'

import { SpinnerContextProvider } from '../../store/spinnerContext'
import BookContext from '../../store/bookContext'
import SpinnerContext from '../../store/spinnerContext'
import SearchToggleContext from '../../store/searchToggleContext'
import useWindowWidth from '../../hooks/useWindowWidth'
import Sidebar from './Sidebar'
import Header from './Header'
import Navbar from './Navbar'
import SnackBar from '../notification/SnackBar'
import BookProgressBar from '../ui/BookProgressBar'
import Spinner from '../widgets/Spinner'

function Container(props) {
	const { activeSpinner } = useContext(SpinnerContext)
	const { activeSearch } = useContext(SearchToggleContext)
	const { activeBook } = useContext(BookContext)
	const headerRef = useRef()
	const windowWidth = useWindowWidth()
	const navbarRef = useRef()
	const bookbarRef = useRef()

	return (
		<Fragment>
			<SpinnerContextProvider>
				<main className={'flex page-gradient relative hide-scrollbar scroll-smooth'}>
					{windowWidth > 1280 && <Sidebar />}
					<div className='flex flex-col w-screen xl:max-w-[85.5vw] relative'>
						{windowWidth > 1280 && <Header headerRef={headerRef} />}
						<Spinner headerRef={headerRef} />
						<div
							className={
								'relative h-full' +
								(activeBook && windowWidth < 1280 ? ' pb-14' : '') +
								(activeSearch || activeSpinner ? ' opacity-30' : '')
							}>
							{props.children}
						</div>
						<BookProgressBar bookbarRef={bookbarRef} />
						<SnackBar navbarRef={navbarRef} bookbarRef={bookbarRef} />
						{windowWidth < 1280 && <Navbar navbarRef={navbarRef} />}
					</div>
				</main>
			</SpinnerContextProvider>
		</Fragment>
	)
}

export default Container
