import Head from 'next/head'
import { useState, Fragment } from 'react'
import Link from 'next/link'

// import { getUserProfile } from '../../../api/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function SetupPasswordPage(props) {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	return (
		<Fragment>
			<Head>
				<title>SignUp</title>
				<meta name='description' content='BookHive SignUp password page' />
			</Head>
			<LoginContainer>
				<h2 className='font-mono mb-4 text-3xl font-bold'>Set up password</h2>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter your password'
					type='password'
					className='input-field mb-4'
				/>
				<input
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder='Confirm your password'
					type='password'
					className='input-field mb-4'
				/>
				<div className='flex items-center justify-end my-3 md:my-6'>
					<Link href='/'>
						<button className='rounded-full w-auto flex justify-center items-center p-2 px-3 space-x-4 font-sans font-bold shadow-md bg-purple-800 shadow-purple-200 hover:bg-opacity-90 hover:shadow-lg border transition hover:translate-y-0.5 duration-150'>
							<span>Create account</span>
							<ArrowIcon />
						</button>
					</Link>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default SetupPasswordPage
