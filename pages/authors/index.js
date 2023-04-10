import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../hooks/useWindowWidth'
import { getTopAuthors } from '../../API/authors'
import SpinnerContext from '../../store/spinnerContext'
import ListGridModal from '../../components/modals/ListGridModal'
import TopNavModal from '../../components/modals/TopNavModal'
import Paginate from '../../components/widgets/Paginate'

function AuthorListPage(props) {
	const coverRef = useRef()
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()
	const [authors, setAuthors] = useState(props.authors)
	const { toggleSpinner } = useContext(SpinnerContext)

	const router = useRouter()

	useEffect(() => {
		;(async () => {
			if (router.query.page) {
				toggleSpinner(true)
				var res = await getTopAuthors(router.query)
				setAuthors(res.data)
				toggleSpinner(false)
			}
		})()
	}, [router.asPath])

	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>
			<div className='pb-16 xl:pb-8' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal pageTitle='Popular Authors' coverRef={coverRef} pageRef={pageRef} />
				)}
				<ListGridModal listTitle='Popular authors' coverRef={coverRef} authors={authors} />
				<Paginate totalPages={4} page={1} />
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
		//for production
	}
}

export default AuthorListPage
