import classes from './button-spinner.module.css'
function ButtonSpinner({ dimensions }) {
	return (
		<div className={dimensions}>
			<div className={classes.spinner}></div>
		</div>
	)
}

export default ButtonSpinner
