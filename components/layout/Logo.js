import Link from 'next/link'

function Logo({ xs }) {
	return (
		<Link href='/' className='Logo'>
			<h1 className='text-4xl font-bold'>BookHive</h1>
		</Link>
	)
}
export default Logo
