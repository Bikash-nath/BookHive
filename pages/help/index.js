import Head from 'next/head'
import { Fragment } from 'react'

import Footer from '../../components/layouts/Footer'
import Accordion from '../../components/ui/Accordion'
import FAQs from '../../utils/constants/FAQs'

function HelpPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
			<div className='bg-gradient flex flex-col md:flex-row items-center relative'>
				<section id='faq' className=''>
					<div className='container mx-auto'>
						<h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
							Frequently Asked Questions
						</h2>
						<p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
							Here are some of our FAQs. If you have any other questions you'd like answered please
							feel free to email us.
						</p>
					</div>
				</section>
				<section id='faq-accordion'>
					<div className='container mx-auto px-6 mb-32'>
						<div className='max-w-2xl m-8 mx-auto overflow-hidden'>
							<Accordion title='What is BookHive?' tabIndex='1'>
								'BookHive is an online platform for accessing thousands of free audiobooks, ePubs,
								PDFs, magazines and podcasts.
								<br />
								Our Aim is to help people explore, discuss and share books they love and improve
								process of learning and reading via the efforts of a fantastic community of
								readers.'
							</Accordion>
							<Accordion title='How can I find latest audiobooks?' tabIndex='2'>
								<p className='py-2 text-justify text-gray-400 font-semibold'>
									Visit{' '}
									<a
										href='https://bookhive.vercel.app/audiobooks/new-arrivals'
										className='text-indigo-500'>
										bookhive.vercel.app/audiobooks/new-arrivals
									</a>{' '}
									to find latest audiobooks.
								</p>
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
