import Head from 'next/head'
import { Fragment } from 'react'
import HistoryIcon from '../../components/ui/icons/HistoryIcon'

function HistoryPage(props) {
	const user = ''

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>
			<div className='flex items-center screen-gradient'>
				{user?.name ? (
					<>
						{user?.name ? (
							<img
								className='rounded-full p-1 w-8 h-8'
								src={user?.image}
								alt='user image'
							/>
						) : (
							<HistoryIcon dimensions='h-20 w-20' />
						)}
					</>
				) : (
					<Link href='/user/login'>
						<button className='flex items-center space-x-2 p-2 font-bold rounded-full justify-center lg:p-4 font-sans shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
							<HistoryIcon dimensions='h-10 w-10' />
							<div className='text-white text-2xl hover:text-gray-200'>
								Login
							</div>
						</button>
					</Link>
				)}
			</div>
		</Fragment>
	)
}

export default HistoryPage
