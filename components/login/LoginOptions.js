import Link from 'next/link'

function LoginOptions(props) {
	return (
		<div className='w-full'>
			<div className='flex items-center my-6 xl:my-8 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200'>
				<p className='mx-4 mb-0 text-center font-medium text-sm text-gray-400'>or continue with</p>
			</div>
			<div className='flex space-x-4 justify-between'>
				<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
					<img src='/images/google.png' alt='Google login' className='w-7' />
					<span className='font-thin'>Google</span>
				</button>
				<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
					<img src='/images/facebook.png' alt='Facebook login' className='w-7' />
					<span className='font-thin'>Facebook</span>
				</button>
			</div>
			<div className='flex flex-col items-center justify-between my-6 xl:my-8 gap-2 xl:gap-4'>
				<p className='text-bold text-lg'>{props.accountMsg}</p>
				<Link href={props.btnLink} className='w-full'>
					<button className='login-btn'>
						<span>{props.btnMsg}</span>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default LoginOptions

/*
<Link href='/'>
	<div className='font-normal underline underline-offset-4 text-gray-400 text-center py-1'>
		Skip for now
	</div>
</Link>

<div className='flex items-center relative my-6 xl:my-8'>
	<hr className='border-t-[0.1px] w-full border-gray-600' />
	<p className='flex justify-center w-full font-medium text-sm text-gray-400 -mt-1'>or continue with</p>
	<hr className='border-t-[0.1px] w-full border-gray-600' />
</div>
*/
