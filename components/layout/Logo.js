import Link from 'next/link'

function Logo({ xs }) {
	return (
		<Link className='link' to='/home'>
			<span className=''>
				<h1 className=''>BookHive</h1>
			</span>
		</Link>
	)
}
export default Logo
