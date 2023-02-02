import { useState, useEffect } from 'react'

const colors = [
	'from-indigo-500',
	'from-blue-500',
	'from-green-500',
	'from-red-500',
	'from-yellow-500',
	'from-pink-500',
	'from-purple-500',
]

function BgCover() {
	const [color, setColor] = useState(null)

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])
	}, [])

	return (
		<div className='flex justify-center w-full mb-20 md:justify-between'>
			<section
				className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
				{props.children}
			</section>
		</div>
	)
}

export default BgCover
