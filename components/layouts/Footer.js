import Link from 'next/link'

function Footer() {
	const content = {
		Resources: ['Blog', 'Events', 'Support'],
		Team: ['About', 'Developers', 'Contact Us'],
		Company: ['Terms', 'Privacy', 'FAQ'],
	}
	return (
		<footer className='absolute bottom-0 bg-slate-900'>
			<div className='container mx-auto pt-12 px-5 pb-10'>
				<div className='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					{Object.keys(content).map((title) => (
						<div className='flex flex-col items-center w-full md:items-start'>
							<div className='mb-5 font-bold text-white capitalize'>
								{title}
							</div>
							<div className='flex flex-col items-center space-y-3 md:items-start'>
								{content[title].map((term) => (
									<Link
										href={term.toLowerCase()}
										className='capitalize text-gray-300 hover:text-purple-600'>
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
