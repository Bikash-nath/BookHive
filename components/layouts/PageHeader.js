import { useState, useEffect } from 'react'

function PageHeader(props) {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	return (
		<>
			{/* {windowWidth < 1024 && ( */}
			<header className='flex flex-grow justify-between items-center'>
				<nav className='mx-auto p-1 w-screen'>
					<div className='flex items-center justify-between text-white'>
						<div className='items-center mx-1 sm:mx-2 w-full font-semibold text-2xl leading-loose'>
							{props.pageTitle}
						</div>

						{props.rightContainer && (
							<div className='flex right-8 justify-end w-full'>
								<div className='flex items-center cursor-pointer rounded-full pr-2'>
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
