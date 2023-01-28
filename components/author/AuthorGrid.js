import { Fragment } from 'react'
import AuthorCard from './AuthorCard'

function AuthorGrid({ authors }) {
	return (
		<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
			{authors.map((author) => (
				<AuthorCard
					name={author.name}
					image={author.image}
					slug={author.slug}
				/>
			))}
		</div>
	)
}

export default AuthorGrid
