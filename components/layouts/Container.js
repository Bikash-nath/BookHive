import { useState } from 'react'

import { SnackbarContextProvider } from '../../store/snackbarContext'
import Header from './Header'
import NavbarLg from './NavbarLg'
import NavbarSm from './NavbarSm'
import Spinner from '../ui/Spinner'
import SnackBar from '../notification/SnackBar'
// import ScrollToTop from '../ScrollToTop'

function Container(props) {
	const [searchToggle, setSearchToggle] = useState(false)
	// const pageRef = useRef()

	return (
		<SnackbarContextProvider>
			<div className='overflow-hidden m-0 p-0'>
				<div className='flex m-0 p-0'>
					<NavbarLg />
					<main className='flex-grow h-screen relative bg-[#121212] overflow-y-scroll select-none p-0 m-0'>
						<Header searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
						{/* <ScrollToTop /> */}
						<Spinner />
						<div className={searchToggle ? 'opacity-25' : ''}>{props.children}</div>
						<SnackBar />
					</main>
					<NavbarSm />
				</div>
			</div>
		</SnackbarContextProvider>
	)
}

export default Container
