import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import SpinnerContext from '../../../store/spinnerContext'
import { login } from '../../../api/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'
// import ErrorAlert from '../../../components/widgets/ErrorAlert'

function LoginEmailPage(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const userCtx = useContext(UserContext)
	const activeUser = userCtx.user
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		toggleSpinner(true)
		const user = await login(email, password)
		if (user.data) {
			userCtx.addUser(user.data)
			snackbarCtx.addMessage({ title: 'Log in successfull', status: 'sucess' })
		} else {
			snackbarCtx.addMessage({ title: user })
		}
		toggleSpinner(false)
	}

	useEffect(() => {
		if (activeUser?.data) router.push('/')
	}, [router, activeUser])

	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login page' />
			</Head>
			{/* {loading && <LoadingSpinner />} */}
			{/* {error && <ErrorAlert variant='danger'>{error}</ErrorAlert>} */}
			<LoginContainer>
				<h2 className='mb-4 text-3xl font-bold'>Log In</h2>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					placeholder='Enter email address or phone'
					type='email'
					className='input-field mb-4 focus:border focus:border-purple-600'
				/>
				<div className='relative'>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Enter your password'
						type={!showPassword ? 'password' : 'text'}
						className='input-field mb-4 focus:border focus:border-purple-600 box-border'
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
				<div className='flex items-center justify-between my-3 md:my-6'>
					<Link href='/user/forgotPassword'>
						<div className='font-semibold text-purple-400'>Forgot password ?</div>
					</Link>
					<button onClick={submitHandler} className='btn-next'>
						<span>Login</span>
						<ArrowIcon />
					</button>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

// export async function getServerSideProps(context) {
// 	const { res, req } = context
// 	return {}
// }

export default LoginEmailPage
