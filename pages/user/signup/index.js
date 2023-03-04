import { useContext, useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import SpinnerContext from '../../../store/spinnerContext'
import { signup } from '../../../api/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function SignUpPage(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [showPassword, setShowPassword] = useState(null)
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(null)

	const userCtx = useContext(UserContext)
	const activeUser = userCtx.user
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		if (password === passwordConfirm) {
			toggleSpinner(true)
			const user = await signup(name, email, password, passwordConfirm)
			if (user.data) {
				userCtx.addUser(user.data)
				snackbarCtx.addMessage({ title: 'Log in successfull' })
			} else {
				snackbarCtx.addMessage({ title: user })
			}
		}
		toggleSpinner(false)
	}

	useEffect(() => {
		if (activeUser?.data) router.push('/')
	}, [router, activeUser])

	return (
		<Fragment>
			<Head>
				<title>SignUp</title>
				<meta name='description' content='BookHive SignUp page' />
			</Head>
			<LoginContainer>
				<h2 className='mb-8 text-3xl font-bold'>Sign Up</h2>
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
					<button onClick={submitHandler} className='btn-next'>
						<span>Next</span>
						<ArrowIcon />
					</button>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default SignUpPage
