import { useEffect, useContext } from 'react'

import SnackbarContext from '../../store/snackbarContext'
import classes from './snackbar.module.css'
import CloseIcon from '../../assets/icons/CloseIcon'

function SnackBar() {
	const snackbarCtx = useContext(SnackbarContext)
	const message = snackbarCtx.message

	useEffect(() => {
		if (message) {
			// && message.status !== 'pending'
			const timer = setTimeout(() => {
				snackbarCtx.removeMessage()
			}, 3000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [message])

	// const snackbarHideHandler = () => {
	// 	snackbarCtx.removeMessage()
	// }

	return message ? (
		<div
			className={
				'absolute overflow-hidden p-2 md:p-4 bottom-0 md:left-2 text-sm ' + message
					? ''
					: 'hidden'
			}>
			<div
				className={
					classes.uiSnackbar +
					' min-w-[18rem] max-w-screen-xs  md:max-w-screen-sm	min-h-[2.5rem] md:min-h-[3rem] px-[12px] py-4 m-1 rounded'
				}
				vshow='show'
				transition={classes.uiSnackbarToggle}>
				<div className='p-2 text-sm'>{message.title}</div>
				<div
					className={classes.uiSnackbarAction}
					onClick={() => snackbarCtx.removeMessage()}>
					<CloseIcon />
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default SnackBar
