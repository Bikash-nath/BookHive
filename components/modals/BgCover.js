import { useState, useEffect } from 'react'
import { colors } from '../../utils/constants/bgColors'

function BgCover(props) {
	const [color, setColor] = useState(null)

	useEffect(() => {
		if (!color) {
			const bgColor = colors[Math.floor(Math.random() * colors.length)]
			setColor(bgColor)
			console.warn('bgColor', bgColor)
		}
		console.error('useEffect color', color)
	}, [color]) //router.pathname

	return (
		<div className='flex-grow scrollbar-hide select-none relative'>
			{console.log('return', color)}
			<div className={`bg-gradient-to-b to-black ${color}`}>
				<section
					className={`flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around z-40 text-white space-x-6 space-y-4 md:space-x-10 h-auto md:px-4 pb-4`}>
					{props.children}
				</section>
			</div>
		</div>
	)
}

// export async function getServerSideProps(context) {
// 	console.log(context.params)
// 	return {
// 		props: {
// 			color: 'from-red-500',
// 		},
// 	}
// }

export default BgCover

/*
<div className='flex items-center justify-center md:justify-between w-full mb-20'>
	<section
		className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
		{props.children}
	</section>
</div>
*/
