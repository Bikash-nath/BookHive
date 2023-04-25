import { useContext, useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import { updateUserPassword } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ButtonSpinner from '../../../components/widgets/ButtonSpinner'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function UpdatePassword(props) {
	const [passwordCurrent, setPasswordCurrent] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
	const [showPasswordCurrent, setShowPasswordCurrent] = useState(null)
	const [showNewPassword, setShowNewPassword] = useState(null)
	const [showNewPasswordConfirm, setShowNewPasswordConfirm] = useState(null)
	const [updating, setUpdating] = useState(false)

	const userCtx = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const router = useRouter()

	const submitHandler = async () => {
		if (newPassword === newPasswordConfirm) {
			setUpdating(true)
			const user = await updateUserPassword({
				passwordCurrent,
				newPassword,
				newPasswordConfirm,
			})
			if (user.data) {
				userCtx.addUser(user)
				snackbarCtx.addMessage({ title: 'Password update successfull.', status: 'success' })
				router.push({ pathname: '/user/account/profile/' })
			} else {
				snackbarCtx.addMessage({ title: user, status: 'invalid' })
			}
			setUpdating(false)
		} else snackbarCtx.addMessage({ title: 'Provided passwords do not match', status: 'invalid' })
	}

	useEffect(() => {
		if (!userCtx.user?.data) router.push('/')
	}, [userCtx.user, router])

	return (
		<Fragment>
			<Head>
				<title>Update Password</title>
				<meta name='description' content='BookHive user password update page' />
			</Head>
			<div className='page-gradient'>
				<LoginContainer>
					<h2 className='mb-8 text-3xl font-bold'>Update Password</h2>
					<div className='relative'>
						<input
							value={passwordCurrent}
							onChange={(e) => setPasswordCurrent(e.target.value)}
							placeholder='Enter your password'
							type={!showPasswordCurrent ? 'password' : 'text'}
							className='input-field mb-4'
						/>
						{passwordCurrent ? (
							!showPasswordCurrent ? (
								<div
									className='absolute top-6 right-2 box-border cursor-pointer'
									onClick={() => setShowPasswordCurrent(true)}>
									<EyeIcon />
								</div>
							) : (
								<div
									className='absolute top-6 right-2 box-border cursor-pointer'
									onClick={() => setShowPasswordCurrent(false)}>
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
							type={!showNewPassword ? 'password' : 'text'}
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
						<button
							onClick={submitHandler}
							className={
								passwordCurrent && newPassword.length > 8 && newPassword === newPasswordConfirm
									? 'btn-next'
									: 'btn-next-inactive'
							}>
							{updating ? (
								<ButtonSpinner />
							) : (
								<>
									<span>Update Password</span>
									<ArrowIcon />
								</>
							)}
						</button>
					</div>
				</LoginContainer>
			</div>
		</Fragment>
	)
}

export default UpdatePassword
