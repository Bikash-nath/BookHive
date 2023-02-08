import Head from 'next/head'
import { Fragment } from 'react'

import LoginBanner from '../../../components/login/LoginBanner'
import HeartIcon from '../../../assets/icons/HeartIcon'

function FavouritesPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>Favourites</title>
				<meta name='description' content='History section' />
			</Head>
			<div className='bg-gradient'>
				{!user ? (
					<LoginBanner
						title='Your favourite books'
						message='Login to save books as favourites'
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
