import { useContext, useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import { signup } from '../../../API/userProfile'
import { createUserLibrary } from '../../../API/userLibrary'
import LoginContainer from '../../../components/login/LoginContainer'
import ButtonSpinner from '../../../components/widgets/ButtonSpinner'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function SignUpPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [showPassword, setShowPassword] = useState(null)
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(null)
	const [loading, setLoading] = useState(true)

	const userCtx = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		if (password === passwordConfirm) {
			setLoading(true)
			const user = await signup(name, email, password, passwordConfirm)
			if (user.data) {
				userCtx.addUser(user)
				snackbarCtx.addMessage({ title: 'Sign up successfull' })
				setTimeout(() => createUserLibrary(), 500)
			} else {
				snackbarCtx.addMessage({ title: user })
			}
			setLoading(false)
		} else snackbarCtx.addMessage({ title: 'Provided passwords do not match' })
	}

	useEffect(() => {
		if (userCtx.user?.data) {
			router.push('/')
		}
	}, [userCtx.user, router])

	return (
		<Fragment>
			<Head>
				<title>Sign Up</title>
				<meta name='description' content='BookHive SignUp page' />
			</Head>
			<LoginContainer>
				<h2 className='text-2xl xl:text-3xl mb-6 xl:mb-8 font-bold'>Sign Up</h2>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Enter your name'
					type='text'
					className='input-field mb-4'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Enter email address or phone'
					type='email'
					className='input-field mb-4'
				/>
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
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
						placeholder='Confirm your password'
						type={!showPasswordConfirm ? 'password' : 'text'}
						className='input-field mb-4'
					/>
					{passwordConfirm ? (
						!showPasswordConfirm ? (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowPasswordConfirm(true)}>
								<EyeIcon />
							</div>
						) : (
							<div
								className='absolute top-6 right-2 box-border cursor-pointer'
								onClick={() => setShowPasswordConfirm(false)}>
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
							name && email && password && password === passwordConfirm ? 'btn-next' : 'btn-next-inactive'
						}>
						{loading ? (
							<ButtonSpinner />
						) : (
							<>
								<span>Sign Up</span>
								<ArrowIcon />
							</>
						)}
					</button>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default SignUpPage
