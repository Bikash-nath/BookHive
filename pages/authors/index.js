import Head from 'next/head'
import { Fragment } from 'react'

import AuthorGrid from '../../components/author/AuthorGrid'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>

			<section className='my-8 mx-4'>
				<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
					<div className='flex justify-center mb-20 md:justify-between'>
						<h3 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular Authors
						</h3>
					</div>
				</div>
				{<AuthorGrid authors={props.authors} />}
			</section>
		</Fragment>
	)
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'authorsData.json')
	const jsonData = fs.readFileSync(filePath, 'utf8')
	const authorList = JSON.parse(jsonData)

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
