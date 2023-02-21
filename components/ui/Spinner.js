import classes from './spinner.module.css'

function Spinner() {
	return (
		<div className={classes.container + ' hidden'}>
			<div className={classes.loadContainer}>
				<div className={classes.linespinner} />
			</div>
		</div>
	)
}

export default Spinner
