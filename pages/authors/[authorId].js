import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import AuthorCard from '../../components/author/AuthorCard'

function AuthorDetailPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.authorId}</title>
				<meta name='description' content='A author' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<h2 className='text-4xl text-center'>{props.author.title}</h2>

					<button className='hidden btn md:block'>See All</button>
				</div>
				<AuthorCard
					name={props.author.name}
					image={props.author.image}
					slug={props.author.slug}
				/>
			</div>
		</Fragment>
	)
}

let authorList

export async function getStaticProps(context) {
	const { params } = context
	const { authorId } = params.authorId

	const filePath = path.join(process.cwd, 'data', 'authorsData.json')
	const jsonData = await fs.readFile(filePath)
	authorList = JSON.parse(jsonData)

	const author = authorList.find((author) => author.slug === authorId)

	return {
		props: {
			author: author,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	return {
		paths: authorList.map((author) => {
			params: author
		}),
		fallback: false,
	}
}

export default AuthorDetailPage
