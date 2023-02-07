import LoginBanner from '../../components/login/LoginBanner'
import HistoryIcon from '../../assets/icons/HistoryIcon'

function ReadHistoryPage() {
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
						title='Keep track of what you watch'
						message="Read history isn't viewable when logged out"
						icon={<HistoryIcon />}
					/>
				) : (
					<>{<HistoryIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default ReadHistoryPage
