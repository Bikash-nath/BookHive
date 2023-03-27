import { useState, useEffect, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import { login } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ButtonSpinner from '../../../components/widgets/ButtonSpinner'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import EyeSlashIcon from '../../../assets/icons/EyeSlashIcon'

function LoginEmailPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [loading, setLoading] = useState(false)

	const userCtx = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		setLoading(true)
		const user = await login(email, password)
		if (user.data) {
			userCtx.addUser(user)
			snackbarCtx.addMessage({ title: 'Log in successfull', status: 'success' })
		} else {
			snackbarCtx.addMessage({ title: user })
		}
		setLoading(false)
	}

	useEffect(() => {
		if (userCtx.user?.data) router.push('/')
	}, [userCtx.user, router])

	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login page' />
			</Head>
			{/* {loading && <LoadingSpinner />} */}
			{/* {error && <ErrorAlert variant='danger'>{error}</ErrorAlert>} */}
			<LoginContainer>
				<h2 className='font-bold text-2xl xl:text-3xl mb-4 xl:mb-8'>Log In</h2>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					placeholder='Enter email address or phone'
					type='email'
					className='input-field my-4'
				/>
				<div className='relative my-4'>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Enter your password'
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
				<div className='flex items-center justify-between my-3 md:my-6'>
					<Link href='/user/forgotPassword'>
						<div className='font-medium text-purple-400'>Forgot password ?</div>
					</Link>
					<button
						onClick={submitHandler}
						className={email && password?.length > 8 ? 'btn-next' : 'btn-next-inactive'}>
						{loading ? <ButtonSpinner /> : <span>Login</span>}
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
