import { Fragment } from 'react'
import Link from 'next/link'

import Logo from '../../components/ui/Logo'
import CloseIcon from '../../components/ui/icons/CloseIcon'

function LoginModal(props) {
	return (
		<div className='flex items-center justify-center bg-black text-white p-4'>
			<div className='relative flex flex-col rounded-2xl md:flex-row md:space-y-0 py-1 md:m-0 md:h-screen md:flex justify-center items-center'>
				<div className='px-4 md:p-4 w-screen md:w-1/2'>
					<div className='md:flex md:items-center justify-center'>
						<Link href='/'>
							<Logo
								className='absolute top-0 left-0 md:static w-full'
								size={50}
							/>
						</Link>
					</div>
					<div className='flex flex-col items-center mb-8 relative'>
						<div className='flex md:hidden justify-center items-center -mt-10'>
							<div className='item-gradient'></div>
							<img
								src='/images/bookhive.webp'
								alt='Bookhive'
								className=' w-8/12'
							/>
						</div>
						<div className='absolute bottom-0 md:static'>
							<p className='max-w-md mt-2 font-sans text-xl	font-bold'>
								Thousands of books.
							</p>
							<p className='max-w-md font-sans text-xl font-bold'>
								Free on Bookhive.
							</p>
						</div>
					</div>
					{props.children}
					<div className='flex space-x-4 justify-between'>
						<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
							<img
								src='/images/facebook.png'
								alt='Facebook login'
								className='w-7'
							/>
							<span className='font-thin'>Facebook</span>
						</button>
						<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
							<img
								src='/images/google.png'
								alt='Google login'
								className='w-7'
							/>
							<span className='font-thin'>Google</span>
						</button>
					</div>
					<div className='flex flex-col items-center my-6'>
						<p className='text-bold text-lg my-2'>{props.accountMsg}</p>
						<Link href={props.btnLink} className='w-full'>
							<button className='w-full rounded-full flex justify-center max-sm: items-center p-2 lg:p-4 space-x-4 font-sans font-bold shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
								<span>{props.btnMsg}</span>
							</button>
						</Link>
					</div>
					<Link href='/'>
						<div className='font-normal underline underline-offset-4 text-gray-400 text-center my-1'>
							Skip for now
						</div>
					</Link>
				</div>
				<div className='hidden md:w-1/2 md:h-screen md:flex justify-center items-center'>
					<img src='/images/bookhive.webp' alt='' className='w-full' />
				</div>
				<div className='group absolute top-3 right-4 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
					<CloseIcon />
				</div>
			</div>
		</div>
	)
}

export default LoginModal
