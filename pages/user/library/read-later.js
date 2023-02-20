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
			<div className='bg-gradient min-h-full'>
				{!user ? (
					<LoginBanner
						title='Save books to read later❗'
						message='Login to save books to read them later'
						icon={<HistoryIcon />}
					/>
				) : (
					<>{<HistoryIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default ReadLaterPage
