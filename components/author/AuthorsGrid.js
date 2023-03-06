import AuthorCard from './AuthorCard'

function AuthorsGrid({ authors }) {
	return (
		<div className='list-grid animate-slideup'>
			{authors.map((author, index) => (
				<AuthorCard
					key={index}
					name={author.name}
					image={author.image}
					slug={author.slug}
				/>
			))}
		</div>
	)
}

export default AuthorsGrid
