import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'

export default function NavigateBackButtton({ rightIcon, clickMethod, isHeader }) {
	const router = useRouter()
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	const backBtn = (
		<button
			className={
				'rounded-full py-[0.1rem] pr-[0.2rem] text-gray-300 hover:text-white bg-gray-900 bg-opacity-50 z-10'
			}
			onClick={() => {
				router.back()
				clickMethod && clickMethod()
			}}>
			<ChevronLeftIcon dimensions='h-6 w-6' />
		</button>
	)

	return isHeader && windowWidth > 1024 ? (
		backBtn
	) : !isHeader && windowWidth < 1024 ? (
		<div className='absolute flex flex-grow lg:hidden w-full items-center justify-between bg-transparent p-2'>
			{backBtn}
			{rightIcon}
		</div>
	) : (
		<></>
	)
}
