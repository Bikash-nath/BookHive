import Link from 'next/link'
import Image from 'next/image'

function Logo({ xs }) {
	return (
		<Link href='/' className='Logo'>
			<Image src='/audiobook.png' alt='BookHive' height={40} width={40} />
			<span>
				<h1 className='text-4xl font-bold'>BookHive</h1>
			</span>
		</Link>
	)
}
export default Logo
