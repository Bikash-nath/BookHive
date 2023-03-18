import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FeedbackIcon from '../../assets/icons/FeedbackIcon'

function SupportPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Support</title>
				<meta name='description' content='Support section' />
			</Head>
			<div className='page-gradient h-[94vh] flex flex-col items-center justify-center gap-4 p-1 py-20 md:py-24'>
				<div className='flex text-3xl md:text-4xl py-4 gap-2'>
					<FeedbackIcon dimensions={'h-12 w-12'} />
					<p className='my-auto'>Support</p>
				</div>
				<div className='text-lg font-medium text-center m-2 mb-6'>
					Your small, recurring support and feedback will allow us to respond to bugs more
					quickly.
				</div>
				<div className='text-md font-medium italic'>
					Consider supporting our project at{' '}
					<Link
						href='https://github.com/Bikash-nath/BookHive'
						className='text-indigo-500'>
						github.com
					</Link>
				</div>
				<div className='text-md font-medium italic'>
					Provide some feedback at{' '}
					<Link
						href='https://github.com/Bikash-nath/BookHive/discussions'
						className='text-indigo-500'>
						BookHive/discussions
					</Link>
				</div>
			</div>
		</Fragment>
	)
}

export default SupportPage

/*
<div className='text-lg font-semibold m-2 mb-6'>
	Your small, recurring donations will allow us to respond to requests more
	quickly and add new user-friendly features to the site.
</div>
<div className='text-md font-medium italic'>
	Consider supporting us via Patreon!
</div>
<div className='text-md font-medium italic'>
	Or make a one time donation via UPI
</div>
*/
