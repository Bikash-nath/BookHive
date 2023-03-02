import Link from 'next/link'
import AccountIcon from '../../assets/icons/AccountIcon'

export default function LoginButton() {
	return (
		<Link href='/user/login/splash'>
			<button className='flex items-center space-x-1 md:space-x-2 p-1 lg:p-2 bg-gray-600 rounded-full'>
				<AccountIcon dimensions='h-7 w-7' color='white' />
				<div className='text-white font-bold mx-0 pr-[.15rem] lg:pr-1'>Login</div>
			</button>
		</Link>
	)
}
