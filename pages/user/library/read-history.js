import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../../components/login/LoginBanner'

import HistoryIcon from '../../../assets/icons/HistoryIcon'

function ReadHistoryPage() {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>

			{!user ? (
				<LoginBanner
					title='Keep track of what you watch'
					message="Read history isn't viewable when logged out"
					icon={<HistoryIcon />}
				/>
			) : (
				<div className='flex flex-col items-center justify-center h-[93vh]'>
					<HistoryIcon dimensions='h-20 w-20' />
					<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
						<h3>No read history found</h3>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ReadHistoryPage
