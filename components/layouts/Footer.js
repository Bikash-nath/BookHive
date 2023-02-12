import Link from 'next/link'

function Footer() {
	const content = {
		Resources: ['Blog', 'Events', 'Support'],
		Team: ['About', 'Developers', 'Contact Us'],
		Company: ['Terms', 'Privacy', 'FAQ'],
	}
	return (
		<footer className='bg-zinc-900 w-full pb-20 lg:pb-12'>
			<div className='container bottom-8 mx-auto px-4 pt-12'>
				<div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-12 w-full'>
					{Object.keys(content).map((title, i) => (
						<div
							key={i}
							className='flex flex-col items-center justify-center w-full text-md md:text-lg'>
							<div className='mb-2 font-bold text-white capitalize'>{title}</div>
							<div className='flex flex-col items-center justify-around space-y-2'>
								{content[title].map((term, i) => (
									<Link
										key={i}
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
