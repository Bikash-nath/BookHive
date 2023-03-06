import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import LoginContainer from '../../../components/login/LoginContainer'
import LoginOptions from '../../../components/login/LoginOptions'

function SignUpSplashPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login section' />
			</Head>
			<LoginContainer splashScreen={true}>
				<h2 className='mb-4 text-3xl font-bold'>Sign Up</h2>
				<div className='flex flex-col items-center my-6'>
					<Link href='/user/signup' className='w-full'>
						<button className='login-btn'>
							<span>Sign up with email address</span>
						</button>
					</Link>
				</div>
				<LoginOptions
					btnLink='/user/login/splash'
					btnMsg='Login'
					accountMsg='Already have an account?'
				/>
			</LoginContainer>
		</Fragment>
	)
}

export default SignUpSplashPage
