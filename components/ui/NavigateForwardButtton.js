import { useState, useEffect } from 'react'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

export default function NavigateBackButtton() {
	const [history, setHistory] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHistory(window.history)
		}
	}, [])

	return (
		<button
			className='rounded-full py-[0.1rem] pl-[0.2rem] text-gray-300 hover:text-white bg-gray-800'
			onClick={(e) => {
				e.preventDefault()
				history && history.forward()
			}}>
			<ChevronRightIcon dimensions='h-6 w-6' />
		</button>
	)
}
