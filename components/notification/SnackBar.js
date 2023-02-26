import { useState, useEffect, useContext } from 'react'

import SnackbarContext from '../../store/snackbarContext'
import classes from './snackbar.module.css'
import CloseIcon from '../../assets/icons/CloseIcon'

function SnackBar() {
	const snackbarCtx = useContext(SnackbarContext)
	const message = snackbarCtx.message
	const [windowWidth, setWindowWidth] = useState(null)
	// const router = useRouter()

	useEffect(() => {
		if (message && message.status !== 'pending') {
			const timer = setTimeout(() => {
				snackbarCtx.removeMessage()
			}, 5000)
			console.warn('snackbarCtx:-⛔', message)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [message])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	return message ? (
		<div
			className={
				message.title
					? 'absolute overflow-hidden m-2 lg:m-3 ' +
					  (windowWidth >= 1024 ? 'left-52 bottom-0' : 'bottom-14')
					: 'hidden'
			}>
			<div
				className='flex items-center justify-between bg-[#323232] w-full rounded-md box-border'
				vshow='show'
				transition={classes.uiSnackbarToggle}>
				<div className='p-3 text-xl leading-relaxed  text-white'>{message.title}</div>
				<div
					className='mx-2 p-[0.2rem] box-border rounded-full bg-[#1a1a1a] cursor-pointer'
					onClick={() => snackbarCtx.removeMessage()}>
					<CloseIcon color='#999999' dimensions={'w-6 h-6'} />
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default SnackBar
