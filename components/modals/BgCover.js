import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

function BgCover(props) {
	return (
		<Fragment>
			<div className='flex-grow scrollbar-hide select-none'>
				<div className={`bg-gradient-to-b ${props.color} to-[#121212]`}>
					<section
						className={`flex flex-col lg:flex-row items-center justify-center relative text-white space-y-2 lg:space-x-4 h-auto md:px-4 pb-2 lg:pb-4`}>
						{props.children}
					</section>
				</div>
			</div>
		</Fragment>
	)
}

export default BgCover
