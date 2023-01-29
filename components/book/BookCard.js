import { Fragment } from 'react'
import Link from 'next/link'

function BookCard(props) {
	const { title, image, author, slug, key } = props
	return (
		<Fragment key={key}>
			<div className='flex items-center justify-center bg-slate-900 active:bg-black group-hover:flex'>
				<div className='bg-zinc-800 p-2 mx-6 rounded-xl'>
					<Link href={`/books/${slug}`}>
						<div className='flex flex-col rounded-xl'>
							<img
								src={image}
								alt={title}
								className='object-fit rounded-xl h-auto min-w-full md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
							/>
							<div className='p-6 md:p-12'>
								<h2 className='font-serif text-xl font-medium text-white'>
									{title}
								</h2>

								<p className='max-w-xs my-4 text-s leading-5 tracking-wide text-white'>
									{`By ${author}`}
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}

export default BookCard
