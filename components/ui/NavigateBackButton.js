import { useRouter } from 'next/router'
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon'

export default function NavigateBackButton({ clickMethod }) {
	const router = useRouter()

	return (
		<div
			className='m-4 cursor-pointer text-white'
			onClick={() => {
				router.back()
				clickMethod && clickMethod()
			}}>
			<ArrowBackIcon dimensions='h-6 w-6' />
		</div>
	)
}
