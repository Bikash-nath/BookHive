import { useState, useEffect } from 'react'
import { colors } from '../../utils/constants/bgColors'

function BgCover(props) {
	const [color, setColor] = useState(colors[0])

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])
	}, [])

	return (
		<div className='flex-grow h-screen overflow-y-scroll scrollbar-hide select-none relative'>
			<section
				className={`flex flex-col md:flex-row items-end justify-between md:justify-start bg-gradient-to-b ${color} to-black space-x-7 h-80 text-white md:pl-5 pb-5 border-[.5px]`}>
				{props.children}
			</section>
		</div>
	)
}

export default BgCover

/*
<div className='flex items-center justify-center md:justify-between w-full mb-20'>
	<section
		className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
		{props.children}
	</section>
</div>
*/
