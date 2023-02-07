import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../components/login/LoginBanner'
import HeartIcon from '../../assets/icons/HeartIcon'

function FavouritesPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>
			<div className='bg-gradient'>
				{!user ? (
					<LoginBanner
						title='Your favourite books'
						message='Use heart icon to favourite books'
						icon={<HeartIcon />}
					/>
				) : (
					<>{<HeartIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default FavouritesPage
