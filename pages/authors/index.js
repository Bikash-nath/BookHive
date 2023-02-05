import Head from 'next/head'
import { Fragment } from 'react'

import AuthorGrid from '../../components/author/AuthorGrid'
import { getAuthors } from '../../data/getData'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>

			<section className='relative text-white '>
				<div className='container mx-auto px-6 py-4 md:py-6'>
					<h3 className='text-2xl text-center md:text-left sm:text-3xl md:text-4xl'>
						Popular Books
					</h3>
				</div>
				{<AuthorGrid authors={props.authors} />}
			</section>
		</Fragment>
	)
}

export async function getStaticProps() {
	const authorList = getAuthors()

	if (!authorList) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			authors: authorList,
		},
		revalidate: 60, //for production
	}
}

export default AuthorListPage
