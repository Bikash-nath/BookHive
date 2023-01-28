import Head from 'next/head'
import { Fragment } from 'react'

function GenreBooksPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Genre Books</title>
				<meta name='description' content='Genre Books section' />
			</Head>
			<section className='my-8 mx-4'>
				<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
					<div className='flex justify-center mb-20 md:justify-between'>
						<h3 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular Genre Books
						</h3>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default GenreBooksPage
