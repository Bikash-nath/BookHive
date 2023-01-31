function Footer() {
	return (
		<footer className='bg-darkBlue2 text-white'>
			<div className='container mx-auto pt-12 px-5 pb-10'>
				<div className='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					<div className='flex flex-col items-center w-full md:items-start'>
						<div className='mb-5 font-bold text-white capitalize'>
							Resources
						</div>
						<div className='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								Blog
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								Events
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								Support
							</a>
						</div>
					</div>

					<div className='flex flex-col items-center w-full md:items-start'>
						<div className='mb-5 font-bold text-white capitalize'>Our Team</div>
						<div className='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								About
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								Developers
							</a>
							<a
								href='#'
								className='capitalize text-grayishViolet hover:text-softRed'>
								Contact Us
							</a>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center w-full md:items-start'>
					<div className='mb-5 font-bold text-white capitalize'>Company</div>
					<div className='flex flex-col items-center space-y-3 md:items-start'>
						<a
							href='#'
							className='capitalize text-grayishViolet hover:text-softRed'>
							Terms
						</a>
						<a
							href='#'
							className='capitalize text-grayishViolet hover:text-softRed'>
							Privacy
						</a>
						<a
							href='#'
							className='capitalize text-grayishViolet hover:text-softRed'>
							FAQ
						</a>
					</div>
				</div>

				<div className='flex justify-center pb-10 space-x-3'>
					<div>
						<a href='#'>
							<img
								src='images/twitter.svg'
								alt='twitter'
								className='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
					<div>
						<a href='#'>
							<img
								src='images/instagram.svg'
								alt='instagram'
								className='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
					<div>
						<a href='#'>
							<img
								src='images/facebook.svg'
								alt='facebook'
								className='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
