import LoginButton from '../ui/LoginButton'

import { useContext } from 'react'
import { login } from '../../api/userProfile'
import SpinnerContext from '../../store/spinnerContext'
import SnackbarContext from '../../store/snackbarContext'
import SearchIcon from '../../assets/icons/SearchIcon'

export default function LoginBanner({ title, message, icon }) {
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)

	const submitHandler = async (e) => {
		e.preventDefault()
		toggleSpinner(true)
		const user = await login('email', 'password')
		if (user.data) {
			userCtx.addUser(user.data)
			snackbarCtx.addMessage({ title: 'Log in successfull', status: 'sucess' })
		} else {
			snackbarCtx.addMessage({ title: user })
		}
		toggleSpinner(false)
	}

	const pageIcon = {
		...icon,
		props: {
			dimensions: 'h-24 w-24',
		},
	}
	return (
		<div className='flex flex-col items-center justify-center h-[80vh]'>
			<div className='flex items-center cursor-pointer p-2' onClick={(e) => submitHandler(e)}>
				<SearchIcon dimensions='h-7 w-7' />
			</div>
			<div className='flex py-4 text-white'>{pageIcon}</div>
			<div className='flex py-2 md:py-4 text-2xl md:text-3xl'>
				<h2>{title}</h2>
			</div>
			<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
				<h3>{message}</h3>
			</div>
			<div className='flex transform scale-125 py-4'>
				<LoginButton />
			</div>
		</div>
	)
}
