import Head from 'next/head'
import { Fragment } from 'react'
import BookGrid from '../../components/book/BookGrid'

function AudioBooksPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular AudioBooks</title>
				<meta name='description' content='A list of all popular audiobooks!' />
			</Head>

			<section className='my-8 mx-4'>
				<div class='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
					<div class='flex justify-center mb-20 md:justify-between'>
						<h3 class='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular AudioBooks
						</h3>
					</div>
				</div>
				{<BookGrid books={props.audiobooks} />}
			</section>
		</Fragment>
	)
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd, 'data', 'booksData.json')
	const jsonData = await fs.readFile(filePath)
	const audiobookList = JSON.parse(jsonData)

	return {
		props: {
			audiobooks: audiobookList,
		},
		// revalidate: 60,
	}
}

export default AudioBooksPage
