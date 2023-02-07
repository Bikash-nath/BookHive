import LoginBanner from '../../components/login/LoginBanner'
import HistoryIcon from '../../assets/icons/HistoryIcon'

function ReadLaterPage() {
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
						title='Save books to read later❗'
						message='Login to save books to read them later'
						icon={<HistoryIcon />}
					/>
				) : (
					<>{<HistoryIcon dimensions='h-20 w-20' />}</>
				)}
			</div>
		</Fragment>
	)
}

export default ReadLaterPage
