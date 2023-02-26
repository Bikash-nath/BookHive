import { useEffect, useContext } from 'react'
import classes from './spinner.module.css'

import SpinnerContext from '../../store/spinnerContext'

function Spinner() {
	const { activeSpinner } = useContext(SpinnerContext)

	// useEffect(() => {
	// 	console.warn('useEffect Spinner status:-🔃', spinnerToggle)
	// }, [spinnerToggle])

	return (
		<div
			className={
				// activeSpinner
				'fixed flex w-full justify-center items-center top-12 z-30'
				// : 'hidden'
			}>
			<div className={classes.loadContainer}>
				<div className={classes.linespinner} />
			</div>
		</div>
	)
}

export default Spinner
