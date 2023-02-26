import { useEffect, useContext } from 'react'

import SpinnerContext from '../../store/spinnerContext'
import classes from './spinner.module.css'

function Spinner(props) {
	const { activeSpinner, toggleSpinner } = useContext(SpinnerContext)

	useEffect(() => {
		if (activeSpinner) {
			const timer = setTimeout(() => {
				toggleSpinner(false)
			}, 5000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [activeSpinner])

	return (
		<div
			className={
				activeSpinner
					? 'fixed flex w-full lg:w-[83.5%] justify-center items-center z-30 ' +
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
