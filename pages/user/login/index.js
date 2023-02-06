import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import LoginContainer from '../../../components/login/LoginContainer'
import InputField from '../../../components/ui/InputField'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function LoginEmailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login page' />
			</Head>
			<LoginContainer>
				<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
				<InputField
					inputType='email'
					placeholderText='Enter email address or phone'
					margin='mb-4'
				/>
				<InputField
					inputType='password'
					placeholderText='Enter your password'
					margin='mb-4'
				/>
				<div className='flex items-center justify-between my-3 md:my-6'>
					<Link href='/user/forgotPassword'>
						<div className='font-semibold text-purple-400'>
							Forgot password ?
						</div>
					</Link>
					<button className='rounded-full w-auto flex justify-center items-center p-2 px-3 space-x-4 font-sans font-bold shadow-md bg-purple-800 shadow-purple-200 hover:bg-opacity-90 hover:shadow-lg border transition hover:translate-y-0.5 duration-150'>
						<span>Login</span>
						<ArrowIcon />
					</button>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default LoginEmailPage
