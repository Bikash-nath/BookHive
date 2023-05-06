import { useContext } from 'react'
import ShareIcon from '../../assets/icons/ShareIcon'
import SnackbarContext from '../../store/snackbarContext'

export default function ShareButton() {
	const snackbarCtx = useContext(SnackbarContext)

	const shareBookHandler = async () => {
		if (navigator?.share) {
			await navigator.share({
				title: book.title,
				url: window.location.origin + router.asPath,
			})
		} else {
			snackbarCtx.addMessage({
				title: 'Sorry! Web Share API is not supported in this browser',
				status: 'fail',
			})
		}
	}

	return (
		<div onClick={shareBookHandler}>
			<ShareIcon dimensions='h-6 w-6' color='' />
		</div>
	)
}
