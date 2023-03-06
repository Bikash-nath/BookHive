import Head from 'next/head'
import { Fragment } from 'react'

import { getTopAuthors } from '../../api/authors'
import ListGridModal from '../../components/modals/ListGridModal'
import AuthorsGrid from '../../components/author/AuthorsGrid'
import TopNavModal from '../../components/modals/TopNavModal'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>
			<div className='p-1 xl:p-2 pb-16 xl:pb-12'>
				<TopNavModal />
				<div className='h-full mb-12'>
					<ListGridModal listTitle='All popular authors'>
						{<AuthorsGrid authors={props.authors} />}
					</ListGridModal>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const authors = await getTopAuthors()

	if (!authors) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			authors: authors.data,
		},
		revalidate: 600, //for production
	}
}

export default AuthorListPage
