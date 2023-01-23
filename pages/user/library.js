import Head from 'next/head'
import { Fragment } from 'react'

function LibraryPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>Library</title>
				<meta name='description' content='Library section' />
			</Head>
		</Fragment>
	)
}

export default LibraryPage
