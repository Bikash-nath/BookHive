import Head from 'next/head'
import { Fragment } from 'react'
import DonateIcon from '../../assets/icons/DonateIcon'

function DonatePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Donate</title>
				<meta name='description' content='Donate section' />
			</Head>
			<div className='bg-gradient flex flex-col items-center justify-center gap-4 p-1 py-20 md:py-24'>
				<div className='flex text-3xl md:text-5xl py-4'>
					<DonateIcon dimensions={'h-24 w-24'} />
					Donate
				</div>
				<div className='text-lg font-semibold'>
					Your small, recurring donations will allow us to respond to requests more quickly and add
					new user-friendly features to the site.
				</div>
				<div className='text-md font-medium'>Consider supporting us via Patreon!</div>
				<div className='text-md font-medium'>Or make a one time donation via UPI</div>
			</div>
		</Fragment>
	)
}

export default DonatePage
