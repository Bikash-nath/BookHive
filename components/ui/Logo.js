import Link from 'next/link'
import Image from 'next/image'

function Logo({ size }) {
	return (
		<div className='lg:p-2'>
			<Image
				src='/images/logo.png'
				alt='BookHive'
				className='inline p-[.1rem'
				height={size}
				width={size}
			/>
			<p className='text-2xl lg:text-[1.6rem] hidden lg:inline text-white px-1 font-semibold'>
				BookHive
			</p>
		</div>
	)
}
export default Logo
