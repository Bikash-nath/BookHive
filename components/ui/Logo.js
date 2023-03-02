import Link from 'next/link'
import Image from 'next/image'

function Logo({ size }) {
	return (
		<Link href='/'>
			<div className='flex p-1'>
				<img src='/images/logo.png' alt='BookHive' className='w-10 h-10' />
				{/* <Image
					src='/images/logo.png'
					alt='BookHive'
					className='inline lg:p-[.1rem]'
					width={size}
					height={size}
				/> */}
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-xl lg:text-2xl inline text-white px-1 font-medium'>
						BookHive
					</h1>
				</div>
			</div>
		</Link>
	)
}
export default Logo
