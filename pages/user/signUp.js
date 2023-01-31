import Head from 'next/head'
import { Fragment } from 'react'
import TP from '../../components/layouts/TP'

function SignUpPage(props) {
	return (
		<Fragment>
			<Head>
				<title>SignUp</title>
				<meta name='description' content='BookHive SignUp page' />
			</Head>

			<LoginModal />
			<h2 className='font-mono mb-4 text-3xl font-bold'>Log In</h2>
			<input
				type='text'
				className='w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
				placeholder='Enter your name'
			/>
			<input
				type='email'
				className='w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
				placeholder='Enter your email address'
			/>
			<input
				type='number'
				className='w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light bg-gray-900 '
				placeholder='Enter your phone number'
			/>
		</Fragment>
	)
}

export default SignUpPage
