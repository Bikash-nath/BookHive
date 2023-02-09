import Link from 'next/link'

function Footer() {
	const content = {
		Resources: ['Blog', 'Events', 'Support'],
		Team: ['About', 'Developers', 'Contact Us'],
		Company: ['Terms', 'Privacy', 'FAQ'],
	}
	return (
		<footer className='bg-slate-900 w-full'>
			<div className='container mx-auto px-5 pt-12 pb-10'>
				<div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-12 w-full'>
					{Object.keys(content).map((title, i) => (
						<div
							key={i}
							className='flex flex-col items-center justify-center w-full text-md md:text-lg'>
							<div className='mb-2 font-bold text-white capitalize'>{title}</div>
							<div className='flex flex-col items-center justify-around space-y-2'>
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
