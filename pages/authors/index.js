import Head from 'next/head'
import { Fragment } from 'react'

import ListGridModal from '../../components/modals/ListGridModal'
import AuthorGrid from '../../components/author/AuthorGrid'
import { getAuthors } from '../../data/getData'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>

			<ListGridModal>{<AuthorGrid authors={props.authors} />}</ListGridModal>
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
