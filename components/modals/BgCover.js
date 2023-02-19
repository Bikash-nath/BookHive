import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

function BgCover(props) {
	return (
		<Fragment>
			{console.log(props.color)}
			{props.color ? (
				<div className='flex-grow scrollbar-hide select-none relative'>
					<div className={`bg-gradient-to-b ${props.color} to-black`}>
						<section
							className={`flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around text-white space-y-2 md:space-y-0 space-x-6 md:space-x-10 h-auto md:px-4 pb-4`}>
							{props.children}
						</section>
					</div>
					{console.log('return dom:--', props.color)}
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
// 			props.color: 'from-red-500',
// 		},
// 	}
// }

export default BgCover

/*
<div className='flex items-center justify-center md:justify-between w-full mb-20'>
	<section
		className={`flex items-end space-x-7 bg-gradient-to-b to-black ${props.color} h-80 text-white pl-5 pb-5 border-[.5px]`}>
		{props.children}
	</section>
</div>
*/
