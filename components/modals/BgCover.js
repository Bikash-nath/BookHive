import { useState, useEffect } from 'react'
import { colors } from '../../utils/constants/bgColors'

function BgCover(props) {
	const [color, setColor] = useState(null)

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])
	}, [])

	return (
		/*w-screen*/
		<div className='flex items-center justify-center md:justify-between w-full mb-20'>
			<section
				className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
				{props.children}
			</section>
		</div>
	)
}

export default BgCover
