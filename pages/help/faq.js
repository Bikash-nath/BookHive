import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

import Footer from '../../components/layouts/Footer'
import Accordion from '../../components/ui/Accordion'

function HelpPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
			<div className='page-gradient flex flex-col md:flex-row items-center justify-around'>
				<section id='faq' className=''>
					<div className='container mx-auto'>
						<h2 className='my-6 text-2xl md:text-3xl font-semibold text-center'>
							Frequently Asked Questions
						</h2>
						<p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
							Here are some of our FAQs. If you have any other questions you'd like
							answered please feel free to email us.
						</p>
					</div>
				</section>
				<section id='faq-accordion'>
					<div className='container mx-auto px-6 mb-auto'>
						<div className='max-w-2xl m-8 mx-auto overflow-hidden'>
							<Accordion title='What is BookHive?' tabIndex='1'>
								Bookhive is an reading platform where you can access to thousands of
								free audiobooks, eBooks and magazines.
								<br />
								Our Aim is to help people explore, discuss and share books they love
								and improve process of learning and reading via the efforts of a
								fantastic community of readers.
							</Accordion>
							<Accordion title='How can I find latest audiobooks?' tabIndex='2'>
								Visit{' '}
								<Link
									href='https://bookhive.vercel.app/books/category/audiobooks'
									className='text-indigo-500'>
									bookhive.vercel.app/audiobooks/new-arrivals
								</Link>{' '}
								to find latest audiobooks.
							</Accordion>
							<Accordion title='How can I contact BookHive team?' tabIndex='2'>
								You can visit us directly at
								<Link href='' className='text-indigo-500'>
									LinkedIn.
								</Link>
							</Accordion>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</Fragment>
	)
}

export default HelpPage
