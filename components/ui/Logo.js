import Link from 'next/link'
import Image from 'next/image'

function Logo({ size }) {
	return (
		<Link href='/'>
			<Image
				src='/images/audiobook.png'
				alt='BookHive'
				className='inline'
				height={size}
				width={size}
			/>
			<p className='text-3xl hidden lg:inline text-white px-1 font-semibold'>
				BookHive
			</p>
		</Link>
	)
}
export default Logo
