import Logo from '../ui/Logo'
import CloseIcon from '../../assets/icons/CloseIcon'

function LoginContainer(props) {
	return (
		<div className='flex items-start justify-center h-screen bg-black text-white p-0 m-0'>
			<div className='relative flex flex-col md:flex-row md:space-y-0 m-0 h-full md:h-screen md:flex justify-center items-center bg-[#121212] rounded-2xl '>
				<div className='px-4 md:p-4 w-screen md:w-1/2'>
					<div className='md:flex md:items-center justify-center'>
						<Logo className='absolute top-0 left-0 md:static w-full' size={50} />
					</div>
					<div className='flex flex-col items-center mb-8 relative'>
						<div className='flex md:hidden justify-center items-center -mt-10'>
							<div className='item-gradient'></div>
							<img src='/images/bookhive.webp' alt='Bookhive' className='w-9/12' />
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
				</div>
				<div className='hidden md:w-1/2 md:h-full md:flex justify-center items-center'>
					<img src='/images/bookhive.webp' alt='' className='w-full' />
				</div>
				<div className='group absolute top-3 right-4 md:top-8 md:right-8 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
					<CloseIcon />
				</div>
			</div>
		</div>
	)
}

export default LoginContainer
