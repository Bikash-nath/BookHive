import { useContext } from 'react'

import SearchToggleContext from '../../store/searchToggleContext'
import SpinnerContext from '../../store/spinnerContext'
import classes from './spinner.module.css'

function Spinner(props) {
	const { toggleSearch } = useContext(SearchToggleContext)
	const { activeSpinner } = useContext(SpinnerContext)

	// useEffect(() => {
	// 	if (activeSpinner) {
	// 		toggleSearch(true)
	// 	} else {
	// 		toggleSearch(false)
	// 	}
	// }, [activeSpinner])

	return (
		<div
			className={
				activeSpinner
					? 'fixed flex w-full xl:w-[83.5%] justify-center items-center z-30 ' +
					  (props.headerRef.current ? 'top-16' : 'top-8')
					: 'hidden'
			}>
			<div className={classes.loadContainer}>
				<div className={classes.linespinner} />
			</div>
		</div>
	)
}

export default Spinner
