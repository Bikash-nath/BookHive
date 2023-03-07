import { useState, useEffect, useRef } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import Header from './Header'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

function Container(props) {
	// const [windowWidth, setWindowWidth] = useState(null)

	const headerRef = useRef()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('load', () => {
				setTimeout(() => window.scrollTo(0, 1), 0)
			})
			// 	setWindowWidth(window.innerWidth)
		}
	}, []) //router.asPath

	return (
		<SnackbarContextProvider>
			{/*overflow-scroll overflow-x-hidden overflow-y-scroll || xl:overflow-hidden || overflow-auto*/}
			<div className='overflow-scroll xl:overflow-hidden hide-scrollbar'>
				<div className='flex h-screen relative'>
					<Sidebar />
					<SearchToggleContextProvider>
						<main className='flex-grow overflow-y-scroll select-none h-full page-gradient '>
							<Header headerRef={headerRef} />
							<PageContainer page={props.children} headerRef={headerRef} />
						</main>
					</SearchToggleContextProvider>
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
