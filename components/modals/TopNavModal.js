import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'

export default function TopNavModal({ rightIcon, isHeader }) {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	return windowWidth < 1024 ? (
		<div className='flex flex-grow lg:hidden w-full items-center justify-between bg-transparent p-3 sm:p-4'>
			<div className='bg-opacity-25 z-10'>
				<NavigateBackButton />
			</div>
			{rightIcon}
		</div>
	) : (
		<></>
	)
}
