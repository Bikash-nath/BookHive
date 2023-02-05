import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import LoginContainer from '../../../components/login/LoginContainer'
import LoginOptions from '../../../components/login/LoginOptions'

function LoginPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login section' />
			</Head>
			<LoginContainer>
				<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
				<div className='flex flex-col items-center my-6'>
					<Link href={props.btnLink} className='w-full'>
						<button className='w-full rounded-full flex justify-center max-sm: items-center p-2 lg:p-4 space-x-4 font-sans font-bold shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
							<span>Sign up with email address</span>
						</button>
					</Link>
				</div>
				<div className='flex flex-col items-center my-6'>
					<Link href={props.btnLink} className='w-full'>
						<button className='w-full rounded-full flex justify-center max-sm: items-center p-2 lg:p-4 space-x-4 font-sans font-bold shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
							<span>Sign up with phone number</span>
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

export default LoginPage
