import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'

export default function NavigateBackButton() {
	const [history, setHistory] = useState(null)
	const router = useRouter()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHistory(window.history)
		}
	}, [])

	return (
		<div className='flex gap-4'>
			<button
				onClick={() => {
					router.back()
					clickMethod && clickMethod()
				}}
				className={
					'rounded-full py-[0.1rem] pr-[0.2rem] text-gray-300 hover:text-white bg-gray-800'
				}>
				<ChevronLeftIcon dimensions='h-6 w-6' />
			</button>
			<button
				className='rounded-full py-[0.1rem] pl-[0.2rem] text-gray-300 hover:text-white bg-gray-800'
				onClick={(e) => {
					e.preventDefault()
					history && history.forward()
				}}>
				<ChevronRightIcon dimensions='h-6 w-6' />
			</button>
		</div>
	)
}
