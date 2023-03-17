import { useState, useEffect } from 'react'
import NavigateBackButton from '../ui/NavigateBackButton'

function PageHeader(props) {
	return (
		<header className='flex flex-grow justify-between items-center'>
			<nav className='mx-auto px-1 w-screen'>
				<div className='flex items-center justify-between gap-3 md:gap-4 m-1 sm:m-2 xl:m-4 text-white'>
					{props.backBtn && (
						<div className='block xl:hidden'>
							<NavigateBackButton />
						</div>
					)}
					<div className='items-center text-2xl xl:text-3xl font-semibold w-full mx-2 leading-loose'>
						{props.pageTitle}
					</div>

					{props.rightContainer && (
						<div className='flex justify-end w-full'>
							<div className='flex items-center cursor-pointer rounded-full pr-2 xl:pr-4'>
								{props.rightContainer}
							</div>
						</div>
					)}
				</div>
			</nav>
		</header>
	)
}

export default PageHeader
