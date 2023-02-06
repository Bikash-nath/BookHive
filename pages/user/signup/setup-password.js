import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link'

import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'
import InputField from '../../../components/ui/InputField'

function SetupPasswordPage(props) {
	return (
		<Fragment>
			<Head>
				<title>SignUp</title>
				<meta name='description' content='BookHive SignUp password page' />
			</Head>
			<LoginContainer>
				<h2 className='font-mono mb-4 text-3xl font-bold'>Set up password</h2>
				<InputField
					inputType='password'
					placeholderText='Enter your password'
				/>
				<InputField
					inputType='password'
					placeholderText='Confirm your password'
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
