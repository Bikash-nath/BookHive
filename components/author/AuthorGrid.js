import { Fragment } from 'react'
import AuthorCard from './AuthorCard'

function AuthorGrid({ authors }) {
	return (
		<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
			<div className='relative w-full h-56 group'>
				{authors.map((author) => (
					<AuthorCard
						name={author.name}
						image={author.image}
						slug={author.slug}
					/>
				))}
			</div>
		</div>
	)
}

export default AuthorGrid
