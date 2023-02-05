import Head from 'next/head'
import { Fragment } from 'react'

import Footer from '../../components/layouts/Footer'
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'

function HelpPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
			<div className='screen-gradient'>
				<section id='faq' className='text-white'>
					<div className='container mx-auto'>
						<h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
							Frequently Asked Questions
						</h2>
						<p className='max-w-lg px-6 mx-auto text-center text-graishBlue'>
							Here are some of our FAQs. If you have any other questions you'd
							like answered please feel free to email us.
						</p>
					</div>
				</section>
				<section id='faq-accordion'>
					<div className='container mx-auto px-6 mb-32'>
						<div className='max-w-2xl m-8 mx-auto overflow-hidden'>
							<div className='py-1 border-b outline-none group'>
								<div className='flex items-center justify-between py-3 text-gray-400 transition duration-500 cursor-pointer group ease'>
									<div className='transition duration-500 ease text-lg group-hover:text-purple-400'>
										What is BookHive?
									</div>
									<div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-purple-400'>
										<ArrowDownIcon />
									</div>
								</div>
								<div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
									<p className='py-2 text-justify text-gray-400'>
										BookHive is an online platform for accessing thousands of
										free audiobooks, ePubs, PDFs, magazines and podcasts.
										<br />
										Our Aim is to help people explore, discuss and share books
										they love and improve process of learning and reading via
										the efforts of a fantastic community of readers.
									</p>
								</div>
							</div>
							<div className='py-1 border-b outline-none group'>
								<div className='flex items-center justify-between py-3 text-gray-400 transition duration-500 cursor-pointer group ease'>
									<div className='transition duration-500 ease text-lg group-hover:text-indigo-600'>
										How can I find latest audiobooks?
									</div>
									<div className='transition duration-500 ease group-focus:-rotate-180 group-focus:text-purple-400'>
										<ArrowDownIcon />
									</div>
								</div>
								<div className='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
									<p className='py-2 text-justify text-gray-400'>
										Visit
										<a href='https://bookhive.vercel.app/audiobooks/new-arrivals'>
											bookhive.vercel.app/audiobooks/new-arrivals
										</a>
										to find latest audiobooks.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</Fragment>
	)
}

export default HelpPage
