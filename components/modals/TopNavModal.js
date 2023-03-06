import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavigateBackButton from '../ui/NavigateBackButton'

export default function TopNavModal({ rightIcon, color }) {
	// const [windowWidth, setWindowWidth] = useState(null)

	return (
		<div
			className={
				`fixed top-0 flex flex-grow xl:hidden w-full items-center justify-between bg-opacity-30 px-1 sm:px-2 z-20 ` +
				(color ? `bg-${color.split('from-')[1]}` : `bg-[#030b17]`)
			}>
			<div className='bg-opacity-50'>
				<NavigateBackButton />
			</div>
			<div className='m-2'>{rightIcon}</div>
		</div>
	)
}
