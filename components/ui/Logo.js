import Link from 'next/link'
import Image from 'next/image'

function Logo({ xs }) {
	return (
		<Link href='/'>
			<Image
				src='/images/audiobook.png'
				alt='BookHive'
				className='inline'
				height={50}
				width={50}
			/>
			<p className='text-2xl lg:text-xl hidden lg:inline text-white px-1 font-semibold'>
				BookHive
			</p>
		</Link>
	)
}
export default Logo
