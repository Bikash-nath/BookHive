import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link'

import { signup } from '../../../API/userProfile'
import LoginContainer from '../../../components/login/LoginContainer'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function SignUpPage(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		signup(email, password)
	}

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
				<div className='flex items-center justify-end my-3 md:my-6'>
					<Link href='setup-password'>
						<button
							onSubmit={submitHandler}
							className='rounded-full w-auto flex justify-center items-center p-2 px-3 space-x-4 font-sans font-bold shadow-md bg-purple-800 shadow-purple-200 hover:bg-opacity-90 hover:shadow-lg border transition hover:translate-y-0.5 duration-150'>
							<span>Next</span>
							<ArrowIcon />
						</button>
					</Link>
				</div>
			</LoginContainer>
		</Fragment>
	)
}

export default SignUpPage
