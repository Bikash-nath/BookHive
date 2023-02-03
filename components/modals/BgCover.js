import { useState, useEffect } from 'react'
import { colors } from '../../constants/bgColors'

function BgCover(props) {
	const [color, setColor] = useState(null)

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])
	}, [])

	return (
		<div className='flex items-center justify-center md:justify-between w-screen mb-20'>
			<section
				className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
				{props.children}
			</section>
		</div>
	)
}

export default BgCover
