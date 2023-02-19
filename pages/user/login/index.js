import { useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useContext } from 'react'
import UserContext from '../../../store/userContext'
import { login } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import ErrorAlert from '../../../components/widgets/ErrorAlert'
import LoadingSpinner from '../../../components/widgets/LoadingSpinner'

function LoginEmailPage(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const userCtx = useContext(UserContext)
	const activeUser = userCtx.user
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		const user = await login(email, password)
		userCtx.addUser(user)
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
				<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Enter email address or phone'
					type='email'
					className='input-field mb-4'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter your password'
					type='password'
					className='input-field mb-4'
				/>
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
