import AuthorCard from './AuthorCard'

function AuthorGrid({ authors }) {
	return (
		<div className='list-grid animate-slideup'>
			{authors.map((author, index) => (
				<AuthorCard key={index} name={author.name} image={author.image_sm} slug={author.slug} />
			))}
		</div>
	)
}

export default AuthorGrid
