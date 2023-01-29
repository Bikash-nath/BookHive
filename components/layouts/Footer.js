function Footer() {
	return (
		<footer class='bg-darkBlue2 text-white'>
			<div class='container mx-auto pt-12 px-5 pb-10'>
				<div class='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					<div class='flex flex-col items-center w-full md:items-start'>
						<div class='mb-5 font-bold text-white capitalize'>Resources</div>
						<div class='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								Blog
							</a>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								Events
							</a>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								Support
							</a>
						</div>
					</div>

					<div class='flex flex-col items-center w-full md:items-start'>
						<div class='mb-5 font-bold text-white capitalize'>Our Team</div>
						<div class='flex flex-col items-center space-y-3 md:items-start'>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								About
							</a>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								Developers
							</a>
							<a
								href='#'
								class='capitalize text-grayishViolet hover:text-softRed'>
								Contact Us
							</a>
						</div>
					</div>
				</div>

				<div class='flex flex-col items-center w-full md:items-start'>
					<div class='mb-5 font-bold text-white capitalize'>Company</div>
					<div class='flex flex-col items-center space-y-3 md:items-start'>
						<a
							href='#'
							class='capitalize text-grayishViolet hover:text-softRed'>
							Terms
						</a>
						<a
							href='#'
							class='capitalize text-grayishViolet hover:text-softRed'>
							Privacy
						</a>
						<a
							href='#'
							class='capitalize text-grayishViolet hover:text-softRed'>
							FAQ
						</a>
					</div>
				</div>

				<div class='flex justify-center pb-10 space-x-3'>
					<div>
						<a href='#'>
							<img
								src='images/twitter.svg'
								alt='twitter'
								class='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
					<div>
						<a href='#'>
							<img
								src='images/instagram.svg'
								alt='instagram'
								class='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
					<div>
						<a href='#'>
							<img
								src='images/facebook.svg'
								alt='facebook'
								class='p-2 bg-darkBlue rounded-full ficon'
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
