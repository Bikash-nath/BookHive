import Head from 'next/head'
import { Fragment } from 'react'

import Footer from '../../components/layout/Footer'

function HelpPage(props) {
	return (
		<Fragment className='scroll-smooth'>
			<Head>
				<title>Help</title>
				<meta name='description' content='Help section' />
			</Head>
			<Footer />
			<section id='faq'>
				<div class='container mx-auto'>
					<h2 class='mb-6 text-3xl font-semibold text-center md:text-4xl'>
						Frequently Asked Questions
					</h2>
					<p class='max-w-lg px-6 mx-auto text-center text-graishBlue'>
						Here are some of our FAQs. If you have any other questions you'd
						like answered please feel free to email us.
					</p>
				</div>
			</section>
			<section id='faq-accordion'>
				<div class='container mx-auto px-6 mb-32'>
					<div class='max-w-2xl m-8 mx-auto overflow-hidden'>
						<div class='py-1 border-b outline-none group' tabindex='1'>
							<div class='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
								<div class='transition duration-500 ease group-hover:text-red-500'>
									What is BookHive?
								</div>
								<div class='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
									<ArrowDownIcon />
								</div>
							</div>
							<div class='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
								<p class='py-2 text-justify text-gray-400'>
									BookHive is an online platform for accessing thousands of free
									audiobooks, ePubs, PDFs, magazines and podcasts.
									<br />
									Our Aim is to help people explore, discuss and share books
									they love and improve process of learning and reading via the
									efforts of a fantastic community of readers.
								</p>
							</div>
						</div>
						<div class='py-1 border-b outline-none group' tabindex='2'>
							<div class='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
								<div class='transition duration-500 ease group-hover:text-red-500'>
									How can I find a new audiobooks?
								</div>
								<div class='transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500'>
									<ArrowDownIcon />
								</div>
							</div>
							<div class='overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease'>
								<p class='py-2 text-justify text-gray-400'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Fugiat, repellat amet doloribus consequuntur eos similique
									provident tempora voluptates iure quia fuga dicta voluptatibus
									culpa mollitia recusandae delectus id suscipit labore?
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default HelpPage
