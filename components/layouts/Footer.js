import Link from 'next/link'

function Footer() {
	const content = {
		Resources: ['Blog', 'Events', 'Support'],
		Team: ['About', 'Developers', 'Contact Us'],
		Company: ['Terms', 'Privacy', 'FAQ'],
	}
	return (
		<footer className='absolute left-0 right-0 bottom-0 bg-slate-900 w-full h-full'>
			<div className='container mx-auto px-5 pt-12 pb-10'>
				<div className='flex flex-col justify-between space-x-12 md:flex-row md:space-y-0 w-full'>
					{Object.keys(content).map((title) => (
						<div className='flex flex-col items-center w-full md:items-start text-md md:text-lg'>
							<div className='mb-5 font-bold text-white capitalize'>{title}</div>
							<div className='flex flex-col items-center space-y-3 md:items-start'>
								{content[title].map((term) => (
									<Link
										href={term.toLowerCase()}
										className='capitalize text-center text-gray-300 hover:font-semibold hover:text-purple-600'>
										{term}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
