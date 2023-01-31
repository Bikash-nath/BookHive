import Head from 'next/head'
import { Fragment } from 'react'

import Logo from '../../components/ui/Logo'
import CloseIcon from '../../components/ui/icons/CloseIcon'
import ArrowIcon from '../../components/ui/icons/ArrowIcon'
import Link from 'next/link'
import LoginModal from '../../components/layouts/LoginModal'

function LoginPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login section' />
			</Head>

			<LoginModal>
				<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
				<input
					type='email'
					className='w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
					placeholder='Enter your email address'
				/>
				<input
					type='password'
					className='w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
					placeholder='Enter your password'
				/>
			</LoginModal>
		</Fragment>
	)
}

export default LoginPage
