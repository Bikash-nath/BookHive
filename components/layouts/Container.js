import { useRef } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import { SearchToggleContextProvider } from '../../store/searchToggleContext'
import SnackBar from '../notification/SnackBar'
import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'
import PageContainer from './PageContainer'

function Container(props) {
	const headerRef = useRef()
	const navbarRef = useRef()

	return (
		<SnackbarContextProvider>
			<div className='overflow-hidden m-0 p-0'>
				<div className='flex h-screen m-0 p-0'>
					<NavbarLg />
					<SearchToggleContextProvider>
						<main className='flex-grow bg-[#121212] overflow-y-scroll select-none p-0 m-0 h-full'>
							<Header headerRef={headerRef} />
							<PageContainer
								page={props.children}
								headerRef={headerRef}
								navbarRef={navbarRef}
							/>
						</main>
					</SearchToggleContextProvider>
					<SnackBar navbarRef={navbarRef} />
					<NavbarSm navbarRef={navbarRef} />
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
