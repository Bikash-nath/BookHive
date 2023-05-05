import { useState, useEffect, Fragment } from 'react'

function BgCover(props) {
	return (
		<Fragment>
			<div className='flex-grow scrollbar-hide'>
				<div className={`bg-gradient-to-b from-${props.color}-700 to-[#0d1117]`} ref={props.coverRef}>
					<section
						className={`flex flex-col xl:flex-row items-center justify-center relative mx-auto max-w-5xl text-white space-y-2 xl:space-x-4 h-auto p-2 md:p-3 xl:pb-4`}>
						{props.children}
					</section>
				</div>
			</div>
		</Fragment>
	)
}

export default BgCover
