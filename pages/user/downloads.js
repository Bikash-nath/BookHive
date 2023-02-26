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

			{!user ? (
				<LoginBanner
					title='Your downloads'
					message='Login to read books offline'
					icon={<DownloadsIcon />}
				/>
			) : (
				<div className='flex flex-col items-center justify-center h-[93vh]'>
					<HeartIcon dimensions='h-20 w-20' />
					<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
						<h3>No downloads found</h3>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default DownloadsPage
