import { useRef, Fragment } from 'react'
import Head from 'next/head'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import { getTopAuthors } from '../../api/authors'
import ListGridModal from '../../components/modals/ListGridModal'
import AuthorCards from '../../components/cards/AuthorCards'
import TopNavModal from '../../components/modals/TopNavModal'

function AuthorListPage(props) {
	const coverRef = useRef()
	const pageRef = useRef(null)
	const windowWidth = useWindowDimensions()

	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>
			<div className='p-1 xl:p-2 pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal pageTitle='Popular Authors' coverRef={coverRef} />
				)}
				<div className='h-full mb-12'>
					<ListGridModal listTitle='All popular authors' coverRef={coverRef}>
						<AuthorCards authors={props.authors} />
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
