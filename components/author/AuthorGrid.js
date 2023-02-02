import { Fragment } from 'react'
import AuthorCard from './AuthorCard'

function AuthorGrid({ authors }) {
	return (
		<div className='grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 p-2 md:p-6 animate-slideup rounded-lg'>
			{authors.map((author) => (
				<AuthorCard
					key={author._id}
					name={author.name}
					image={author.image_sm}
					slug={author.slug}
				/>
			))}
		</div>
	)
}

export default AuthorGrid
