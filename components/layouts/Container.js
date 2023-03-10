import { useRef } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import Header from './Header'
import Sidebar from './Sidebar'
import PageContainer from './PageContainer'

function Container(props) {
	const headerRef = useRef()
	const windowWidth = useWindowDimensions()

	return (
		<SnackbarContextProvider>
			{/*overflow-scroll overflow-x-hidden overflow-y-scroll || xl:overflow-hidden || overflow-auto*/}
			<div className='overflow-scroll xl:overflow-hidden hide-scrollbar'>
				<div className='flex h-screen relative'>
					{windowWidth > 1280 && <Sidebar />}
					<SearchToggleContextProvider>
						<main className='flex-grow overflow-y-scroll select-none h-full page-gradient '>
							{windowWidth > 1280 && <Header headerRef={headerRef} />}
							<PageContainer page={props.children} headerRef={headerRef} />
						</main>
					</SearchToggleContextProvider>
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
