import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import LoginModal from '../../components/modals/LoginModal'
import ArrowIcon from '../../components/ui/icons/ArrowIcon'

function LoginPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login section' />
			</Head>

			<LoginModal
				btnLink='/user/signup'
				btnMsg='Sign up now'
				accountMsg="Don't have an account?">
				<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
				<input
					type='email'
					className='w-full my-2 p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
					placeholder='Enter your email address'
				/>
				<input
					type='password'
					className='w-full my-2 p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
					placeholder='Enter your password'
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
				<div className='my-4 border-b border-b-gray-500'></div>
				<p className='my-4 text-sm font-medium text-center text-gray-400'>
					or log in with
				</p>
			</LoginModal>
		</Fragment>
	)
}

export default LoginPage
