import Link from 'next/link'

function LoginModal(props) {
	return (
		<>
			<div className='py-4 border-b border-b-gray-500'></div>
			<p className='my-4 text-sm font-medium text-center text-gray-400'>or continue with</p>
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
			<div className='flex flex-col items-center my-6'>
				<p className='text-bold text-lg my-2'>{props.accountMsg}</p>
				<Link href={props.btnLink} className='w-full'>
					<button className='w-full rounded-full flex justify-center max-sm: items-center p-2 lg:p-4 space-x-4 font-sans font-bold shadow-sm px-9 hover:bg-opacity-90 border-purple-500 border-2 shadow-purple-200 transition hover:-translate-y-0.5 duration-150'>
						<span>{props.btnMsg}</span>
					</button>
				</Link>
			</div>
		</>
	)
}

export default LoginModal

/*
<Link href='/'>
	<div className='font-normal underline underline-offset-4 text-gray-400 text-center py-1'>
		Skip for now
	</div>
</Link>*/
