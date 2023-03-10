import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import HistoryIcon from '../../../assets/icons/HistoryIcon'
// import useWindowDimensions from '../../../hooks/useWindowDimensions'
// import TopNavModal from '../../../components/modals/TopNavModal'

function ReadHistoryPage() {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [activeUser])

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Keep track of what you watch'
					message="Read history isn't viewable when logged out"
					icon={<HistoryIcon />}
				/>
			) : (
				<div className='page-gradient h-full'>
					<PageHeader pageTitle='Collections' />
					<div className='flex flex-col items-center justify-center h-[93vh]'>
						<HistoryIcon dimensions='h-20 w-20' />
						<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
							<h3>No read history found</h3>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ReadHistoryPage
