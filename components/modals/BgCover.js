import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

const colors = [
	'from-red-500',
	'from-orange-500',
	'from-yellow-500',
	'from-green-500',
	'from-cyan-500',
	'from-blue-500',
	'from-indigo-500',
	'from-violet-500',
	'from-purple-500',
	'from-pink-500',
]

function BgCover(props) {
	const [color, setColor] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const id = router.query.bookId
		const index = id.slice(-1) //extract index from bookId
		const bgColor = colors[index]
		setColor(bgColor)
	}, [])

	return (
		<Fragment>
			{color ? (
				<div className='flex-grow scrollbar-hide select-none relative'>
					<div className={`bg-gradient-to-b ${color} to-black`}>
						<section
							className={`flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around text-white space-y-2 md:space-y-0 space-x-6 md:space-x-10 h-auto md:px-4 pb-4`}>
							{props.children}
						</section>
					</div>
					{console.log('return dom:--', color)}
				</div>
			) : (
				<p className='text-2xl'>Loading..</p>
			)}
		</Fragment>
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
