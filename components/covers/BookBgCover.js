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

function BgCover({ name }) {
	const [color, setColor] = useState(null)

	useEffect(() => {
		setColor(colors[Math.floor(Math.random() * colors.length)])
	}, [])

	return (
		<section
			className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
			<img
				className='h-44 w-44 shadow-2xl'
				src={playlist?.images?.[0]?.url}
				alt='album image'
			/>
			<div>
				<p>{name}</p>
				<h1 className='text-2xl md:text-3xl xl:text-5xl'>{name}</h1>
			</div>
		</section>
	)
}

export default BgCover
