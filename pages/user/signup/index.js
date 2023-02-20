import { useContext, useState, useEffect, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import { signup } from '../../../api/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function SignUpPage(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const userCtx = useContext(UserContext)
	const activeUser = userCtx.user
	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		if (password === passwordConfirm) {
			const user = await signup(name, email, password, passwordConfirm)
			userCtx.addUser(user)
		}
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
				<h2 className='font-mono mb-8 text-3xl font-bold'>Sign Up</h2>
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
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter your password'
					type='password'
					className='input-field mb-4'
				/>
				<input
					value={passwordConfirm}
					onChange={(e) => setPasswordConfirm(e.target.value)}
					placeholder='Confirm your password'
					type='password'
					className='input-field mb-4'
				/>
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
