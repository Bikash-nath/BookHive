import Head from 'next/head'
import { Fragment } from 'react'
import BookGrid from '../../components/book/BookGrid'

function BookListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Books</title>
				<meta name='description' content='A list of all popular ebooks!' />
			</Head>

			<section className='my-8 mx-4'>
				<div class='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
					<div class='flex justify-center mb-20 md:justify-between'>
						<h3 class='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular Books
						</h3>
					</div>
				</div>
				{<BookGrid books={props.books} />}
			</section>
		</Fragment>
	)
}

export async function getStaticProps() {
	const booksFilePath = path.join(process.cwd, 'data', 'booksData.json')
	const booksData = await fs.readFile(booksFilePath)
	const bookList = JSON.parse(booksData)

	if (!bookList || !authorList) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			books: bookList,
		},
		revalidate: 60, //for production
	}
}

export default BookListPage
