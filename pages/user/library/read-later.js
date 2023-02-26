import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../../components/login/LoginBanner'

import HistoryIcon from '../../../assets/icons/HistoryIcon'

function ReadLaterPage() {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>Read later</title>
				<meta name='description' content='Read later section' />
			</Head>

			{!user ? (
				<LoginBanner
					title='Save books to read later❗'
					message='Login to save books to read them later'
					icon={<HistoryIcon />}
				/>
			) : (
				<div className='flex flex-col items-center justify-center h-[93vh]'>
					<HistoryIcon dimensions='h-20 w-20' />
					<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
						<h3>No read later books found</h3>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ReadLaterPage
