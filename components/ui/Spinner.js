import classes from './spinner.module.css'

let spinnerLoading = false

export const setSpinnerState = (spinnerState) => {
	spinnerLoading = spinnerState
}

function Spinner() {
	return (
		<div
			className={
				'fixed flex w-full justify-center items-center top-16 z-30 ' +
				(!spinnerLoading ? 'hidden' : '')
			}>
			<div className={classes.loadContainer}>
				<div className={classes.linespinner} />
			</div>
		</div>
	)
}

export default Spinner
