import Link from 'next/link'
import Image from 'next/image'

function Logo({ xs }) {
	return (
		<Link href='/'>
			<Image
				src='/images/audiobook.png'
				alt='BookHive'
				className='inline'
				height={60}
				width={60}
			/>
			<p className='text-3xl hidden lg:inline text-white px-2 font-semibold'>
				BookHive
			</p>
		</Link>
	)
}
export default Logo
