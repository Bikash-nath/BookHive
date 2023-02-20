import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

function BgCover(props) {
	return (
		<Fragment>
			<div className='flex-grow scrollbar-hide select-none relative'>
				<div className={`bg-gradient-to-b ${props.color} to-black`}>
					<section
						className={`flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around text-white space-y-2 md:space-y-0 space-x-4 md:space-x-6 h-auto md:px-4 pb-4`}>
						{props.children}
					</section>
				</div>
			</div>
		</Fragment>
	)
}

export default BgCover
