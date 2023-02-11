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
			<div className='bg-gradient h-[94vh] flex flex-col items-center justify-center gap-4 p-1 py-20 md:py-24'>
				<div className='flex text-3xl md:text-4xl py-4'>
					<DonateIcon dimensions={'h-12 w-12'} /> Donate
				</div>
				<div className='text-lg font-semibold m-2 mb-6'>
					Your small, recurring donations will allow us to respond to requests more quickly and add
					new user-friendly features to the site.
				</div>
				<div className='text-md font-medium italic'>Consider supporting us via Patreon!</div>
				<div className='text-md font-medium italic'>Or make a one time donation via UPI</div>
			</div>
		</Fragment>
	)
}

export default DonatePage
