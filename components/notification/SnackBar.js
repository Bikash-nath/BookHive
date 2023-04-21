import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import useWindowWidth from '../../hooks/useWindowWidth'
import SnackbarContext from '../../store/snackbarContext'
import classes from './snackbar.module.css'
import HelpIcon from '../../assets/icons/HelpIcon'
import CrossIcon from '../../assets/icons/CrossIcon'
import CloseIcon from '../../assets/icons/CloseIcon'
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon'
import WarningIcon from '../../assets/icons/WarningIcon'

function SnackBar(props) {
	const snackbarCtx = useContext(SnackbarContext)
	const message = snackbarCtx.message

	const windowWidth = useWindowWidth()
	const router = useRouter()

	const badge = {
		success: {
			color: 'bg-green-50 text-green-700 border-green-700 ring-green-600/20',
			icon: <CheckCircleIcon dimensions={'w-6 h-6'} />,
		},
		fail: {
			color: 'bg-red-50 text-red-700 border-red-700 ring-red-600/10',
			icon: <CloseIcon dimensions={'w-6 h-6'} />,
		},
		warning: {
			color: 'bg-yellow-50 text-yellow-800 border-yellow-800 ring-yellow-600/20',
			icon: <WarningIcon dimensions={'w-6 h-6'} />,
		},
		info: {
			color: 'bg-blue-50 text-blue-700 border-blue-700 ring-blue-700/10',
			icon: <HelpIcon dimensions={'w-6 h-6'} />,
		},
	}

	useEffect(() => {
		if (message && message.status !== 'pending') {
			const timer = setTimeout(() => {
				snackbarCtx.removeMessage()
			}, 3000)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [message, router.asPath])

	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); bg-[#323232]
	return message ? (
		<div
			className={
				message.title
					? 'fixed overflow-hidden m-2 xl:m-3 w-auto z-20 bg-black ' +
					  (windowWidth < 1280
							? props.navbarRef.current
								? 'left-0 bottom-14'
								: 'left-0 bottom-0'
							: 'left-[13.5vw] bottom-0')
					: 'hidden'
			}>
			<div
				className={
					'inline-flex items-center justify-between w-full rounded-md border-l-4 box-border ring-1 ring-inset ' +
					badge[message.status]
				}
				vshow='show'
				transition={classes.uiSnackbarToggle}>
				<div className='flex gap-2 p-2 xl:p-3'>
					{badge[message.status] ? badge[message.status].icon : ''}
					<span class='text-lg xl:text-xl font-medium leading-relaxed'>{message.title}</span>
				</div>
				<div
					className='mx-2 p-[0.2rem] box-border rounded-full cursor-pointer'
					onClick={() => snackbarCtx.removeMessage()}>
					<CrossIcon dimensions={'w-6 h-6'} />
				</div>
			</div>
		</div>
	) : (
		<></>
	)
}

export default SnackBar
