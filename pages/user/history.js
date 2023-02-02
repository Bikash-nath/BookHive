import Head from 'next/head'
import { Fragment } from 'react'

import HistoryIcon from '../../components/ui/icons/HistoryIcon'
import LoginButton from '../../components/ui/LoginButton'

function HistoryPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>
			<div className='flex items-center screen-gradient text-white'>
				{!user ? (
					<div className='flex flex-col h-screen items-center justify-center items-center'>
						<div className='mx-auto px-auto p-6 md:p-8'>
							<HistoryIcon dimensions='h-20 w-20' />
						</div>
						<div className='py-4'>
							<h2>Keep track of what you read</h2>
						</div>
						<div className=''>
							<LoginButton />
						</div>
					</div>
				) : (
					<>{<HistoryIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default HistoryPage
