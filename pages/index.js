import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Bookspot</title>
				<meta
					name='description'
					content='Bookspot is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div></div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const featuredPosts = await getFeaturedPosts()

	return {
		props: {
			posts: featuredPosts,
		},
	}
}

export default HomePage
