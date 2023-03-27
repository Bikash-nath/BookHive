import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import LoginContainer from '../../../components/login/LoginContainer'
import LoginOptions from '../../../components/login/LoginOptions'

function LoginSplashPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login splash page' />
			</Head>
			<LoginContainer splashScreen={true}>
				<h2 className='text-3xl font-bold mb-4 xl:mb-8'>Log In</h2>
				<div className='flex flex-col items-center'>
					<Link href='/user/login' className='w-full'>
						<button className='login-btn'>
							<span>Login with email address</span>
						</button>
					</Link>
				</div>
				<LoginOptions btnLink='/user/signup/splash' btnMsg='Sign up free' accountMsg="Don't have an account?" />
			</LoginContainer>
		</Fragment>
	)
}

export default LoginSplashPage
