import Head from 'next/head'
import { Fragment } from 'react'

import Logo from '../../components/ui/Logo'
import CloseIcon from '../../components/ui/icons/CloseIcon'
import ArrowIcon from '../../components/ui/icons/ArrowIcon'
import Link from 'next/link'

function LoginPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login section' />
			</Head>
			<div className='flex items-center justify-center min-h-screen bg-rose-50'>
				<div className='relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0'>
					<div className='p-6 md:p-20'>
						<Logo />
						<h2 className='font-mono mb-5 text-4xl font-bold'>Log In</h2>
						<p className='max-w-sm my-2 font-sans text-xl font-bold text-white'>
							Thousands of books.
						</p>
						<p className='max-w-sm mb-6 font-sans text-xl font-bold text-white'>
							Free on Bookhive.
						</p>
						<input
							type='text'
							className='w-full p2 lg:p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light'
							placeholder='Enter your email address'
						/>
						<div className='flex items-center justify-between mt-6 space-y-6 md:space-y-0'>
							<Link href='/'>
								<div className='font-thin text-cyan-700'>Skip for now</div>
							</Link>
							<button className='w-full rounded-full md:w-auto flex justify-center items-center p-2 lg:p-4 space-x-4 font-sans font-bold text-white shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
								<span>Next</span>
								<ArrowIcon />
							</button>
						</div>
						<div className='mt-12 border-b border-b-gray-300'></div>
						<p className='py-6 text-sm font-medium text-center text-gray-400'>
							or log in with
						</p>
						<div className='flex flex-col space-x-0 space-y-6 justify-between md:space-x-4 md:space-y-0'>
							<button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
								<img src='images/facebook.png' alt='' className='w-9' />
								<span className='font-thin'>Facebook</span>
							</button>
							<button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'>
								<img src='images/google.png' alt='' className='w-9' />
								<span className='font-thin'>Google</span>
							</button>
						</div>
					</div>

					<img
						src='/images/bookhive.webp'
						alt=''
						className='w-[430px] hidden md:block'
					/>
					<div className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
						<CloseIcon />
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<p>Don't have an account?</p>
					<button className='w-full rounded-full flex justify-center items-center p-2 lg:p-4 space-x-4 font-sans font-bold text-white shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
						<span>Sign up now</span>
					</button>
				</div>
			</div>
		</Fragment>
	)
}

export default LoginPage
