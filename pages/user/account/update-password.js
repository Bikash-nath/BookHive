import { useContext, useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import SpinnerContext from '../../../store/spinnerContext'
import { changeUserPassword } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function ChangeNewPassword(props) {
	const [password, setPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
	const [showPassword, setShowPassword] = useState(null)
	const [showNewPassword, setShowNewPassword] = useState(null)
	const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(null)

	const userCtx = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		if (newPassword === newPasswordConfirm) {
			toggleSpinner(true)
			const user = await changeUserPassword(password, newPassword, newPasswordConfirm)
			if (user.data) {
				userCtx.addUser(user)
				snackbarCtx.addMessage({ title: 'Password change successfull' })
			} else {
				snackbarCtx.addMessage({ title: user })
			}
			toggleSpinner(false)
		} else snackbarCtx.addMessage({ title: 'Provided passwords do not match' })
	}

	useEffect(() => {
		if (!userCtx.user?.data) router.push('/')
	}, [userCtx.user, router])

	return (
		<Fragment>
			<Head>
				<title>Change Password</title>
				<meta name='description' content='BookHive change user password page' />
			</Head>
			<LoginContainer>
				<h2 className='mb-8 text-3xl font-bold'>Change Password</h2>
				<div className='relative'>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Enter your password'
						type={!showPassword ? 'password' : 'text'}
						className='input-field mb-4'
					/>
					{password ? (
						!showPassword ? (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowPassword(true)}>
								<EyeIcon />
							</div>
						) : (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowPassword(false)}>
								<EyeSlashIcon />
							</div>
						)
					) : (
						<></>
					)}
				</div>
				<div className='relative'>
					<input
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						placeholder='Enter your newPassword'
						type={!showNewPassword ? 'newPassword' : 'text'}
						className='input-field mb-4'
					/>
					{newPassword ? (
						!showNewPassword ? (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowNewPassword(true)}>
								<EyeIcon />
							</div>
						) : (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowNewPassword(false)}>
								<EyeSlashIcon />
							</div>
						)
					) : (
						<></>
					)}
				</div>
				<div className='relative'>
					<input
						value={newPasswordConfirm}
						onChange={(e) => setNewPasswordConfirm(e.target.value)}
						placeholder='Confirm your newPassword'
						type={!showNewPasswordConfirm ? 'newPassword' : 'text'}
						className='input-field mb-4'
					/>
					{newPasswordConfirm ? (
						!showNewPasswordConfirm ? (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowNewPasswordConfirm(true)}>
								<EyeIcon />
							</div>
						) : (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowNewPasswordConfirm(false)}>
								<EyeSlashIcon />
							</div>
						)
					) : (
						<></>
					)}
				</div>

				<div className='flex items-center justify-end my-3 md:my-6'>
					<button onClick={submitHandler} className='btn-next'>
						<span>Next</span>
						<ArrowIcon />
					</button>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default ChangeNewPassword
