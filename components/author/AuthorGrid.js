import AuthorCard from './AuthorCard'

function AuthorGrid({ authors }) {
	return (
		<div className='list-grid animate-slideup'>
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
