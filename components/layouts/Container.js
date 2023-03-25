import { useRef, useContext, Fragment } from 'react'
// import { useRouter } from 'next/router'

import { SpinnerContextProvider } from '../../store/spinnerContext'
import SpinnerContext from '../../store/spinnerContext'
import SearchToggleContext from '../../store/searchToggleContext'
import useWindowWidth from '../../hooks/useWindowWidth'
import Sidebar from './Sidebar'
import Header from './Header'
import Navbar from './Navbar'
import SnackBar from '../notification/SnackBar'
import Spinner from '../widgets/Spinner'

function Container(props) {
	const headerRef = useRef()
	const windowWidth = useWindowWidth()
	const navbarRef = useRef()
	const { activeSpinner } = useContext(SpinnerContext)
	const { activeSearch } = useContext(SearchToggleContext)

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		window.addEventListener('load', function () {
	// 			setTimeout(function () {
	// 				window.scrollTo(0, 1)
	// 			}, 2)
	// 		})
	// 	}
	// }, [])

	return (
		<Fragment>
			<SpinnerContextProvider>
				<Spinner headerRef={headerRef} />
				<main className={'flex page-gradient relative hide-scrollbar scroll-smooth'}>
					{windowWidth > 1280 && <Sidebar />}
					<div className='flex flex-col w-screen xl:max-w-[85.5vw]'>
						{windowWidth > 1280 && <Header headerRef={headerRef} />}
						<div className={'relative h-full ' + (activeSearch || activeSpinner ? 'opacity-25' : '')}>
							{props.children}
						</div>
					</div>
				</main>
			</SpinnerContextProvider>
			<SnackBar navbarRef={navbarRef} />
			{windowWidth < 1280 && <Navbar navbarRef={navbarRef} />}
		</Fragment>
	)
}

export default Container
