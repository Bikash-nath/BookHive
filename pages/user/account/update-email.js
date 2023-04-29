import { useContext, useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import { updateUserEmail } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ButtonSpinner from '../../../components/widgets/ButtonSpinner'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function UpdateEmail(props) {
	const [email, setEmail] = useState('')
	const [newEmail, setNewEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [updating, setUpdating] = useState(false)

	const userCtx = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const router = useRouter()

	useEffect(() => {
		if (!userCtx.user?.data) router.push('/')
	}, [userCtx.user, router])

	const submitFormHandler = async () => {
		if (!email) {
			return snackbarCtx.addMessage({ title: 'Please provide your email', status: 'warning' })
		} else if (!newEmail) {
			return snackbarCtx.addMessage({ title: 'Please provide new email', status: 'warning' })
		} else if (!password) {
			return snackbarCtx.addMessage({ title: 'Please provide your password', status: 'warning' })
		}
		if (email === newEmail) {
			snackbarCtx.addMessage({ title: 'Your current email cannot be same as new email', status: 'invalid' })
			return
		}
		setUpdating(true)
		const user = await updateUserEmail({ email, newEmail, password, passwordConfirm: password })
		if (user.data) {
			userCtx.addUser(user)
			snackbarCtx.addMessage({ title: 'Email update successfull. Login again.', status: 'success' })
			router.push({ pathname: '/user/account/profile/' })
		} else {
			snackbarCtx.addMessage({ title: user, status: 'invalid' })
		}
		setUpdating(false)
	}

	const submitKeyHandler = (e) => {
		if (e.key === 'Enter') submitFormHandler(e)
	}

	return (
		<Fragment>
			<Head>
				<title>Update Email</title>
				<meta name='description' content='BookHive user email update page' />
			</Head>
			<div className='page-gradient'>
				<LoginContainer>
					<h2 className='mb-8 text-3xl font-bold'>Update Email</h2>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onKeyUp={submitKeyHandler}
						placeholder='Enter your current email'
						type='email'
						className='input-field my-4'
					/>
					<input
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
						onKeyUp={submitKeyHandler}
						placeholder='Enter your new email'
						type='email'
						className='input-field my-4'
					/>
					<div className='relative mb-4'>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onKeyUp={submitKeyHandler}
							placeholder='Your current password'
							type={!showPassword ? 'password' : 'text'}
							className='input-field box-border'
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
					<div className='flex items-center justify-end my-3 md:my-6'>
						<button
							onClick={submitFormHandler}
							className={
								email !== newEmail && email.includes('@') && newEmail.includes('@') && password
									? 'btn-next'
									: 'btn-next-inactive'
							}>
							{updating ? (
								<ButtonSpinner />
							) : (
								<>
									<span>Update Email</span>
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

export default UpdateEmail
