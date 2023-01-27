import { Fragment } from 'react'
import Link from 'next/link'

function AuthorCard(props) {
	const { name, image_sm, slug } = props
	return (
		<Fragment>
			<div class='flex items-center justify-center h-screen bg-slate-900'>
				<div class='bg-zinc-800 p-2 mx-2 rounded-2xl'>
					<Link href={`/authors/${slug}`}>
						<div class='flex flex-col md:flex-row rounded-xl'>
							<img
								src={image_sm}
								alt={name}
								class='object-fit rounded-xl h-auto md:h-64 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
							/>
							<div class='p-6 md:p-12'>
								<h2 class='font-serif text-xl font-medium text-white'>
									{name}
								</h2>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}

export default AuthorCard
