import { useState, useEffect } from 'react'
import NavigateBackButton from '../ui/NavigateBackButton'

function PageHeader(props) {
	return (
		<>
			<header className='flex flex-grow justify-between items-center'>
				<nav className='mx-auto p-1 w-screen'>
					<div className='flex items-center justify-between m-1 sm:m-2 xl:m-6 text-white'>
						{props.backBtn && (
							<div className='mr-3 block xl:hidden'>
								<NavigateBackButton />
							</div>
						)}
						<div className='items-center text-2xl xl:text-3xl font-semibold w-full mx-1 sm:mx-2 leading-loose'>
							{props.pageTitle}
						</div>

						{props.rightContainer && (
							<div className='flex right-8 justify-end w-full'>
								<div className='flex items-center cursor-pointer rounded-full pr-2 xl:pr-4'>
									{props.rightContainer}
								</div>
							</div>
						)}
					</div>
				</nav>
			</header>
			{/* )} */}
		</>
	)
}

export default PageHeader
