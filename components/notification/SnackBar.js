import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import SnackbarContext from '../../store/snackbarContext'
import classes from './snackbar.module.css'
import CloseIcon from '../../assets/icons/CloseIcon'

function SnackBar(props) {
	const snackbarCtx = useContext(SnackbarContext)
	const message = snackbarCtx.message

	const windowWidth = useWindowDimensions()
	const router = useRouter()

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
					? 'absolute overflow-hidden m-2 xl:m-3 w-auto ' +
					  (windowWidth < 1280
							? props.navbarRef.current
								? 'left-0 bottom-14'
								: 'left-0 bottom-0'
							: 'left-52 bottom-0')
					: 'hidden'
			}>
			<div
				className='flex items-center justify-between bg-[#192132] w-full rounded-md box-border'
				vshow='show'
				transition={classes.uiSnackbarToggle}>
				<div className='p-2 xl:p-3 text-lg xl:text-xl leading-relaxed  text-white'>
					{message.title}
				</div>
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
