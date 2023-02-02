import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../components/layouts/LoginBanner'
import HistoryIcon from '../../components/ui/icons/HistoryIcon'

function HistoryPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>
			<div className='screen-gradient text-white'>
				{!user ? (
					<LoginBanner
						title='Keep track of what you watch'
						message="Read history isn't viewable when logged out"
						icon={<HistoryIcon />}
					/>
				) : (
					<>{<HistoryIcon dimensions='h-20 w-20' color={'white'} />}</>
				)}
			</div>
		</Fragment>
	)
}

export default HistoryPage
