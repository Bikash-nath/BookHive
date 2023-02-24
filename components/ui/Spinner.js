import { useEffect, useContext } from 'react'
import classes from './spinner.module.css'

import SnackbarContext from '../../store/snackbarContext'

function Spinner() {
	const SnackbarCtx = useContext(SnackbarContext)
	const status = SnackbarCtx.message?.status

	useEffect(() => {
		console.warn('useEffect Spinner status:-🔃', status)
	}, [status])

	const containerClassHandler = () => {
		// flex-auto
		if (status === 'pending') {
			return 'fixed flex w-full lg:w-4/5 justify-center items-center top-16 z-30'
		} else return 'hidden'
	}

	return (
		<div className={containerClassHandler()}>
			<div className={classes.loadContainer}>
				<div className={classes.linespinner} />
			</div>
		</div>
	)
}

export default Spinner
