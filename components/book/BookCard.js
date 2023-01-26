import { Fragment } from 'react'
import Link from 'next/link'

function BookCard(props) {
	const { title, image, author } = props
	return (
		<Fragment>
			<div class='flex items-center justify-center h-screen bg-slate-900'>
				<div class='bg-zinc-800 p-2 mx-6 rounded-2xl'>
					<div class='flex flex-col md:flex-row rounded-xl'>
						<img
							src={image}
							alt={title}
							class='object-fit rounded-xl h-80 md:h-64 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
						/>
						<div class='p-6 md:p-12'>
							<h2 class='font-serif text-xl font-medium text-white'>{title}</h2>

							<p class='max-w-xs my-4 text-s leading-5 tracking-wide text-white'>
								{`By ${author}`}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default BookCard
