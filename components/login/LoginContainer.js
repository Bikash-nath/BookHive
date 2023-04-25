import Link from 'next/link'

import Logo from '../ui/Logo'
import CrossIcon from '../../assets/icons/CrossIcon'

function LoginContainer(props) {
	return (
		<div className='flex items-start justify-center w-screen xl:w-[99vw] bg-[#0C111B] text-white'>
			<div className='relative flex flex-col w-full justify-center items-center rounded-2xl '>
				<div className='flex flex-col justify-center w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-[30%] min-h-screen px-4 md:px-8'>
					<div className={'md:flex md:items-center justify-center ' + props.splashScreen ? 'py-8' : ''}>
						<Logo className='absolute top-0 left-0 md:static w-full' size={50} />
					</div>
					{props.splashScreen && (
						<div className='flex flex-col items-center mb-8 relative'>
							<div className='flex justify-center items-center -mt-10'>
								<div className='image-gradient'></div>
								<img src='/images/bookhive.webp' alt='Bookhive' className='w-9/12' />
							</div>
							<div className='absolute bottom-0'>
								<p className='max-w-md mt-2 text-xl	font-bold'>Thousands of books.</p>
								<p className='max-w-md text-xl font-bold'>Free on Bookhive.</p>
							</div>
						</div>
					)}
					{props.children}
				</div>
				<Link href='/'>
					<div className='group absolute top-3 right-4 xl:top-8 xl:right-8 p-1 flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
						<CrossIcon />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default LoginContainer
