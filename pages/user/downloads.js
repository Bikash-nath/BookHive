import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../components/login/LoginBanner'
import DownloadsIcon from '../../assets/icons/DownloadsIcon'

function DownloadsPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>Downloads</title>
				<meta name='description' content='Downloads page' />
			</Head>
			<div className='bg-gradient h-full'>
				{!user ? (
					<LoginBanner
						title='Your downloads'
						message='Login to read books offline'
						icon={<DownloadsIcon />}
					/>
				) : (
					<>{<HeartIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default DownloadsPage
