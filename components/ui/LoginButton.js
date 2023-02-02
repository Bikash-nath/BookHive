import Link from 'next/link'
import AccountIcon from '../ui/icons/AccountIcon'

export default function LoginButton() {
	return (
		<Link href='/user/login'>
			<button className='flex items-center space-x-2 p-2 bg-gray-600 rounded-full'>
				<AccountIcon dimensions='h-7 w-7' color='white' />
				<div className='text-white font-bold'>Login</div>
			</button>
		</Link>
	)
}
