import classes from './button-spinner.module.css'
function ButtonSpinner({ dimensions }) {
	return (
		<div className={dimensions}>
			<div className={classes.container}>
				<span className={classes.spinner}></span>
			</div>
		</div>
	)
}

export default ButtonSpinner
