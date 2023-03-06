import { useState, useEffect, useRef } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import Header from './Header'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'
// import Navbar from './Navbar'
// import SnackBar from '../notification/SnackBar'

function Container(props) {
	// const [windowWidth, setWindowWidth] = useState(null)

	const headerRef = useRef()

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		setWindowWidth(window.innerWidth)
	// 	}
	// }, [])

	return (
		<SnackbarContextProvider>
			{/* xl:overflow-hidden || overflow-auto*/}
			<div className='overflow-auto xl:overflow-hidden'>
				<div className='flex h-screen relative'>
					<Sidebar />
					<SearchToggleContextProvider>
						<main className='flex-grow overflow-y-scroll select-none h-full page-gradient '>
							<Header headerRef={headerRef} />
							<PageContainer page={props.children} headerRef={headerRef} />
						</main>
					</SearchToggleContextProvider>
					{/* <SnackBar navbarRef={navbarRef} />
					{windowWidth < 1280 && <Navbar navbarRef={navbarRef} />} */}
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
