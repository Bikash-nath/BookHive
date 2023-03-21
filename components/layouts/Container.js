import { useEffect, useRef } from 'react'

import useWindowWidth from '../../hooks/useWindowWidth'
import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import Header from './Header'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'
import SnackBar from '../notification/SnackBar'
import Navbar from './Navbar'

function Container(props) {
	const headerRef = useRef()
	const windowWidth = useWindowWidth()
	const navbarRef = useRef()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('load', function () {
				setTimeout(function () {
					window.scrollTo(0, 1)
				}, 2)
			})
		}
	}, [])

	return (
		<SnackbarContextProvider>
			{/*overflow-scroll overflow-x-hidden overflow-y-scroll || xl:overflow-hidden || overflow-auto*/}
			<div className='xl:overflow-hidden hide-scrollbar'>
				<div className='flex h-screen'>
					{windowWidth > 1280 && <Sidebar />}
					<SearchToggleContextProvider>
						<main className='flex-grow overflow-y-scroll select-none h-full page-gradient '>
							{windowWidth > 1280 && <Header headerRef={headerRef} />}
							<PageContainer page={props.children} headerRef={headerRef} />
						</main>
						<SnackBar navbarRef={navbarRef} />
						{windowWidth < 1280 && <Navbar navbarRef={navbarRef} />}
					</SearchToggleContextProvider>
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
