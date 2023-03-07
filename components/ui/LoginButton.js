import { useRouter } from 'next/router'
import AccountIcon from '../../assets/icons/AccountIcon'

export default function LoginButton() {
	const router = useRouter()

	return (
		<button
			className='flex items-center space-x-1 md:space-x-2 p-1 xl:p-[.4rem] bg-gray-800 rounded-full'
			onClick={() => router.replace('/user/login/splash')}>
			<AccountIcon dimensions='h-7 w-7' color='white' />
			<div className='text-white font-bold p-[.15rem] pr-2 xl:p-1 xl:pr-[.3rem]'>Login</div>
		</button>
	)
}
